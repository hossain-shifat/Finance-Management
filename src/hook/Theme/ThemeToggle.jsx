import React, { useEffect, useState } from 'react'

export const useThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    )

    useEffect(() => {
        document.querySelector('html').setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return [theme, toggleTheme]
}
