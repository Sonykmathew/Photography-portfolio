import React from 'react'
import './resume.css'
import me from '../assets/landing/meresume.jpg'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


function Resume() {
    return (
        <>
            <Nav></Nav>
            <h1 style={{ textAlign: "center" }}>RESUME</h1>
            <div class="resume">
                <div class="resume_left">
                    <div class="resume_profile">
                        <img src={me} alt="profile_pic" />
                    </div>
                    <div class="resume_content">
                        <div class="resume_item resume_info">
                            <div class="title">
                                <p class="bold">Sony Kochukunju Mathew</p>
                                <p class="regular">Student</p>
                            </div>
                            <ul>
                                <li>

                                    <div class="data">
                                        9WHITEFACE STREET MANGOHILL,4509, Brisbane, Australia
                                    </div>
                                </li>
                                <li>

                                    <div class="data">
                                        0434688687
                                    </div>
                                </li>
                                <li>

                                    <div class="data">
                                        sonykmathew1@gmail.com
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div class="resume_item resume_skills">
                            <div class="title">
                                <p class="bold">skill's</p>
                            </div>
                            <ul>
                                <li>
                                    <div class="skill_name">
                                        HTML
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '70%' }}></span>
                                    </div>
                                    <div class="skill_per">80%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        CSS
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '70%' }}></span>
                                    </div>
                                    <div class="skill_per">70%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        SASS
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '70%' }}></span>
                                    </div>
                                    <div class="skill_per">90%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        JS
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '70%' }}></span>
                                    </div>
                                    <div class="skill_per">60%</div>
                                </li>
                                <li>
                                    <div class="skill_name">
                                        JQUERY
                                    </div>
                                    <div class="skill_progress">
                                        <span style={{ width: '70%' }}></span>
                                    </div>
                                    <div class="skill_per">88%</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="resume_right">
                    <div class="resume_item resume_about">
                        <div class="title">
                            <p class="bold">About Me</p>
                        </div>
                        <p>To pursue a challenging career in a dynamic organisation that provides constant
                            opportunities for career advancement.
                        </p>
                    </div>
                    <div class="resume_item resume_work">
                        <div class="title">
                            <p class="bold">Work Experience</p>
                        </div>
                        <ul>
                            <li>
                                <div class="date">JAVA Internship Program
                                    Keltron Knowledge Center, Kollam</div>
                                <div class="info">
                                    {/* <p class="semi-bold"></p> */}
                                    <p>KELTRON provides affordable job-oriented training programs and skill
                                        enhancement programs through KeLearn. KeLearn training programs are offered
                                        through E-learning, Center-based, and Instructor-led mode</p>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <div class="resume_item resume_education">
                        <div class="title">
                            <p class="bold">Education</p>
                        </div>
                        <ul>
                            <li>
                                <div class="date">2023 - Present</div>
                                <div class="info">
                                    <p class="semi-bold">Masters in information technology</p>
                                    <p>Queensland university of technology</p>
                                </div>
                            </li>
                            <li>
                                <div class="date">2017 - 2021</div>
                                <div class="info">
                                    <p class="semi-bold">Electronics and communication engineering</p>
                                    <p>PRIST University in Thanjavur, Tamil Nadu</p>                           </div>
                            </li>
                            <li>
                                <div class="date">2015 - 2017</div>
                                <div class="info">
                                    <p class="semi-bold">Higher Secondary Education</p>
                                    <p>St. Gregorios Higher Secondary School, Kottarakkara
                                        Kerala</p>                           </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Resume