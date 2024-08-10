import React, { useEffect, useState } from 'react'
import { upcoming } from '../services/products'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function UpComing() {
    const [coming, setcoming] = useState([])
    useEffect(() => {
        upcoming()
            .then((res) => {
                setcoming(res.results)
            })
    }, [])
    return (
        <>
            <Swiper

                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'2'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    coming.map((movie) =>
                        <SwiperSlide>
                            <div className=' m-auto' >
                                <div className=" relative top-0 w-auto h-auto  dark:bg-gray-900 bg-cover  bg-no-repeat"
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, }}  >
                                    <div className="absolute inset-0 bg-opacity-60 bg-slate-900 "></div>
                                    <div className="flex flex-wrap sm:flex-nowrap h-3/4 max-w-screen-xl px-4 relative mx-auto lg:gap-8 xl:gap-0 ">
                                        <div className="lg:flex m-auto ">
                                            <img className=' w-60 h-72' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="mockup" />
                                        </div>
                                        <div className=" my-5 place-self-center  text-center">
                                            <Link to={`/onemovie/${movie.id}`} >
                                                <h1 className=" mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-6xl text-white dark:text-white">{movie.title}</h1>
                                            </Link>
                                            <p className="hidden sm:block max-w-2xl mb-6 font-light text-white lg:mb-8 text-xs md:text-base lg:text-lg dark:text-gray-400">{movie.overview}</p>
                                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                                Watch now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}
