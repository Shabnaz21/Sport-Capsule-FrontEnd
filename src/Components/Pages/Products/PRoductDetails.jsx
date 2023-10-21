import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { name, brand, price, rating, type, description, photo } = productData;
    const { user } = useContext(AuthContext);

    const handleCart = () => {
        const selectedProduct = {  name, brand, price, type, photo };
        const userMail = user?.email;
        const userName = user?.displayName;

        const userCart = { ...selectedProduct, email: userMail, userName }
        fetch('http://localhost:5001/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userCart)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Successfully Product Add to Cart!',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
    }
    return (
        <div className="container mx-auto">
            <div>
                {/* summary */}
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img className="lg:w-1/2 lg:h-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src={photo} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            <p className="leading-relaxed">{description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-between">
                                <p><span className="title-font font-medium text-lg text-gray-900">Types:</span> {type}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-xl font-bold">
                                        {rating}
                                    </p>
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span className="title-font font-medium text-2xl text-gray-900">$ {price}</span>
                                <button onClick={handleCart} className="flex ml-auto btn bg-[#C1032F] hover:bg-[#303030] hover:text-white text-white border-0">
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;