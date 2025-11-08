import { CircleDollarSign, CreditCard, Home, LayoutDashboard, MoonIcon, PanelLeft, Search, SunIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { useThemeToggle } from '../Theme/ThemeToggle'


const Navbar = ({ setIsSidebarOpen }) => {
    const [theme, toggleTheme] = useThemeToggle()
    return (
        <div className="bg-white border-b border-gray-200 px-6 xl:px-16 py-3 shrink-0">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    <button onClick={() => setIsSidebarOpen((prev) => !prev)} className="sm:hidden p-2 rounded-lg transition-colors text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800" >
                        <PanelLeft size={25} className="text-black" />
                    </button>
                    {/* <div className="sm:hidden">
                        <h1 className="font-bold text-2xl">Fin<span className="text-accent">Ease</span></h1>
                    </div> */}
                </div>

                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} className="size-8 flex items-center justify-center bg-white shadow rounded-lg transition hover:scale-105 active:scale-95">
                    {
                        theme === "light"
                            ? (<MoonIcon className=" text-black dark:text-gray-200" size={20} stroke='black'/>)
                                : (<SunIcon className="size-5 text-yellow-400" size={20} stroke='yellow' />)
                    }
                </button>
                    {/* User Button */}
                    {/* <img src={assets.profile_img_a} alt="User Avatar" className="size-7 rounded-full" /> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
