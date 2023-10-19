import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const productData = useLoaderData();
    console.log(productData);
    return (
        <div>
            <h2>Hey! I'm product</h2>
        </div>
    );
};

export default ProductDetails;