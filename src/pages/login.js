import React, {useState} from 'react'
import "../styles/login.css"
//import  pic from "../images/log.jpg";
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
function Login() {
  

    const[email, setEmail]= useState('');
  const[password, setPassword]= useState("");


  let history= useHistory();

  const login=(()=>{
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      history.push("/")

    }).catch((err)=>{
      console.log(err);
    })
   
  }) 

  return (
    <div class="login-page">
    <div class="form">
      <div class="login">
        <div class="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
      </div>
      <form class="login-form">
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <Link to="/"><button onClick={login}>Login{" "}</button></Link>
        <p class="message">Not registered?<Link to="./register"><span>Create Account</span></Link> </p>
        <p class="message"><Link to="./register"><span>Forgot Password?</span></Link> </p>
      </form>
    </div>
  </div>
  )
}

export default Login;
