import {Link} from 'react-router-dom'
import  React,{ useState, useCallback , useRef} from 'react'
import   {UseGlobalProductContext} from '../../context/context'

// let url =`http://localhost:5000/`
let url = `https://shrouded-falls-50109.herokuapp.com/`
const ReactPage = () =>{
    const [template ,setTepmplate] = useState([])
    const {loading} = UseGlobalProductContext();
    const [Search, setSearch]= useState('')
    const inputRef = useRef();
     const fetchTemplate= useCallback(async(url)=>{
       
        const response =  await fetch(url)
        const data =  await response.json();
        setTepmplate(data);
       
       
		
      
    },[])
React.useEffect(()=>{
    Search &&fetchTemplate(`${url}search/?keyword=${Search}`)

    !Search && fetchTemplate(url)
    
},[fetchTemplate,Search])
React.useEffect(()=>{
    inputRef.current.focus();
},[])

    if(loading){
        return <div className='loading'>

        </div>
    }
    return (
            <div>
            <h3 className='single-temp-text'> Free Templates For Everyone </h3>
            <div >
                <form  className='search-form'>
           
            <input  className='input-text' type = "text" ref ={inputRef}  placeholder='search template'
             value={Search} 
                onChange= {(e)=>setSearch(e.target.value)}/>
                </form>
            </div>
               {
                   Search.length > 1  ? template.map((temp)=>{
                       return <article >
                          <p className='seggestion'> {temp.keyword} </p>
                       </article>
                   }): ''
                 
               }
               <div style={{
                   margin:'3rem'
               }}>

               </div>

           
            <div className='container'>
               {
                   template.map((temp)=>{
                       const {homepage,id,img}= temp;
                       return <article className='container-template' key= {id}>
                           <img className='img-template' src={img} alt ="name"/>
                           
                           <div className='btn-template' >
                           <Link to= {`template/${id}`}><button  className='btn-temp-btn btn' >
                                download Source code</button></Link>
                                
                          <a  target={"_blank"} rel='noreferrer' href = {homepage }><button className='btn-temp-btn  btn ' >
                               {homepage ? 'seeLive':'Not Available'} </button></a> 
                           </div>
                           
                       </article>
                       
                   })
               }
            </div>
           
            
            </div>
    )
}






export default ReactPage;