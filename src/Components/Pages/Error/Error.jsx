import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Link to='/' >
                <div className="flex items-center gap-3 mx-48 mt-10">
                    <p><BsArrowLeft></BsArrowLeft></p>
                    <h2 className="text-2xl font-Rancho">Back to home </h2>
                </div>
            </Link>
            <div className="flex place-content-center">
                <img src="https://i.ibb.co/PYtJkQN/404.gif" alt="" />
            </div>
        </div>
    );
};

export default Error;