import './page-admin.css'
import useFetch from '../components/useFetch'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {error, isPending, data: users} = useFetch('http://localhost:8000/user')
    const [loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })
    const [valid, setValid] = useState(true)
    const [message, setMessage] = useState()
    const navigate = useNavigate()

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    const submitForm = (e) =>{
        let isValid = true
        let errMessage = ""

        if(loginForm.username ===  "" || loginForm.username === null || loginForm.password ===  "" || loginForm.password === null){
                isValid = false
                errMessage = 'username & password required'
        }else{
            users?.map(user => {
                if(user.username === loginForm.username && user.password === loginForm.password){
                    setCookie('authToken',loginForm.username,7)
                    navigate('/admin')
                }
                else {
                    isValid = false
                    errMessage = 'username or password is wrong'
                }
            })
        }
        setValid(isValid)
        setMessage(errMessage)
    }


    return (  
        <div className="login-page">
                <h1>ADMIN PAGE</h1>
            <div className="form">                
                <form className="login-form" onSubmit={(event)=>{
                    event.preventDefault()
                    submitForm()
                }}>
                    <input type="text" placeholder="username" onChange={(e)=>setLoginForm({...loginForm,username:e.target.value})}/>
                    <input type="password" placeholder="password" onChange={(e)=>setLoginForm({...loginForm,password:e.target.value})}/>
                    <p>{message}</p>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;