import React, { useState } from 'react'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen max-w-[1200px] mx-auto bg-base-100">
                <Outlet />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Root
