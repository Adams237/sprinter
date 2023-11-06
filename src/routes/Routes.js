import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


export const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/",
        element:<div>Home page</div>
    }
])