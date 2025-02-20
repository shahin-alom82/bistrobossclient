
import { FiPhoneForwarded } from 'react-icons/fi';
import img from '../assets/contact/banner.jpg'
import SectionTitle from '../contants/SectionTitle';
import Container from './Container';
import Cover from './Cover';
import { FaLocationDot } from 'react-icons/fa6';
import { TbClockHour5Filled } from 'react-icons/tb';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
      return (
            <div >
                  <Helmet>
                        <title>Bistro Boss | Contact</title>
                  </Helmet>
                  <Container>
                        <div className='relative'>
                              <img className='lg:h-[700px] w-full' src={img} alt="" />
                              <div className="absolute bottom-32 left-48 bg-black opacity-70 text-white text-center  py-32 px-72 hidden md:block">
                                    <h1 className="lg:text-5xl uppercase tracking-wide font-bold">CONTACT US</h1>
                                    <p className="mt-6 tracking-wide uppercase">Would you like to try a dish?</p>
                              </div>
                        </div>
                        <div className='mt-10'>
                              <SectionTitle topHeading={'Visit Us'} middleHeading={'OUR LOCATION'} />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>

                              <div>
                                    <span className='bg-yellow-500 px-4 py-4 flex items-center mx-auto justify-center text-white'><FiPhoneForwarded size={30} /></span>
                                    <div className='border-l border-r border-b border-gray-300  px-8 '>
                                          <div className='bg-gray-300 items-center justify-center text-center py-4 mb-8'>
                                                <p className='tracking-wide font-medium text-black text-xl'>PHONE</p>
                                                <p className='tracking-wide mt-1'>+88 01682247291</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <span className='bg-yellow-500 px-4 py-4 flex items-center mx-auto justify-center text-white'><FaLocationDot size={30} /></span>
                                    <div className='border-l border-r border-b border-gray-300  px-8 '>
                                          <div className='bg-gray-300 items-center justify-center text-center py-4 mb-8'>
                                                <p className='tracking-wide font-medium text-black text-xl'>ADDRESS</p>
                                                <p className='tracking-wide mt-1'>Fulbaria, Mymensingh</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <span className='bg-yellow-500 px-4 py-4 flex items-center mx-auto justify-center text-white'><TbClockHour5Filled size={30} /></span>
                                    <div className='border-l border-r border-b border-gray-300  px-8 '>
                                          <div className='bg-gray-300 items-center justify-center text-center py-4 mb-8'>
                                                <p className='tracking-wide font-medium text-black text-xl'>WORKING HOURS</p>
                                                <p className='tracking-wide mt-1'>Mon - Fri: 08:00 - 22:00</p>
                                          </div>
                                    </div>
                              </div>

                        </div>

                  </Container>
            </div>
      );
};

export default Contact;
