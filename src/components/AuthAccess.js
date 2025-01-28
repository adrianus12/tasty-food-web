import { useEffect, useState } from 'react';
import { getCookie } from './Utils';

export default function AuthAccess(ComposedComponent,path) {

    const [checkAuth,setCheckAuth] = useState(false)
    
    useEffect(()=>{
        console.log(getCookie('authToken'))
        if(window.location.pathname!=path){
            setCheckAuth(true)
            return
        }
        if(getCookie('authToken')==null && window.location.pathname!='/login') {
            window.location.href='/login'
            return
        }
        setCheckAuth(true)
    },[])
    return checkAuth? <ComposedComponent/> : <></>
  
  }