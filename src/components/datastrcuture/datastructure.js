// import { UseGlobalProductContext } from "../../context/context";
// import styled  from 'styled-components'
// import {FcNext ,FcPrevious} from 'react-icons/fc'
// import {Link} from 'react-router-dom'
//  const Datastructure = () =>{
//     const {Question, page, loading,HandleNextPage,
//         HandlePrevPage, Query
        
// 		} = UseGlobalProductContext()
   
// return (
//         <Wrapper>
//         <h4 className="heading"> Top 30 Data Structure & Algorithms
//              Interview Questions and Answers for 2022
//         </h4>
        
//         <div className="btn-prev-next">
//               <button className={`${loading ? 'cursor-change':''}`} onClick={HandlePrevPage}> <FcPrevious/> </button >  <button className={`${loading ? 'cursor-change':''}`} onClick={HandleNextPage}>  <FcNext/></button>
//         </div>
//         <h5 className="page-num">  {page} </h5>
//         <div className="allquestions">
//          {loading ?<div className="loading"></div>:
//            Question.map((quest)=>{
//             const {id ,question} = quest;
//             return <article className="questions" key ={id}>
//                 <Link to = {`singlequestion/${id}`}> <p className="singlequestion">  {question} </p></Link>
//                 </article>
//         })

//     }
//     <div className="btn-prev-next">
//               <button className={`${loading ? 'cursor-change':''}`} 
//               onClick={HandlePrevPage}> <FcPrevious/> </button >  
//               <button className={`${loading ? 'cursor-change':''}`} 
//               onClick={HandleNextPage}>  <FcNext/></button>
//         </div>
//         <h5 className="page-num">  {page} </h5>

//         </div>
//         </Wrapper>
//     )
// }
// const Wrapper = styled.div`

// .heading{
//     margin:1rem;
//     text-align:center;
//     padding:1rem;
//     background:hsl(22, 31%, 60%);
//     border-radius:0.7rem;
//     color:white;
// }
// .cursor-change{
//     cursor:not-allowed ;
// }
// .singlequestion{
//    display:flex;
//    align-items:center;
//    margin:1rem;
//    padding:1rem;
//    background:lightBlue;
//    color:#222;
//    font-size:1.1rem; 
//    box-shadow:0 10px 10px #222; 
//    cursor:pointer;
//    transition:all 0.14s linear;
//    border-radius:0.7rem;
//    width:90vw;
//    margin: 01.5rem auto;
    
// }
// .singlequestion:hover{
//     transform:scale(1.02)
//  }
// .loader{

// }
// .btn-prev-next{
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     margin: 0 auto;
// }
// button{
//     background:transparent;
//     border:transparent;
//     text-align:center;
//     font-size:1.4rem;
//     margin-left:2rem;
//     margin-right:2rem;
//     cursor:pointer;
//     margin-top:2rem;
// }
// .page-num{
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     margin: 0 auto;
//     background:lightBlue;
//     width:4rem;
//     padding:0.3rem;
//     border-radius:20%;
// }
 
// `
// export default Datastructure;