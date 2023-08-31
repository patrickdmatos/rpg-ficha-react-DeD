import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="flex w-screen h-12 border-b-2 border-indigo-950 bg-indigo-950 mb-4">
        <Link to="/home" className="w-16 h-full flex items-center justify-center ml-4 mr-4 text-gray-300 hover:text-amber-500 hover:scale-105 duration-200">Home</Link>
        <Link to="/sheet" className="w-16 h-full flex items-center justify-center ml-4 mr-4 text-gray-300 hover:text-amber-500 hover:scale-105 duration-200">Fichas</Link>
        <Link to="/home" className="w-16 h-full flex items-center justify-center ml-4 mr-4 text-gray-300 hover:text-amber-500 hover:scale-105 duration-200">Bestiario</Link>
        <Link to="/home" className="w-16 h-full flex items-center justify-center ml-4 mr-4 text-gray-300 hover:text-amber-500 hover:scale-105 duration-200">Blibioteca</Link>
    </div>
  )
}
