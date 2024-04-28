import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar({ sidebarclass, SidebarCLick }) {


    return (
        <div>
            <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
            />
            <nav className={sidebarclass ? 'sidebar close' : 'sidebar'}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="https://t4.ftcdn.net/jpg/04/06/91/91/240_F_406919147_D3WsGjwXj1qmFNrei2ZFvBWwiueRcFmg.jpg" alt="logo" />
                        </span>
                        <div className="text header-text">
                            <span className="main">My Gallery</span>
                            {/* <span className="sub">Component</span> */}
                        </div>
                    </div>
                    <i className="bx bx-chevron-right toggle close" onClick={SidebarCLick}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">

                            <li className="nav-link">
                                <Link to='/'>
                                    <i className="bx bx-bar-chart-alt-2 icons"></i>
                                    <span className="text nav-text">Profile</span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to='/gallery'>
                                    <i className="bx bx-home-alt icons"></i>
                                    <span className="text nav-text">Galleries</span>
                                </Link>
                            </li>
                            {/* <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-bell icons"></i>
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-pie-chart-alt icons"></i>
                                    <span className="text nav-text">Analytics</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-heart icons"></i>
                                    <span className="text nav-text">Likes</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className="bx bx-wallet-alt icons"></i>
                                    <span className="text nav-text">Wallets</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    {/* <div className="bottom-content">
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-log-out icons"></i>
                                <span className="text nav-text">Log Out</span>
                            </a>
                        </li>
                        <li className="mode">
                            <div className="moon-sun">
                                <i className="bx bx-moon icons moon"></i>
                                <i className="bx bx-sun icons sun"></i>
                            </div>
                            <span className="mode-text text">Dark Mode</span>
                            <div className="toggle-switch">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Sidebar