import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { HomeSheet, CharacterSheet } from "./pages/ficha";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sheet",
    element: <HomeSheet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sheet/NewCharacter-sheet",
    element: <CharacterSheet />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
