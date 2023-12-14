import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../../assets/state-1/1.jpg';
import img2 from '../../../assets/state-1/2.jpg';
import Typewriter from "react-ts-typewriter";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative h-[600px]'>
                        <img src={img1} alt="" className="object-cover h-full w-full" />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black bg-opacity-60'>
                            <h1 className='text-3xl lg:text-6xl font-bold mb-6'>
                                <Typewriter text="Find your next" loop={true} speed={500} /> <span className='text-purple-600'>perfect</span>
                                <br />
                                <Typewriter text="place with ease" loop={true} speed={500} />
                            </h1>

                            <div className='text-sm text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum aut magni voluptas sapiente, eius similique minima voluptates facere reiciendis.
                                <br />
                                We have a wide range of properties for you to choose from.
                            </div>
                            <Link
                                to={'/search'}
                                className='text-sm text-purple-800 font-bold hover:underline mt-4'
                            >
                                <button className='btn bg-purple-500 hover:bg-purple-800 outline-none border-none text-white'> Lets get started...</button>
                            </Link>
                        </div>                     </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-[600px]'>
                        <img src={img2} alt="" className="object-cover h-full w-full" />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black bg-opacity-50'>
                            <h1 className='text-3xl lg:text-6xl font-bold mb-6'>
                                Find your next <span className='text-blue-500'>perfect</span>
                                <br />
                                place with ease                             </h1>
                            <div className='text-sm text-gray-400'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum aut magni voluptas sapiente, eius similique minima voluptates facere reiciendis.
                                <br />
                                We have a wide range of properties for you to choose from.
                            </div>
                            <Link
                                to={'/search'}
                                className='text-sm text-blue-800 font-bold hover:underline mt-4'
                            >
                                <button className='btn btn-primary'> Lets get started...</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
