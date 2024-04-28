import React, { useState } from 'react'
import './profile.css'
import Sidebar from '../Sidebar'
import ProfileDetail from './ProfileDetail'
import Nav from '../Nav/Nav'

function Profile() {
    const [sidebarclass, setsidebarclass] = useState(false)
    function SidebarCLick() {
        setsidebarclass(!sidebarclass)
    }
    return (
        <div>
            {/* <Sidebar sidebarclass={sidebarclass} SidebarCLick={SidebarCLick}></Sidebar> */}
            <Nav></Nav>
            <div className='profile-main'>
                <ProfileDetail />
            </div>
        </div>

    )
}

export default Profile