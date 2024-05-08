import Home from "./pages/layouts/basic/home";
import { createBrowserRouter } from "react-router-dom";
import NaoLocalizado404 from "./pages/errorsPages/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NaoLocalizado404 />
    },
])

export default router