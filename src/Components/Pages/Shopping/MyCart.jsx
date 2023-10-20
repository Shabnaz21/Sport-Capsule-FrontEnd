import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const MyCart = () => {
    const productData = useLoaderData();

    return (
        <div className="container mx-auto mt-10 mb-20">
            <div className="grid md:grid-cols-2 gap-5 mx-5">
                {
                    productData.map(product => <ProductCard key={product._id} product={product}>
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;