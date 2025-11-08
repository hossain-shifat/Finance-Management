import { CircleDollarSign, CreditCard, Home, LayoutDashboard } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'

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
            <NavLink to='/Dashboard'><li className="flex items-center gap-2"><LayoutDashboard size={20} className="text-gray-700 dark:text-white" />Dashboard</li></NavLink>
            <NavLink to='/MyBankCards'><li className="flex items-center gap-2"><CreditCard size={20} className="text-gray-700 dark:text-white" />My Banks Cards</li></NavLink>
            <NavLink to='/Transaction'><li className="flex items-center gap-2"><CircleDollarSign size={20} className="text-gray-700 dark:text-white" />Transaction History</li></NavLink>
        </>
    return (
        <div ref={sideRef} className={`p-4 z-10 bg-white min-w-68 flex flex-col min-h-screen border border-gray-100 max-sm:absolute transition-all ${isSidebarOpen ? 'left-0' : '-left-full'} `}>
            <div>
                <h1 className="font-bold text-2xl">Fin<span className="text-accent">Ease</span></h1>
            </div>
            <div className="mt-4">
                <ul className="grid gap-2 w-55 max-w-full *:p-3 *:border *:border-gray-100 *:shadow-sm *:rounded-xl">
                    {links}
                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar
