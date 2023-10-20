
const Testimonials = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-wrap md:mt-20">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                        <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                            What Our Customers Are Saying
                        </h2>
                        <p className="text-base px-3 text-body-color mb-5">
                            Our commitment to quality, style, and customer satisfaction is at the heart of everything we do.
                            But don't just take our word for it; hear what our amazing customers have to say about their experiences with us.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-5">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-60 h-60 mx-auto">
                        <img src="https://media.vanityfair.com/photos/57fe47016d65c9f44d47fdcb/master/w_2560%2Cc_limit/sarah-paulson-richard-lawson-interview.jpg" alt="Name1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-jost">Sarah R.</h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p className="mt-3">I'm a sneakerhead, and this store offers a fantastic selection of sneakers. I recently bought the Adidas Ultraboost All Terrain shoes,
                            and they've been a game-changer for my runs. The delivery was swift, and I couldn't be happier!</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-60 h-60 mx-auto">
                        <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_47/1637404/michael-b-jordan-sma-mc-square-201117-01.jpg" alt="Name1" className="rounded-xl" />
                    </figure>
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title font-jost">Michael T.</h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        </div>
                        <p className="mt-3">Affordable and stylish fashion is what I look for, and H&M has always been my go-to. The H&M Striped Sweater I ordered from this store is a wardrobe staple.
                            The website is easy to navigate, and I received my order in no time.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-60 h-60 mx-auto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0Iq6F6Wrs-zcpDTsJCEPqopYhWT6aRprME5-92n-8HzibTmDarm6p7xw-FZL2oh7XyI&usqp=CAU" alt="Name1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-jost">Emily L.</h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="mt-3">I'm a fitness coach, and my gear has to be top-notch. This store consistently delivers quality activewear like the Nike Pro Sports Bra. The prices are reasonable, and I love the convenience of online shopping.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-60 h-60 mx-auto">
                        <img src="https://usercontent.one/wp/manforhimself.com/wp-content/uploads/2022/03/john-david-washington-short-afro-hairstyle-mens-hairstyles-man-for-himself-1-600x600.jpg" alt="Name1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-jost">John S.</h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p className="mt-3">I'm a sports enthusiast, and I always want the best when it comes to my activewear. This store never disappoints. The quality, comfort, and style of their products are unmatched.
                            I'm a loyal customer, and I recommend them to all my friends!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;