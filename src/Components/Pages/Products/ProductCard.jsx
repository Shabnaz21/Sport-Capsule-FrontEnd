import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, name, photo, brand, price, rating, type } = product;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <figure><img src={photo} alt={photo} className="lg:w-[300px] w-2/3 md:h-[250px] lg:h-[350px]" /></figure>
                </div>
                <div className="card-body">
                    <div className=" text-left flex  mt-10  mx-8">
                        <div>
                            <h2 className="text-xl"><span className="font-bold">Name:</span> {name}</h2>
                            <p><span className="text-lg font-bold">Band Name: </span>{brand}</p>
                            <p><span className="text-lg font-bold">Type: </span>{type}</p>
                            <p><span className="text-lg font-bold">Price: </span>$ {price}</p>
                            <p><span className="text-lg font-bold">Rating: </span>{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/product-details/${_id}`}>
                            <button className="btn bg-[#303030] hover:bg-[#C1032F] hover:text-white text-white border-0">Details</button>
                        </Link>
                        <Link to='/product-update' >
                            <button className="btn bg-[#C1032F] hover:bg-[#303030] hover:text-white text-white border-0">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;