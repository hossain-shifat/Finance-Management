import React from 'react'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router'

const Root = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Root
