import React, { useEffect } from 'react'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import products from '../services/products';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';

export default function MainContent() {
    const [loading,setLoading] =useState(true)
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        products()
            .then((res) => {
                setmovie(res.results)
                setLoading(false)
                console.log('nananan', movie.poster_path)
            })
    }, [])
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                //    loading? <Loading/> :
                    movie.map((movie) =>
                        <SwiperSlide>
                            <section className=" relative top-0  dark:bg-gray-900 bg-cover  bg-no-repeat"
                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, }}  >
                                <div className="absolute inset-0 bg-opacity-60 bg-slate-900"></div>
                                <div className="grid h-3/4 max-w-screen-xl px-4 relative mx-auto lg:gap-8 xl:gap-0 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 ">
                                    <div className=" mt-20 mb-5 sm:col-span-4 md:col-span-4 lg:col-span-5 lg:flex sm:mr-5 m-auto ">
                                        <img className=' w-72 h-96 sm:h-auto  sm:w-auto' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="mockup" />
                                    </div>
                                    <div className=" my-5 sm:col-span-8 md:col-span-8 place-self-center lg:col-span-7 text-center">
                                        <Link to={`/onemovie/${movie.id}`} >
                                        <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">{movie.title}</h1>
                                        </Link>
                                        <p className="hidden sm:block max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{movie.overview}</p>
                                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                            Watch now
                                        </a>
                                    </div>

                                </div>
                            </section>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
}

