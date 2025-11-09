import { CircleDollarSign, CreditCard, Home, LayoutDashboard, MoonIcon, PanelLeft, Search, SearchIcon, SunIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { useThemeToggle } from '../../hook/Theme/ThemeToggle'


const Navbar = ({ setIsSidebarOpen }) => {
    const [theme, toggleTheme] = useThemeToggle()
    return (
        <div className="bg-white border-b border-base-200 px-6 xl:px-16 py-3 shrink-0 dark:bg-base-100">
            <div className="flex items-center justify-between max-w-6xl mx-auto">

                <div className="flex items-center gap-4 min-w-0 flex-1">
                    <button onClick={() => setIsSidebarOpen((prev) => !prev)} className="sm:hidden p-2 rounded-lg transition-colors text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800" >
                        <PanelLeft size={25} className={`${theme === 'light' ? 'text-black' : 'text-white'}`} />
                    </button>
                    <div className="sm:hidden">
                        <h1 className="font-bold text-2xl">Fin<span className="text-accent">Ease</span></h1>
                    </div>
                    <div className="hidden md:block relative flex-1 max-w-sm">
                        <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 size-3.5" />
                        <input
                            type="text"
                            placeholder="Search Transition"
                            className="pl-8 pr-4 py-2 w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-md text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <button onClick={toggleTheme} className="size-9 flex items-center justify-center bg-base-100 shadow rounded-lg transition hover:scale-105 active:scale-95">
                        {
                            theme === "light"
                                ? (<MoonIcon className=" text-black dark:text-gray-200" size={23} stroke='black' />)
                                : (<SunIcon className="size-5 text-yellow-400" size={23} />)
                        }
                    </button>

                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
