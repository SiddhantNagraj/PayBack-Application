import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import '../styles/landing.scss'
 const Header = (props)=>{
    {console.log(props.user)}
    return (
        <nav className = "landingNav fixed-top">
        <NavLink to = "/">
            <div className="landing-name-position">
                <img src="logo.png" className="logo"/>
                <h3 className="landing-name">P A Y B A C K</h3>
            </div>
        </NavLink> 
     
     <div className = "float">
     <NavLink to = "/login"><button className = "loginBtn">Log In</button></NavLink>
        <label htmlFor="">or</label>
        <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
     </div>
        

    </nav>
    )
}

const mapStateToProps = (state)=>{
    console.log("state is  ",state);
    return{
        user: state.user
    }
}

const fn = connect(mapStateToProps);
export default fn(Header);