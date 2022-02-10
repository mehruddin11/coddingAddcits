import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState } from 'react'
import styled from 'styled-components';
import {FiPlay} from 'react-icons/fi';
const Compiler =() =>  {
   
    const [output ,setOutput] = useState('');
    const [loading ,setLoading] = useState(false);
    const [Error, setError] = useState('');
    const [language, setLanguage] = useState('py');
    const [code, setCode] = React.useState('');
    const HandleSubmit =async() =>{
      try{
          if(code){
            setLoading(true)
           const response = await fetch('https://cryptic-badlands-85918.herokuapp.com/run', {
           
               method:'post',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify({
                language:language,
                code:code
                })
            })
            const data = await  response.json();
            if(response.status === 500){
                setError(data.stderr);
            }
            setOutput(data.output);
            
            setLoading(false);
        }
    }
    catch(err){
        console.log(err);
        
    }
}
  return (
      <div>
          <div className='btn-compiler-div'>
          <button on className='btn-compiler' onClick={HandleSubmit}>Run <FiPlay/> </button>
        </div> 
        <div className='lan'>
             
         <select   value ={language}  onChange= {(e)=>setLanguage(e.target.value)} >
             <option value ="py"  >Python</option>
             <option value ="js" >javascript</option>
        </select>
        </div>
      <Wrapper>
    <CodeEditor
    className='editor'
    value={code}
    language={language}
    placeholder={(language==='js' && 'console.log("hello world")') || (language === 'py' && 'print("hello world")')}
    onChange={(evn) => setCode(evn.target.value)}
    padding={10}
    style={{
            fontSize: 17,
            backgroundColor: "#222",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            borderRadius:'0.4rem',
            caretColor:'white',
            color:'white',
            minHeight:'60vh'
        }}
        />{
            <nav className='output'> 
            { <div  className='clear'> <button onClick={()=>setOutput('')  } className='clear-btn'>clear console</button></div>}
               {
                   loading ? 'compiling...':  <p className='stdout'> {'>'} {output}</p>
               }
               {Error ? <p className='err-show'
                onClick={()=>setError('')}  > 
                <button style={{width:'100px', backgroundColor:'lightBlue' ,border:'transparent', borderRadius:'0.5rem', cursor:'pointer'}}> 
                ClearError</button>Error : { (language ==='js' && Error.slice(80,400) )|| (language === 'py' && Error.slice(80,300))} 
                </p> : ''}
            </nav>
        }
        </Wrapper>
        </div>
     
  );
}
const Wrapper = styled.div`
   display:grid;
   grid-gap:2rem;
   grid-template-colomns: 1fr 1fr;
   margin:1.5rem;
    margin-top:0;
   textarea{
       resize:none;
      
   }
   .editor{
       diaplay:flex;
    }
   .output{
    width:90vw;
    height:50vh;
    background:#222;
    border-radius:0.5rem;
    color:white;
    padding:1.5rem;
   }
   .stdout{
       color:#ccc;
   }
   .clear{
    display: flex;
    align-items: center;
    justify-content: flex-end ;
    }
    .clear-btn{
        background:none;
        border:none;
        font-size:1rem;
        box-shadow:0 3px 6px gray;
        background:lightBlue;
        padding:0.4rem;
        border-radius:0.5rem;
        cursor:pointer;
    }
 
   @media screen and (min-width:800px){
      
        grid-template-columns: repeat( 2 , 1fr);
        .editor{
            width:51vw;
        }
        .output{
            width:43vw;
            height:60vh;
        }
    }
`
export default Compiler;