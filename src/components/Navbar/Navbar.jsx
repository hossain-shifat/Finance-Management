import { Menu, MoonIcon, SunIcon, X } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useThemeToggle } from '../../hook/Theme/ThemeToggle'
import { AuthContext } from '../../context/AuthContext'


const Navbar = () => {
    const [theme, toggleTheme] = useThemeToggle()
    const { user } = useContext(AuthContext)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const profileRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const links =
        <>
            <NavLink to='/'><li className="flex items-center gap-2">Home</li></NavLink>
            <NavLink to='/add-transaction'><li className="flex items-center gap-2">Add Transaction</li></NavLink>
            <NavLink to='/my-transaction'><li className="flex items-center gap-2">My Transaction</li></NavLink>
            <NavLink to='/reports'><li className="flex items-center gap-2">Reports</li></NavLink>
            <NavLink to='/my-profile'><li className="flex items-center gap-2">My Profile</li></NavLink>
        </>

    return (
        <div className="bg-white border-b md:px-4 border-base-200 shrink-0 dark:bg-base-100">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Menu />
                        </div>
                        {/* mobile device */}
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <Link to='/' className="font-bold text-2xl">Fin<span className="text-primary">Ease</span></Link>
                    </div>
                </div>

                {/* large Screen view */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-2">
                    <button onClick={toggleTheme} className="size-9 p-2 flex items-center justify-center bg-base-100 shadow rounded-lg transition hover:scale-105 active:scale-95 cursor-pointer">
                        {
                            theme === "light"
                                ? (<MoonIcon className=" text-black dark:text-gray-200" size={23} stroke='black' />)
                                : (<SunIcon className="size-5 text-yellow-400" size={23} />)
                        }
                    </button>

                    <div ref={profileRef}>
                        {
                            user ?
                                <div>
                                    <img onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-10 h-10 rounded-full cursor-pointer" src={user.photoURL} alt="" />
                                    {
                                        isProfileOpen && (
                                            <div className="absolute right-2 mt-3 w-75 bg-base-100 shadow-xl rounded-lg p-4 z-10 border border-gray-100 dark:border-gray-100">
                                                <div>
                                                    <div className="flex justify-end">
                                                        <X size={18} className="cursor-pointer" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <p>Name: {user.displayName}</p>
                                                            <p>Email: {user.email}</p>
                                                        </div>
                                                        <div className="flex justify-end">
                                                            <button className="btn btn-outline btn-error">Logout</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                :
                                <div className="flex gap-2">
                                    <Link to='/login' className="btn btn-primary">Login</Link>
                                    <Link to='/resister' className="btn btn-primary">Register</Link>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
