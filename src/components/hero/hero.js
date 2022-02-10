import React from 'react';
import styled  from 'styled-components';
import {Link} from 'react-router-dom';
import AboutImg from '../../assets/bg.jpg';
import aboutImg from '../../assets/bg2.jpg'
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () =>{
  const { isAuthenticated,user,loginWithRedirect } = useAuth0();
  const isUser = isAuthenticated && user;
	return (
		<Wrapper className='section-center'>
      <article >
        <h1 className='three_D'>
         Code Your Future  <br/>
           <br />
         
        </h1>
        <p>
          
        </p>
        {
          isUser ? <Link to='/compiler' className='btn hero-btn'>
         Open compiler
        </Link>: <button className='btn hero-btn' onClick={()=>loginWithRedirect()}> Open compiler</button>
        }
      </article>
      <article className='img-container'>
        <img src={AboutImg} alt='nice table' className='main-img' />
        <img src={aboutImg} alt='person working' className='fix-img' />
      </article>
    </Wrapper>
		)
}
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .fix-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
      object-fit:cover;

    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`


export default Hero;