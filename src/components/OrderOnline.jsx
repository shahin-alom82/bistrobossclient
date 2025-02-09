import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Container from './Container';
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";
import SectionTitle from '../contants/SectionTitle';

const OrderOnline = () => {
      return (
            <div className='mt-10'>
                  <Container>
                        <SectionTitle
                              topHeading={"From 11:00 AM to 10:00 PM"}
                              middleHeading={"Order Online"}
                        />
                        <Swiper
                              slidesPerView={5}
                              spaceBetween={30}
                              freeMode={true}
                              pagination={{
                                    clickable: true,
                              }}
                              modules={[FreeMode, Pagination]}
                              className="mySwiper mt-10"
                        >
                              <SwiperSlide className='relative'>
                                    <img src={img1} alt="img1" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Salads</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img2} alt="img2" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Soups</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img3} alt="img3" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Pizza</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img4} alt="img4" />
                                    <h1 className='absolute top-72 left-14 font-medium text-gray-600 text-2xl uppercase'>Desserts</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img2} alt="img2" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Soups</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img3} alt="img3" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Pizza</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img2} alt="img2" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Soups</h1>
                              </SwiperSlide>
                              <SwiperSlide className='relative'>
                                    <img src={img5} alt="img5" />
                                    <h1 className='absolute top-72 left-16 font-medium text-gray-600 text-2xl uppercase'>Salads</h1>
                              </SwiperSlide>
                        </Swiper>
                  </Container>
            </div>
      );
};

export default OrderOnline;