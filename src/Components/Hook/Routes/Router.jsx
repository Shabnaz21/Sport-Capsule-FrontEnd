import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import AddProducts from "../../Pages/Products/AddProduct/AddProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/brands"),
            }, {
                path: '/add-products',
                element:<AddProducts></AddProducts>
            }
        ]
    },
]);


export default router;