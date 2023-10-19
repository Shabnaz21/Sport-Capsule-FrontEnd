import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import ProductCard from '../../Products/ProductCard';
import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    const brandsData = useLoaderData();
    const brandName=brandsData.name;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
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
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img  className='h-auto' src="https://i.ibb.co/HpY564z/black-friday-limited-sale-background-with-offer-details-1017-40927.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  className='h-auto' src="https://i.ibb.co/k66FLQ2/christmas-composition-paper-cut-style-sale-banner-background-255246-1232.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  className='h-auto'src="https://i.ibb.co/HVrndkb/gradient-colorful-sale-background-52683-57679.jpg" />
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