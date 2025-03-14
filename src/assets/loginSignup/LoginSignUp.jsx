import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from "../user_icon.png"
// import email_icon from "../email_icon.png"
// import password_icon from "../password_icon.png"
export default function LoginSignUp (){
    const [action,setAction] = useState("Sign Up");
    return (
        <div className='container'>
            <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            </div>
        
            <div className="inputs"> 
                {action=="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="text" placeholder='Name'/>
                </div>}
                <div className="input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="email_icon" />
                    <input type="email"placeholder='Email-Id'  />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
                {action=="Sign Up"?<div></div>: <div className="submit-Container">
                    <div className={action=="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign U[p")}}>Sign Up</div>
                    <div className={action=="Sign Up"?"submt gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                </div>}
                <div className="forget-password">Lost Password?<span>Click here</span></div>
                <div className="submit-Container">
                    <div className={action=="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign U[p")}}>Sign Up</div>
                    <div className={action=="Sign Up"?"submt gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
            </div>
      )

    
}
