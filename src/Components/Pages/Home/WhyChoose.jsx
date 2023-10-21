import { MdBookmarks, MdOutlineSentimentSatisfiedAlt, MdWorkspacePremium } from "react-icons/md";
const WhyChoose = () => {
    return (
        <div className="bg-white">
            <div className="container ">
                <div className="overflow-hidden  py-8 sm:py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 
                    gap-x-8 gap-y-16 sm:gap-y-20
                    lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <h2 className="text-base font-semibold font-jost leading-7 text-[#C1032F]">Quality, Style, and Satisfaction</h2>
                                    <p className="mt-2 text-3xl font-bold  font-jost text-gray-900 sm:text-4xl">Why You Should Choose Us?</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">We take pride in being your ultimate destination for the latest in fashion and apparel. With a commitment to quality,
                                        style, and customer satisfaction, we stand out for several compelling reasons:
                                    </p>
                                    <div className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
                                        <div className="relative pl-9 ">
                                            <div className="flex gap-3 items-center">
                                                <MdWorkspacePremium className="text-2xl"></MdWorkspacePremium>
                                                <p className="inline font-semibold text-gray-900">
                                                    Premium Brands
                                                </p></div>
                                            <p className="inline">We offer an exclusive selection of top-notch brands, including Nike, Adidas, Gucci, Puma, H&M, and Reebok.
                                            </p>

                                        </div>
                                        <div className="relative pl-9">
                                            <div className="flex gap-3 items-center">
                                                <MdBookmarks className="text-2xl"></MdBookmarks>
                                                <p className="inline font-semibold text-gray-900">
                                                    Diverse Selection
                                                </p>
                                            </div>
                                            <p className="inline">Explore a wide range of product types, from sneakers and activewear to GYM bags.
                                                We cater to diverse fashion needs, ensuring there is something for everyone.
                                            </p>
                                        </div>
                                        <div className="relative pl-9">
                                            <div className="flex gap-3 items-center">
                                                <MdOutlineSentimentSatisfiedAlt className="text-2xl"></MdOutlineSentimentSatisfiedAlt>
                                                <p className="inline font-semibold text-gray-900">
                                                    Customer Satisfaction
                                                </p>
                                            </div>
                                            <p className="inline">We prioritize your satisfaction above all else. Our customer support team is
                                                readily available to address your queries and concerns, making your shopping experience stress-free.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 text-center gap-x-6">
                                    <a href="#"
                                        className="rounded-md bg-[#C1032F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C1032F] 
                                 ">Buy Now</a>
                                </div>
                            </div>
                            <img src="https://www.completechaintech.com/sites/default/files/2022-03/difference_between_websites_and_ecommerce.jpeg"
                                alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl  sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;