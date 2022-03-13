import React from 'react'
import { useHistory } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa"
import { Button } from '@mui/material';
import  { auth, provider } from "../firebase"
import "./css/login.css"



function Login() {
  let history = useHistory()
    
    
    const signIn = ()=>{
      auth.signInWithPopup(provider).then(result => {
         let user =  result.user
         console.log(user);
         localStorage.setItem("user", JSON.stringify(user))
         history.push("/")
      } ).catch(e=>{
        console.log(e);
        })
      
    }
  
  return (
    <div className='login'>
      <div className="login__logo">
      <FaFacebook className="icon" /> 
      <p>Facebook</p>
      </div>  

      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login