import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {LOGO_URL} from '../utils/constant';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {


const [btnName, setBtnName] = useState("Login")


const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between bg-yellow-100  shadow-lg sm:bg-pink-100 ">
        <div className="logo-container">
          <img className="w-32"
            src={LOGO_URL}>
          </img>
        </div>
        <div className="flex items-center">
          <ul className='flex p-8 m-4 '>
            <li className='px-4'>Online status :  {onlineStatus ? "✅" : "🔴"}</li>
            <li className='px-4'><Link to = "/">Home</Link></li>
            <li className='px-4'><Link to = "/about" >About us</Link></li>
            <li className='px-4'><Link to = "/contact">Contact Us</Link></li>
            <li className='px-4'><Link to = "/grocery">Grocery</Link></li>
            <li className='px-4'>cart</li>
            <button className="login-btn" onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
           
            }}>{btnName}</button>
          </ul>

        </div>
  
      </div>
    )
  }


export default Header;