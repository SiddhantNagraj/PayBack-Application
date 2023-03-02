// Login Page
import React from 'react';
import '../styles/signup.scss';
import  Header  from './Header';
export const Login = (props)=>{
    return(
        <div>
            <Header/>
        <div className = "container signup">
      
        <div className = "signup-logo">
      <img  src={require("../images/logo.png")} alt="" />
      </div>


      <div className = "signup-form">
        <h2 className='title'>WELCOME TO PAYBACK</h2>
        <div>
        <label className='title'>Email</label>
        <div className='inpute'>
          <input id = "email" onChange = {props.input} className = "form-control" type="text" placeholder='Email'/>
        </div>     
        </div>
        
        <div>
        <label className='title'>Password</label>
        <div className='inpute'>
          <input id = "password" onChange = {props.input} className = "form-control" type="password" placeholder='Password'/>
        </div>
        
        </div>
        

      {props.sts && <p style = {{color: "red"}}><i class="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
       <button onClick = {props.login} className = "btn1">Log In</button>
     </div>
     </div>
     </div>
    )
} 