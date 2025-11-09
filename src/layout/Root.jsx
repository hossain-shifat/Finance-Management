import React, { useState } from 'react'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import LeftSideBar from '../components/LeftSidebar/LeftSideBar'

const Root = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <div className="flex bg-base-100">
            <LeftSideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className="flex-1 flex flex-col h-screen">
                <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div className="flex-1 h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Root
