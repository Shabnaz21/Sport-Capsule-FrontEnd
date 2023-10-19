import { Link, useLoaderData } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { _id, name, image } = brand;

    return (
        <div>
            <Link to={`/brands/${_id}`} >
                <div className="card">
                    <figure className="px-10 pt-10">
                        <img src={image} alt={name} className="rounded-xl md:h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;