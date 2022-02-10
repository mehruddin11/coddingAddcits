// import { UseGlobalProductContext } from "../../context/context";
// import { useParams } from "react-router-dom";
// import { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// const SingleQuestion = () =>{
//     const [Question, setQuestion] = useState([]);
//     const {id}= useParams();
//     const {loading,
// 		setLoading ,
// 		} = UseGlobalProductContext();
    
//     const fetchmovies= useCallback(async()=>{
//         setLoading(true)
// 		const response= await fetch(`https://secret-atoll-75454.herokuapp.com/question/${id}`);
// 		const data = await response.json();
//         setQuestion(data);
//         setLoading(false)
// 	},[id, setLoading])
// 	useEffect(()=>{
// 		fetchmovies();
// 	},[id, fetchmovies])
//     // eslint-disable-next-line
//     const { type , solution, question } = Question;
//     if(loading){
//         return <div className="loading"></div>
//     }
//     return (
//     <Wrapper>

//     <div className="singlequestion">
//         <h4 className="question">  {question} </h4> 
//         <div>
//             <h5  className="solution"> {solution}   </h5>
//         </div>
//     </div>
//         <Link to= "/datastructure"> <button className="btn"> Back</button></Link>
//     </Wrapper>
//     )
// }
// const Wrapper = styled.div`
// background:#3fb0ac;
// margin:1rem;
// border-radius:0.5rem;
// min-height:50vh;
// .singlequestion{
//    margin:1rem;
//    display:grid;
//    grid-template-columns:1fr;
//    gap:1.4rem;
   
// }
// .question{
//     text-align:center;
//     border-radius:0.7rem;
//     padding:1rem;
//     background:#F8E5E5;
   
// }
// h5{
//     width:90%;
//     display:flex;
//     align-item:center;
//     justify-content:center;
//     margin:1rem auto;
//   color:#222;
//   text-transform:captalized;
//   letter-spacing:0.04rem;
//     font-size:1.1rem;
// }
// @media screen and (min-width:800px){
//         .question{

//             width:60vw;
//             margin:0 auto;
//         }
//         width:70vw;
//         margin:0 auto;
//         min-height:60vh;
//         text-align:center;
//         h5{
//             width:40vw;
//             margin:1rem auto;
//             font-size:1.3rem;
             
//         }

// }

// `
// export default SingleQuestion;