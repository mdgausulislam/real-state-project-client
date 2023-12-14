
import img1 from "../../../assets/image/2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Testmonials from "../Testmonials/Testmonials";
const About = () => {
    return (
        <div>
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
                        {/* <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black bg-opacity-60'>
                            <h1 className='text-3xl lg:text-6xl font-bold mb-6'>
                            </h1>
                        </div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <h1 className="text-3xl text-purple-500 font-bold py-5 text-center">A mortgage and real estate industry agency with deep roots</h1>
                <p className="text-xl md:mx-28 mx-4">For over 30 years, companies across the mortgage and real estate industries have turned to us for branding and marketing support.<br />
                    Seroka was founded in 1987 by Pat Seroka with one client; a small mortgage firm with big dreams, tremendous energy, and the courage to lead. In just five years, the firm became the largest independent mortgage company in Chicago and a few years after that, it was sold to the largest bank in Illinois. Since then, Seroka has grown its client-base throughout the United States, with a continued focus on serving the mortgage and real estate industries from its Midwest and East Coast offices.<br />

                    At Seroka, we ensure your brand takes center stage and truly resonates with your target audience. We will show you the right path to meet your growth objectives and beat your competition through strategic brand development and marketing activities.<br />

                    Our approach is designed to meet your individual needs. Whether you are looking for comprehensive services, or help with a specific campaign, our experienced team of branding and marketing professionals can help you achieve the results you need to be successful. Let us put our 30+ years of experience to work for you!</p>
            </div>
            <Testmonials/>
        </div>
    );
};


export default About