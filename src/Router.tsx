import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home/home.tsx";
import {CharactersLib}  from "./pages/characters/charactersLib.tsx";
import Layout from "./pages/layout/layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "characters",
                element: <CharactersLib />,
            },
        ],
    },
])

export default router