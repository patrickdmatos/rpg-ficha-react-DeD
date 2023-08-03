import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Login, Cadastro } from "./pages/Login";
import { Ficha } from "./pages/Fichas";
import { Mesas } from "./pages/Mesas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fichas",
    element: <Ficha />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sessoes",
    element: <Mesas />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
