import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
const MyCart = () => {
    const productData = useLoaderData();
    console.log(productData);
    const [products, setProducts] = useState(productData);
    return (
        <div className="container mx-auto mt-10 mb-20">
            {
                products.length === 0 ? (<div className="alert-error text-3xl gap-x-5 items-center flex place-content-center">
                    <BiErrorAlt></BiErrorAlt>
                    <h3 className="font-bold text-center">No Product Add</h3>
                </div>) : (<div className="grid md:grid-cols-2 gap-5 mx-5">
                    {
                        products.map(product => <ProductCard key={product._id}
                            product={product}
                            products={products}
                            setProducts={setProducts}
                        >

                        </ProductCard>)
                    }
                </div>)
            }
            
        </div>
    );
};

export default MyCart;