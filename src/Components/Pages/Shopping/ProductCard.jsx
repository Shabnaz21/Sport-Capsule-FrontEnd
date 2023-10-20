const ProductCard = ({ product }) => {
    const { _id, name, brand, price, type, photo } = product;
    return (
        <div>
            <div className="container mx-auto">
                <div className="card md:card-side bg-base-100 shadow-xl">
                    <figure><img src={photo} alt={name} className="md:w-96 w-2/3 md:h-60 lg:h-[350px]"/></figure>
                    <div className="card-body">
                        <div>
                            <h2 className="text-xl"><span className="font-bold">Name:</span> {name}</h2>
                            <p><span className="text-lg font-bold">Band Name: </span>{brand}</p>
                            <p><span className="text-lg font-bold">Type: </span>{type}</p>
                            <p><span className="text-lg font-bold">Price: </span>$ {price}</p>
                            <p><span className="text-lg font-bold">Rating: </span>{'rating'}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#C1032F] text-white hover:bg-[#303030] hover:text-white normal-case">Delete
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default ProductCard;