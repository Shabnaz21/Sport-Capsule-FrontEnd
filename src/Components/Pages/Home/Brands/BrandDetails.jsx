import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { useEffect, useState } from 'react';
import ProductCard from '../../Products/ProductCard';
import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    const brandsData = useLoaderData();
    const brandName = brandsData.name;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sport-capsule-server.vercel.app/products')
            .then(response => response.json())
            .then(data => {
                const remainingProducts = data.filter(product => product.brand === brandName);
                setProducts(remainingProducts);
            })

    }, [brandName])

    return (
        <div>
            <div>
                {/* slider */}
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper min-h-screen"
                >
                    <SwiperSlide>
                        <img className='min-h-screen' src={brandsData.ads_1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='min-h-screen' src={brandsData.ads_2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='min-h-screen' src={brandsData.ads_3} />
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='container mx-auto mt-20'>
                {/* products */}
                <div className="grid md:grid-cols-2 mx-5 gap-4 pb-20">
                    {
                        products.map(item => <ProductCard key={item._id}
                            product={item}
                        > </ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;