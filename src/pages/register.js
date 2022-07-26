import React from 'react'
import '../styles/signup.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase'

function Register() {

  const[email, setEmail]= useState('');
  const[password, setPassword]= useState("");
  

  let history= useHistory();
  

  const SignUp = () =>{

    createUserWithEmailAndPassword(auth , email , password).then(()=>{
      history.push("./login")
    }).catch((error)=>{
      console.log(error);
    })

    
    
  };
  return (
    <div class="signup-page">
    <div class="form1">
      <div class="signup">
        <div class="signup-header">
          <h3>Signup</h3>
          <p>Please do a quick signup.</p>
        </div>
      </div>
      <form class="signup-form">
        <input type="email" placeholder="Email"onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="password" placeholder=" Re-Enter Password"/>
        <Link to="./login"><button onClick={SignUp} >signup</button></Link>
       
      </form>
    </div>
  </div>
  )
}

export default Register;
