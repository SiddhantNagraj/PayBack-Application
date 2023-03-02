// Sign Up Page
import React from 'react';
import '../styles/signup.scss';
import { withRouter } from "react-router-dom";

import {instance} from '../utils/AxiosConfig';
var obj = {};
 const SignUp = (props)=>{
   return(
   
      <div className = "container signup">
      
      <div className = "signup-logo">
    <img  src={require("../images/logo.png")} alt=""/>
    </div>


    <div className = "signup-form">
      <h2 className='title'>Create your Account</h2>
      <label htmlFor="" className='title'>Username</label>

      <input id = "username" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" placeholder='Enter Username' type="text" required/>

      <label htmlFor="" className='title'>Email Id</label>

      <input id = "email" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" placeholder='Enter Email Id' type="text" required/>

      <label htmlFor="" className='title'>Password</label>

      <input id = "password" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" placeholder='Enter Password' type="password" required/>

     <button onClick = {()=>{
       console.log(obj);
       if(obj.password == undefined || obj.email == undefined || obj.username == undefined){
          alert("form is Incomplete");
       }
   else{
       var pr = instance.post('/signup',obj);
       pr.then((response)=>{
          console.log(response.data.Status);
          if(response.data.Status == "S"){
             alert("successful Registerd");
             props.history.push("/Dashboard");
          }else if(response.data.Status == "F"){
             alert("username or Email Id Already exist");
          }
       })}
     }} className = "btn2">Sign me up!</button>
     
   </div>



   </div>

   
   )
} 

export default withRouter(SignUp);
