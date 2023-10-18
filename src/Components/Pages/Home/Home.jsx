import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./Brands/BrandCard";

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto w-auto m-10 px-5">
                <h2 className="text-3xl font-jost text-center">Our Most Famous Brand</h2>
                <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  gap-3">
                    {
                        brands.map(item => <BrandCard key={item._id}
                            brand={item}
                        ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;