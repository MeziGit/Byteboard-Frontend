import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import NavButton from "./NavButton";
import { NameForm } from "./NameForm";
import  {LoggedInContext}  from "./App";

import { useContext } from 'react';
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import LogoutButton from "./LogoutButton";



/**
 * navigation bar with logo, links directs to pages
 * @returns navigation bar
 */
function Header() {


    
    return (

     
        <div>
            

          <br/>
            <Navbar id="header">
                <img id="byteboard-title-image" src={process.env.PUBLIC_URL + "/images/title.png"} alt="title" />
                <NavButton to="/" label="Login/Register" />
                <NavButton to="/home" Visit="Home" label="Home" />

                <NavButton to="/about" label="About Us" />

                <NavButton to="/contact" label="Contact Us" />
                
                <NavButton to="/jobs" label="Jobs" />
                <NavButton to="/profile" label="Profile" />
                <NavButton to="/settings" label="Settings" />

            
               
               <LogoutButton/>
            </Navbar>
        </div>
    )
}

export default Header;