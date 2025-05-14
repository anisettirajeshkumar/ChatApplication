import React, { useState } from 'react';
import axios from "axios"
import "./UserSignup.css";
import { useNavigate } from 'react-router-dom';
function UserSignup() {
  const navigate = useNavigate();
  const[error,setError]=useState(false)
  const[user,setUser]=useState({
    fname:"",
    lname:"",
    email:"",
    gender:"",
    pno:"",
    pass:""
  });
const getNewUser=()=>{
  axios.post("http://localhost:5217/users/signup",user).then(
    (res)=>{
      if(res.data.ok){
        navigate("/signin")
         
      }
      console.log(res)
      setUser({
        fname:"",
          lname:"",
          email:"",
          gender:"",
          pno:"",
          pass:""
      });
    }
  ).catch(
    (error)=>{
      console.log(error);
      setError(true)
    }
  )  
}
  return (
    <div className='main-cont'>
      <h2 id='signuplogo'>Signup</h2>
      <div>
        <input className='input' onChange={(event)=>{
          setUser({...user,fname:event.target.value})
        }} type="text" placeholder='First Name'value={user.fname} />
      </div>
      <div>
        <input className='input' onChange={(event)=>{setUser({...user,lname:event.target.value})}} type="text" placeholder='Last Name' value={user.lname} />
      </div>
      <div>
        <input className='input' onChange={(event)=>{setUser({...user,email:event.target.value})}} type="text " placeholder='e-mail' value={user.email}/>
      </div>
      <div className='radio'>
       <div>
       <input type="radio" onChange={(event)=>{setUser({...user,gender:event.target.value})}}  name='gender' value={"male"}/>
       <label >Male</label>
       </div>
       <div>
       <input type="radio" name='gender'value={"female"}/>
       <label >Female</label>
       </div>
       <div>
       <input type="radio" name='gender' value={"other"}/>
       <label >Other</label>
       </div>
      </div>
      <div><input className='input' onChange={(event)=>{setUser({...user,pno:event.target.value})}} type="text" placeholder='Phone No' value={user.pno}/></div>
      <div><input className='input' onChange={(event)=>{setUser({...user,pass:event.target.value})}} type="password" placeholder='PassWord' value={user.pass}/></div>
      <div> 
        <input id='signup-btn' type="button" value="SignUp" onClick={getNewUser} />
      </div>
      {error ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "red", fontSize: "28px" }}>
            Failed to Create Account
          </h2>
        </div>
      ) : null
      }
    </div>
    
  );
}

export default UserSignup