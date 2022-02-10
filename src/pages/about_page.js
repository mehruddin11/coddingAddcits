import React, { useState, useEffect } from 'react';
import { PageHero } from '../components';
import styled from 'styled-components';
import {SliderImg} from '../components/slidersrc/slidersrc'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';
const About = () => {
	const [index, setIndex] = useState(1);
	const [photo, setPhoto] = useState(SliderImg);
	const { image, id } = SliderImg[index];
	useEffect(() => {
		const lastindex = photo.length - 1;
		if (index < 0) {
			setIndex(lastindex);
		}
		if (index >= lastindex) {
			setIndex(0)
		}
	}, [index, photo,setPhoto])
	useEffect(() => {
		const slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => clearInterval(slider)
	}, [index]);

	return (
		<main>
			<PageHero title="About" />
			<Wrapper className="page section section-center">
				<img className="about-img" src={image} alt={id} />
				<article>
					<div className="title">
						<h2> My Story </h2>
						<div className="underline" />
						 <FaQuoteLeft className='quotes'/>  <br></br>
						<p>
						Hello, I am mehruddin and I am a web developer. 
						I live and study in  integral university   Lucknow  Uttarpradesh.<br/>
						I spend most of my day, experimenting with HTML, CSS and Javascript 
						(and it's endless list of frameworks). I enjoy coding and the challenges 
						of learning something new everyday.
						</p>
						<FaQuoteRight className='quotes'/>
					</div>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.div`
 
 	gap:4rem;
 	display:grid;
 	
 img{
 	width:100%;
 	display:block;
 	border-radius:var(--radius);
 	height:500px;
 	transition:all 0.3s linear;
 	object-fit:cover;

 }
 .about-img{
 	object-fit:cover;
 }
.quotes{
	 color:blue;
	 font-size:0.6rem;
	 margin:0.6rem;
	 margin-top:2rem;
 }
 p{
 	line-height: 2;
    max-width: 30em;
    margin: 0 1rem auto;
	color:black;
	text-transform:captalize;
	font-size:01.5rem;
	
 }
 .title{
 	text-align:left;
	 color:black;
 }
 .underline{
 	margin-left:2rem;
 }
 @media(min-width:992px){
 	grid-template-columns: repeat(2, 1fr) ;
 }
`
export default About;