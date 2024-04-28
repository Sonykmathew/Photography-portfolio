import React, { useState } from 'react'
import Sidebar from './Sidebar'

function Setting() {
    const [sidebarclass, setsidebarclass] = useState(false)
    function SidebarCLick() {
        setsidebarclass(!sidebarclass)
    }
    return (
        <div>
            <Sidebar sidebarclass={sidebarclass} SidebarCLick={SidebarCLick}></Sidebar>
            <div className={sidebarclass ? 'sidebar-close' : 'sidebar-open'}>
                setting
            </div>
        </div>
    )
}

export default Setting