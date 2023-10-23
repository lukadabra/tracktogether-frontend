import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "../app/home/pages/Index";
import Login from "../app/auth/pages/Login";

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