// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './styles.css';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{
                backgroundImage:
                    'url(https://i.ibb.co/pnrP2j1/attractive-asian-woman-showing-smartphone-app-shopping-bags-buying-online-via-application-standi-125.jpg)'
            }}>
                <div className="hero-overlay bg-[#F2F2F2] bg-opacity-95"></div>
                <div className="text-center">
                    <div className="-mx-4 flex flex-wrap md:mt-20">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                                <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                                    Your Gateway to Sporty Fashion
                                </h2>
                                <p className="text-base px-3 text-body-color mb-5">
                                    Explore a universe of fashion, where every piece tells a unique story. Step into a world of high-quality,
                                    style, and self-expression. Start your fashion journey with us today.
                                </p>
                                <Link to='/register'><button className="btn 
                                bg-[#C1032F] hover:bg-[#303030] hover:text-white
                                 text-white border-0">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto w-auto container hidden md:block'>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper mb-5"
                        >
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i0.wp.com/thecdsvr.com/wp-content/uploads/2022/12/https___hypebeast.com_image_2019_01_kith-nike-air-jordan-vi-infrared-collection-apparel-global-exclusive-release-001.webp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://www.net-a-porter.com/variants/images/42247633207942037/fr/w1000.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://sneakerfits.com/wp-content/uploads/2023/04/Jordan-Flight-MVP-Graphic-T-Shirt-Magic-Ember-Outfit.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://media.endclothing.com/end-features/prodfeatures/4bdac34d-b94f-475d-aa69-d9060d2c074b_24-08-21_NikeAirJordanShimmer_AW21_EB10.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i0.wp.com/sneakerhack.com/wp-content/uploads/2020/02/off-white-VIRGIL-ABLOH-8x8-air-jordan-03.jpg?resize=800%2C1200&ssl=1 " />
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://lzd-img-global.slatic.net/g/p/d8af8602c47ab5a5ab068be553c60a2b.jpg_960x960q80.jpg_.webp" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;