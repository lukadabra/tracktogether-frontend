import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../features/home/pages/Index";
import Login from "../features/auth/pages/Login";

export const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/login",
        element: <Login />
    }
]);