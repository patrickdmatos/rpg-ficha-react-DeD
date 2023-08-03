import { useEffect, useState } from 'react';
import {BiMoon, BiSun} from "react-icons/bi";

export function ThemeSwitcher() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (window.matchMedia('prefers-color-scheme: dark').matches){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
            <button onClick={handleThemeSwitch} className='text-slate-100 text-4xl hover:scale-110 hover:text-amber-600 dark:hover:text-slate-800'>
                {theme === 'dark' ? <BiMoon /> : <BiSun />}
            </button>
  )
}
