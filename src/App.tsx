import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import { Home } from "./pages/public/home";
// import { PublicLayout } from "./pages/layouts/publicLayout";
import { MasterLayout } from "./pages/layouts/masterLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App
