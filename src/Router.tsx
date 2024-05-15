import { createBrowserRouter } from "react-router-dom";
import NaoLocalizado404 from "./pages/errorsPages/error";
import Layout from "./pages/Layout/baseLayout";
import Home from "./pages/Home/home";
import Bestiario from "./pages/Bestiario/bestiario";

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
                path: "/bestiary",
                element: <Bestiario />,
            },
        ],
        errorElement: <NaoLocalizado404 />
    },
])

export default router