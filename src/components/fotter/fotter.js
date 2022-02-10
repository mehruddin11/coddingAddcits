import React from 'react';
import styled from 'styled-components';
import {social} from '../../utils/constants'
const Fotter = () =>{
	return (
		<FotterWrapper>
			<div   className='social'>

			{
				social.map((links)=>{
					const {id, icon,text, link}= links;
					return <article key= {id}>
						<h5 className='text'>{text}</h5>
						<a  href ={link}>{icon}</a>
					</article>
				})
			}
			</div>
		 <div className='fotter'>
		<h5> &copy;{new Date().getFullYear()} 
		</h5>
		<nav> All Right Reserved </nav>

		 </div>

	
		</FotterWrapper>

		)
}
const FotterWrapper = styled.div`
 background:hsl(22, 31%, 81%);;
 height:50vh;
 
 border-top-left-radius:0.5rem;
 border-top-right-radius:0.5rem;
 margin-top:2rem;
 .social{
	 padding:1rem;
	 display:flex;
	flex-direction:column;
	 
 }
 a{
	 text-decoration:none;
	 color:black;
	 font-size:1.6rem;
	 background:transparent;
	 border-color:transparent;
	 margin-left:5rem;
}
a:hover{
	color:hsl(209, 28%, 39%);;
	
}
.text{
	text-transform:uppercase;
	margin-left:5rem;
	color:black;

}
.fotter{
	text-align:center;
	color:black;
	font-size:1.5rem;
}

}
`
export default Fotter;