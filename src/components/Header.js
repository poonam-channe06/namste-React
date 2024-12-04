import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import cartImage from "../images/shopping-cart.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(userContext);
  console.log("data---->", data);

  // subscribing to the strore using the selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-yellow-100  shadow-lg sm:bg-pink-100 ">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4 ">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="flex items-center px-4 font-bold">
            <Link to="/cart">
              <img
                src={cartImage}
                alt="Cart Icon"
                className="w-6 h-6 mr-2 flex"
              />
            </Link>{" "}
            <span className="bg-green-500 m-0.5 px-1 rounded-md ">
              {cartItems.length}
            </span>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{data.loggednUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
