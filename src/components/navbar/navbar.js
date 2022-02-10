import React, {useState} from 'react';
import styled from 'styled-components';
import {links} from '../../utils/constants';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import  {UseGlobalProductContext} from '../../context/context'
  const NavBar = () => {
    const [ option, setOption] = useState('');
    const {opensidebar} = UseGlobalProductContext();
     const { isAuthenticated, loginWithRedirect, logout,user } = useAuth0();
     const isUser = isAuthenticated && user;
     const handleclick = (e)=>{
       e.preventDefault();
       if(option==='logout'){
         logout({option:window.location.origin})
        }
      }
     return (
      <NavWrapper>
      <div className = "nav-center" >
      <div className ="nav-header" >
      <Link to = "/">
       <h4>CodingAddicts</h4>
      </Link>
      
      <button className="nav-toggle" onClick = {opensidebar}><FaBars/> </button>
      </div>
      <ul className="nav-links">
      {
        links.map((link)=>{
          const {url , text, id} =link;
          return <li key ={id}>
            <Link to ={url}>{text} </Link>
          </li>
        })
      }
      
      </ul>
     {
       isUser ? <button className='' onClick={handleclick}>
         <select className='logout cart-wrapper-btn' value = {option} onChange = {(e)=>setOption(e.target.value)}>
           <option value = {user.name}>
             {user.name}
             
           </option>
           <option value ="logout">
             Logout
           </option>
           </select>

         </button>:
       
       <button className='btn cart-wrapper-btn'  onClick={()=> loginWithRedirect()}>
        Login</button>
     }
     
      

      </div>
    </NavWrapper>
  )
}
const NavWrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 height:5rem;
.nav-center{
   width:90vw;
   margin: 0 auto;
   max-width:var(--max-width);

 }
 .nav-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
 
  img{
    width:175px;
    margin-left:-15px;
    box-shadow:0.2rem  .2rem;
    background:var(--clr-grey-10);
    border-radius:0.39rem;

  }
 }
  img:hover{
    box-shadow:0.3rem  0.3rem;
    background:var(--clr-white);
    color:var(--clr-primary-6)
  }
 .nav-links{
  display:none;
}
.cart-wrapper-btn{
  display:none;
}
.myname{
  margin-top:1.4rem;
  margin-right:1rem;
}
.nav-toggle{
  background:transparent;
  border-color:transparent;
  color:var(--clr-primary-5);
  cursor:pointer;

  svg{
    font-size:2rem;
  }
}
.nav-toggle:hover{
  color:var(--clr-primary-7)
}
.cart-btn-wrapper {
    display: none;
  }
.mypicture{
  border-radius:40%;
}
.logout{
  background:var(--clr-primary-5);;
  border-color:white;
  box-shadow:none;
  width:150px;
  color:black;
  font-weight:600
  
  
}
button{
  border:transparent;
  
}
option{
  postion:fixed;
  border:transparent;
  height:40px;
}
@media(min-width:992px){
  .nav-center{
    display:grid;
    grid-template-columns:auto 1fr auto;
    align-items:center;
  }
  .cart-btn-wrapper {
    display: grid;

  }
  .nav-toggle{
    display:none;
  }
  .cart-wrapper-btn{
    display:grid;
  }
  .nav-links{
    display:flex;
    align-items:center;
    justify-content:center;
    li{
      margin:0 0.5rem;
    }
    a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
  }
  

 }
`

export default NavBar;