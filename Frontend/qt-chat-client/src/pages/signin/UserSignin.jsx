import React, { useEffect, useState } from 'react';
import "./UserSignin.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function UserSignin() {
  const[user, setUser]=useState({
    email:"",
    pass:"",
  })
  const navigate = useNavigate()
  const checkUser=()=>{
    axios.post("http://localhost:5217/users/signin",user)
    .then((res)=>{
      const token = res.data.result;
      localStorage.setItem("authtoken",token);
      if(res.data.ok){
        navigate("/home")
      }
    }).catch((error)=>{
      console.log("Failed to get token")
    })
  } 
  return (
    <div className='UserSignin'>
        <div className='Signin-logo'>Welcome to QT Chat</div>
        <input className='Signin-input' type="text" onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} placeholder='Enter e-mail' />
        <input className='Signin-input'  type="password" onChange={(e)=>{setUser({...user,pass:e.target.value})}} value={user.pass} placeholder='PassWord' />
        <input className='btn' onClick={checkUser}  type="button" value="SignIn" />
    </div>
  )
}

export default UserSignin