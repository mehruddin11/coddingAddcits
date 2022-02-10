import AccessDenied from '../assets/denied.gif';
import { Link } from 'react-router-dom';

const Authpage = () =>{
    return (
       
    <div className='acessdenied'>
            <h4> Cant pass it without Login </h4>
             <img className='bird' src ={AccessDenied} alt = "" />
             <Link to='/' > <button className='btn' >Back To Home</button></Link>
    </div>

    )
}
export default Authpage;