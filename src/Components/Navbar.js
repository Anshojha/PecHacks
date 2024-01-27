import React from "react";
import logo from "../assets/newLogo.jpeg";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import  Connect from "./Connect.js";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">  <img className="logo" src={logo} alt="logo" />    </Link>

      < div className="left">
        <Link to="/" className="navLink">HOME</Link>
        <Link to="/tenant" className="navLink">RENT</Link>
        <ConnectButton/>
        </div>
        <div className="pop">
        
        </div>
    </nav>
  );
}

  