import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./Brands/BrandCard";
import FAQ from "./FAQ";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";



const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto w-auto m-10 mt-20 px-5">
                <div className=" flex flex-wrap">
                    <div className="lg:w-full px-4">
                        <div className="mx-auto mb-[60px] lg:max-w-[920px] text-center lg:mb-20">
                            <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                                Our Most Famous Brands
                            </h2>
                            <p className="text-base px-3 text-body-color">
                                At our online fashion boutique, we bring you a range of iconic brands that have left an indelible mark on the world of apparel and accessories. Each brand embodies a
                                unique spirit and caters to a diverse array of tastes and preferences. Explore the essence of fashion through these renowned names:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  gap-3">
                    {
                        brands.map(item => <BrandCard key={item._id}
                            brand={item}
                        ></BrandCard>)
                    }
                </div>
            </div>
            <WhyChoose></WhyChoose>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            
        </div>
    );
};

export default Home;