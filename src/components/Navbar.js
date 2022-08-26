import React from 'react'
import { NavLink } from "react-router-dom"

import "./Navbar.css"



function Navbar() {
    return <>
        <nav >
            <div className="logo">
                <h1>ved prakash jangid</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">about me</NavLink></li>
                    <li><NavLink to="/team">team</NavLink></li>
                    <li><NavLink to="/project">project</NavLink></li>
                    <li><NavLink to="/service">service</NavLink></li>
                </ul>
            </div>
          <div className="menubar">
            <img src="img/menubar.png" alt="" />
          </div>
          
        </nav>
    </>


}

export default Navbar