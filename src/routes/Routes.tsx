import { RouteObject, createBrowserRouter } from "react-router-dom";

// pages
import Home from "../app/home/pages/Index";
import Login from "../app/auth/pages/Login";

// Layouts
import AppLayout from '../app/common/layouts/AppLayout';
import SignedOutLayout from '../app/common/layouts/SignedOutLayout'

export const Routes = [
    {
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    },
    {
        element: <SignedOutLayout />,
        children:[
            {
                path:"/login",
                element: <Login />
            }
        ]
    }
]


export const Router = createBrowserRouter(Routes);