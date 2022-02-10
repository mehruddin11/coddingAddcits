import React from 'react';
import styled from 'styled-components'
import {links} from '../../utils/constants';
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import {UseGlobalProductContext} from '../../context/context';
const SideBar = () =>{
  const { isAuthenticated, loginWithRedirect, logout,user} = useAuth0();
  const isUser = isAuthenticated && user;
  const {isSidebaropen, closesidebar} = UseGlobalProductContext();
  	return (
		<SidebarContainer>
		<aside className={`${isSidebaropen ? 'sidebar show-sidebar' : 'sidebar'}`} >
		<div className="sidebar-header" > 
    <Link to ="/">
		<h4>CodingAddicts</h4>
    </Link>
		<button className="close-btn" onClick= {closesidebar} ><FaTimes/> </button>
		</div>
		<ul className="links">
		{
			links.map((link)=>{
				const {url, text, id} = link;
				return <li key ={id}>
				<Link to ={url} onClick={closesidebar} > {text} </Link>
				</li>
			})
		}
 		</ul>
     <div>
      {
        isUser? <img src = {user.picture} alt ={user} />:''
      }
     {
       isUser ? <p style = {{
         color:'black',
         fontWeight:'800',
         textTransform:'uppercase'
       }} >Wlecome {user.name}</p> :''
     }
     </div>
     {
       isUser ? <button className='btn' onClick={()=>logout({option:window.location.origin})}>Logout</button> :
       <button className="btn" onClick={()=>loginWithRedirect()}> Login </button>
     }
		 
		</aside>
		</SidebarContainer>

	)
}
const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    opacity:100%;
  }
  img {
    border-radius:50%;
    width:8%;
    height:10%;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
    opacity:100%;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
    opacity:100%;
  }
  .links {
    margin-bottom: 2rem;
    opacity:100%;
   
   
    
    
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-2);
    color: white;
    font-wight:500;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: all 0.5s linear;
    transform: translate(-100%);
    z-index: 1;
    opacity:80%;
    
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 2;
    
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 800px) {
    .sidebar {
      width:60%;
    }
  }
`

export default SideBar;