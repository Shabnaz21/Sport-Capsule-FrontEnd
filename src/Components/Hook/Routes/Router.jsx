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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        loader: () => fetch("http://localhost:5000/brands"),
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }, {
                path: '/add-products',
                element:<AddProducts></AddProducts>
            }, {
                path: "/brands/:id",
                element: <Brands></Brands>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`),
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/product-update',
                element:<UpdateProduct></UpdateProduct>
            }
        ]
    },
]);


export default router;