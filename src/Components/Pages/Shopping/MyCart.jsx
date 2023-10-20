import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const MyCart = () => {
    const productData = useLoaderData();
    const [products, setProducts] = useState(productData);
    console.log(productData);

    return (
        <div className="container mx-auto mt-10 mb-20">
            <div className="grid md:grid-cols-2 gap-5 mx-5">
                {
                    products.map(product => <ProductCard key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    >
                        
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;