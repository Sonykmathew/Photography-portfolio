import React from 'react'
import './home.css'
import Nav from '../Nav/Nav'
import l4 from '../assets/landing/l4.jpg'
import me from '../assets/landing/me.jpg'
import portrait from '../assets/landing/portrait.jpg'
import arc from '../assets/landing/arc.jpg'
import insta from '../assets/landing/insta.svg'
import logo from '../assets/landing/logo1.png'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Nav />
            <div className="wide-wrapper" id="home">
                <div className="wrapper">
                    <div className="heading">
                        <h1 className="main-heading">A creative photographer and blogger</h1>
                    </div>
                    <div> <img src={l4} alt="intro" /> </div>
                </div>
            </div>
            <div className="about" id="about">
                <div className="container">
                    <img src={me} alt="intro" className="intro" />
                    <div className="content">
                        <h1>Hi! I am Sony K Mathew</h1>
                        <p className="lower">Welcome to the captivating world through my lens. I am Sony K Mathew, an aspiring photographer with an unyielding passion for capturing moments that transcend time. My portfolio is a visual journey, where each image tells a story, evoking emotions and sparking curiosity. With an eye for detail and a commitment to authenticity, I strive to freeze fleeting moments into everlasting memories. </p>
                    </div>
                </div>
            </div>

            <div className="services" id="services">
                <h1>My Works</h1>
                <p>What I do</p>

                <div className="container">
                    <div className="content">
                        <h1 className="dash">Portraits and People</h1>
                        <p className="lower">Portrait photography is about capturing the essence, personality, identity and attitude
                            of a person utilizing backgrounds, lighting and posing.</p>
                        <Link to='/portfolio'>
                            <button>View Album</button>
                        </Link>
                    </div>
                    <img src={portrait} alt="a woman posing for a portrait" />
                </div>
                <div className="container">
                    <img src={arc} alt="aeroplane in a forest" />
                    <div className="content">
                        <h1 className="dash">Outdoors and Architectures</h1>
                        <p className="lower">To walk in streets is to witness a thousand miracles in itself, while capturing the
                            perfect moment in lens is unexplainable.</p>
                        <Link to='/portfolio'>
                            <button>View Album</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home