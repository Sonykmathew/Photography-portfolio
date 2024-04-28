import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import ham from '../assets/landing/hammenu.svg'
import logo from '../assets/landing/logo1.png'
function Nav() {
    return (
        <nav>
            <div className="menu"><img src={ham} alt="ham-menu" /></div>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>

            </ul>
        </nav>

    )
}

export default Nav