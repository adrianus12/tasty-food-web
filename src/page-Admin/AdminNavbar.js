import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getCookie } from '../components/Utils';


const AdminNavbar = ({intro}) => {
    const navigate = useNavigate()
    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        navigate('/')
    }

    return (  
        <div className="adminNavbar">
            <h1>{intro}</h1>
            <div className="menu">
                <Link to='/news-list' className='link'><h3>news</h3></Link>
                <Link to='/gallery-list' className='link'><h3>galleries</h3></Link>
                <Link to='/mail-list' className='link'><h3>mails</h3></Link>
                <button onClick={()=>{eraseCookie('authToken')}}><h3>log out</h3></button>
                <p>{'('}{getCookie('authToken')}{')'}</p>
            </div>
            
        </div>
    );
}
 
export default AdminNavbar;