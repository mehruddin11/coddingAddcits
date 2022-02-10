import React ,{useState, useEffect, useCallback} from 'react';
import {HiDownload} from 'react-icons/hi'
// import {FaGithub} from 'react-icons/fa'
import  {useParams} from 'react-router-dom';
import   {UseGlobalProductContext} from '../../context/context'
import Premium from '../../assets/premium.png'
import { useAuth0 } from "@auth0/auth0-react";

const SIngleTemplate = () =>{
     const { isAuthenticated,user,loginWithRedirect } = useAuth0();
        const isUser = isAuthenticated && user;
    const {id} = useParams();
    const [template ,setTepmplate] = useState([])
     const {loading,
		setLoading} = UseGlobalProductContext();

    const fetchTemplate=  useCallback(async()=>{
        
        setLoading(true)
        const response =  await fetch(`https://shrouded-falls-50109.herokuapp.com/template/${id}`)
        const data =  await response.json();
        setTepmplate(data);
        
       
        setLoading(false);
		
      
    },[id, setLoading])
useEffect(()=>{
    fetchTemplate()
},[id, fetchTemplate]);
if(loading){
    return <div className='loading'></div>
}

const {img , text}= template;
     return (
         <div>
             {id=== '1' | id ==='2' | id ==='3' |id=== '4' ?
            
             <h4 className='single-temp-text'> {text}</h4>  :
             <h4 className='single-temp-text'> {text} <img  style =
             {{width:'50px' , height:'auto',background:'transparent', marginLeft:'0.4rem'}} src={Premium} alt =""/> </h4>}
            
             <div className='img-single-temp'>
                 <img className='single-temp-img' src = {img} alt ="" />

             </div>
             <div className='btn-template-single'>
                 {
                     isUser  ? <a href ={ `https://shrouded-falls-50109.herokuapp.com/download/${id}` }>
                         <button className='btn-download-btn'  > Download<HiDownload/> </button></a>
                     :id <= 4 ? <a href ={ `https://shrouded-falls-50109.herokuapp.com/download/${id}` }>
                         <button className='btn-download-btn'  > Download<HiDownload/> </button></a> 
                     :<button className='btn' onClick={()=>loginWithRedirect()}> Need to Signin</button>

                 }
                 
              </div>
            </div>
     )
}



export default SIngleTemplate;