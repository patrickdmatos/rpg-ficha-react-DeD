import Home from "./pages/layouts/basic/home";
import { createBrowserRouter } from "react-router-dom";
import NaoLocalizado404 from "./pages/errorsPages/error";
import { BibliotecaPersonagens } from "./pages/playerPages/mangerCaracters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NaoLocalizado404 />
    },
    {
        path: "/biblioteca-personagem",
        element: <BibliotecaPersonagens />,
        errorElement: <NaoLocalizado404 />
    },
])

export default router