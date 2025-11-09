import React, { useState } from 'react'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen max-w-[1200px] mx-auto bg-base-100">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
