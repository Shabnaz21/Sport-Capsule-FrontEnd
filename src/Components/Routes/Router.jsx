import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/brands"),
            }
        ]
    },
]);


export default router;