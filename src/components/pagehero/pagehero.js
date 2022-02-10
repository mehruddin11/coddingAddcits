import styled from 'styled-components';
import {Link} from 'react-router-dom'
const PageHero = ({title}) =>{
	return (
		<Wrapper>
		<div>
		<h3 className="link" > <Link  to = "/">Home</Link>	/{title} </h3>
		</div>	
		</Wrapper>
		)
}
const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:3rem;
width:100vw;
margin:0 auto;
max-width:100vw;
background:var(--clr-primary-5);
margin-top:2rem;
.link{
	font-size:2rem;
	color:var(--clr-white);
}
a{
	color:var(--clr-white);
}
`
export default PageHero;