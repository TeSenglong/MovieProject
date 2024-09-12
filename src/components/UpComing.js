import React, { useEffect, useState } from 'react'
import { upcoming } from '../services/products'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Loading1, Loading11 } from './Loading'
import Search, { Searching } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieAction } from '../features/products/productsAction'
export default function UpComing() {

    const [coming, setcoming] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        upcoming()
            .then((res) => {
                setcoming(res.results)
                setloading(false)
            })
    }, [])
    return (
        <>
            <Swiper

                effect={'coverflow'}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                
                centeredSlides={true}
                slidesPerView={'1'}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper"
            >
                {
                    loading ? <Loading11 /> : coming.map((movie) =>
                        <SwiperSlide>
                            <div data-aos="fade-right"
                                data-aos-delay="100" className=' m-auto w-auto h-full cursive-font pt-10 pb-2 ' >
                                <div className=" relative flex top-0 w-auto h-auto mb-10  dark:bg-gray-900 bg-cover  bg-no-repeat"
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, }}  >
                                    <div className="absolute inset-0 bg-opacity-80 bg-slate-900 "></div>
                                    <div className="flex flex-col gap-2 xs:grid xs:grid-cols-8  h-3/4 pb-4 max-w-screen-xl p-5 sm:p-2  relative mx-auto lg:gap-8 xl:gap-0 ">
                                        <div className=" m-auto col-span-3 ">
                                            <Link onClick={() => {
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            }} to={`/onemovie/${movie.id}`}>
                                                <img className=' sm:absolute sm:-top-10 sm:-left-10 md:w-40 md:h-56 lg:w-52 lg:h-64 xl:w-60 xl:h-80 ' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="mockup" />
                                            </Link>
                                        </div>
                                        <div className=" my-5 m-auto place-self-center col-span-5  text-center">
                                            <Link onClick={() => {
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            }}
                                                to={`/onemovie/${movie.id}`} >
                                                <h1 className=" mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-6xl text-white dark:text-white">{movie.title}</h1>
                                            </Link>
                                            <p className="hidden xs:block max-w-2xl mb-6 font-light text-white lg:mb-8 text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:text-gray-400">{movie.overview.length > 150 ? `${movie.overview.substring(0, 150)}....` : movie.overview}</p>
                                            <Link onClick={() => {
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            }}
                                                to={`/onemovie/${movie.id}`} className="inline-flex items-center text-secondary justify-center px-4 py-3 text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-center font-bold border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                                View More
                                            </Link>
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

