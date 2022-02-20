import { useEffect, useState } from "react"
import {
    SunIcon,
    MoonIcon
} from '@heroicons/react/outline'
export const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)
    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains("dark"))
    }, [])
    useEffect(() => {
        if (darkMode) {
            window.document.documentElement.classList.add('dark')
            localStorage.setItem("adaoDarkMode", "true")
        } else {
            window.document.documentElement.classList.remove('dark')
            localStorage.setItem("adaoDarkMode", "false")
        }
    }, [darkMode])
    const onClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={onClick}>
            {darkMode ? 
                <SunIcon className="h-8 w-auto sm:h-6" /> 
                :
                <MoonIcon className="h-8 w-auto sm:h-6" />
            }
        </button>
    )
}