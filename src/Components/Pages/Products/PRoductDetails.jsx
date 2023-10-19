import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { name, brand, price, rating, type, description, photo } = productData;
    return (
        <div className="container mx-auto">
            <div>
                {/* summary */}
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
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

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">$ {price}</span>
                                <button
                                    className="flex ml-auto btn bg-[#C1032F] hover:bg-[#303030] hover:text-white text-white border-0">Add Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                {/* details */}
            </div>
        </div>
    );
};

export default ProductDetails;