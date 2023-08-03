import { useState } from "react";
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'
import { FaDice, FaWpforms } from "react-icons/fa";
import { GiElfHelmet } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

export default function SideBar() {
    const [ sideOpen, setIsSideBarOpen] = useState(false)

    const handleOpenSideBar = () => {if (sideOpen === false) {setIsSideBarOpen(true)} else { setIsSideBarOpen(false)} }

    return (
        <div>
            {/* Sidebar */}
            <aside className={`w-10/12 flex flex-col justify-end h-screen bg-slate-800 dark:bg-amber-600 text-slate-100 p-8`}>
                <div className="flex relative bottom-[52%] left-[85%] text-3xl" onClick={handleOpenSideBar}>
                    <AiOutlineMenu />
                </div>
                <div className="flex flex-col text-lg mb-8">
                    <Link to={"/sessoes"} className='dark:bg-slate-800 bg-slate-100 text-slate-800 dark:text-slate-100 flex gap-10 items-center w-full mb-2 rounded-lg p-2 text-center outline-none'><FaDice />Fichas</Link>
                    <Link to={"/fichas"} className='dark:bg-slate-800 bg-slate-100 text-slate-800 dark:text-slate-100 flex gap-10 items-center w-full mb-2 rounded-lg p-2 text-center outline-none'><FaWpforms />Sessão</Link>
                </div>
                <div className="flex text-7xl items-center mb-8">
                    <GiElfHelmet />
                    <span className="ml-4 text-xl font-semibold">Nome do Usuário</span>
                </div>
                <div className="flex justify-between items-center">
                    <Link to="/Login" className="hover:text-amber-600 dark:hover:text-slate-800 hover:font-bold hover:scale-110">Login</Link>
                    <ThemeSwitcher />
                </div>
            </aside>
        </div>
    )
}
