import { CircleDollarSign, CreditCard, Home, LayoutDashboard, LogOut } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { useThemeToggle } from '../../hook/Theme/ThemeToggle'

const LeftSideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const sideRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (sideRef.current && !sideRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsSidebarOpen]);


    const links =
        <>
            <NavLink to='/'><li className="flex items-center gap-2"><Home size={20} className="text-gray-700 dark:text-white" />Home</li></NavLink>
            <NavLink to='/Dashboard'><li className="flex items-center gap-2"><LayoutDashboard size={20} className="text-gray-700 dark:text-white " />Dashboard</li></NavLink>
            <NavLink to='/MyBankCards'><li className="flex items-center gap-2"><CreditCard size={20} className="text-gray-700 dark:text-white" />My Banks Cards</li></NavLink>
            <NavLink to='/Transaction'><li className="flex items-center gap-2"><CircleDollarSign size={20} className="text-gray-700 dark:text-white" />Transaction History</li></NavLink>
        </>
    return (
        <div ref={sideRef} className={`p-4 z-10 bg-white min-w-68 dark:bg-base-200 dark:border-base-100 flex flex-col justify-between h-screen border border-gray-100 max-sm:absolute transition-all ${isSidebarOpen ? 'left-0' : '-left-full'} `}>
            <div className="flex-1 overflow-y-auto">
                <div>
                    <h1 className="font-bold text-2xl">Fin<span className="text-accent">Ease</span></h1>
                </div>
                <div className="mt-4">
                    <ul className={`grid gap-2 w-65 max-w-full *:p-3 *:border *:bg-white *:border-gray-100 *:shadow-sm *:rounded-xl dark:*:border-base-200 dark:*:bg-base-100`}>
                        {links}
                    </ul>
                </div>
            </div>
            <footer className="flex gap-2 justify-center items-center">
                <div>
                    <img className="w-10 h-10 rounded-full" src="https://i.ibb.co.com/v4QcM2YL/jhunker-mahabub.jpg" alt="" />
                </div>
                <div>
                    <h1 className="font-semibold">Jhunkar Mahabub</h1>
                    <p>jankermahabub@gmail.com</p>
                </div>
                <div className="cursor-pointer">
                    <LogOut/>
                </div>
            </footer>
        </div>
    )
}

export default LeftSideBar
