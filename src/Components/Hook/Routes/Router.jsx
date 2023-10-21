import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import AddProducts from "../../Pages/Products/AddProducts";
import UpdateProduct from "../../Pages/Products/UpdateProduct";
import Brands from "../../Pages/Home/Brands/BrandDetails";
import ProductDetails from "../../Pages/Products/PRoductDetails";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../../Pages/auth/Login";
import Register from "../../Pages/auth/Register";
import MyCart from "../../Pages/Shopping/MyCart";
import Contact from "../../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5001/brands"), 
            },
            {
                path: '/add-products',
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: "/:id",
                element: <Brands></Brands>,
                loader: ({ params }) => fetch(`http://localhost:5001/brands/${params.id}`),
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path: '/product-update/:id',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path: '/sign-up',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/shopping/:id',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5001/carts/${params.id}`)

            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);


export default router;