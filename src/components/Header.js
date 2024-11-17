import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {LOGO_URL} from '../utils/constant';
import { Link } from "react-router-dom";

const Header = () => {


const [btnName, setBtnName] = useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo"
            src={LOGO_URL}>
          </img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about" >About us</Link></li>
            <li><Link to = "/contact">Contact Us</Link></li>
            <li>cart</li>
            <button className="login-btn" onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
           
            }}>{btnName}</button>
          </ul>

        </div>
  
      </div>
    )
  }


export default Header;