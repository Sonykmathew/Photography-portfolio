import React from 'react'
import me from '../assets/landing/me.jpg'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function About() {
    return (
        <>
            <Nav></Nav>
            <div>
                <div className="about" id="about">
                    <div className="container">
                        <img src={me} alt="intro" className="intro" />
                        <div className="content">
                            <h1>Hi! I am Sony K Mathew</h1>
                            <p className="lower">Welcome to the captivating world through my lens. I am Sony K Mathew, an aspiring photographer with an unyielding passion for capturing moments that transcend time. My portfolio is a visual journey, where each image tells a story, evoking emotions and sparking curiosity. With an eye for detail and a commitment to authenticity, I strive to freeze fleeting moments into everlasting memories. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About