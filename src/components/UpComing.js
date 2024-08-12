import React, { useEffect, useState } from 'react'
import { upcoming } from '../services/products'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Loading1 } from './Loading'
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
                 loading ? <Loading1/> :   coming.map((movie) =>
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
                                            <p className="hidden sm:block max-w-2xl mb-6 font-light text-white lg:mb-8 text-xs md:text-base lg:text-lg dark:text-gray-400">{movie.overview.length > 300 ? `${movie.overview.substring(0,300)}....`:movie.overview}</p>
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

export function UpCominglist() {
    const [movie, setcoming] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        upcoming()
            .then((res) => {
                setcoming(res.results)
                setloading(false)
            })
    }, [])
    return (
        loading ? <Loading1/> :
        <section className=' h-auto w-11/12 m-auto  pt-20' >
            <h2 className='text-xl text-secondary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5' >UpComing List</h2>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  xs:gap-1 sm:gap-4'>
    
                {movie.map((data, index) => (
                    <div className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/onemovie/${data.id}`} className=''>
                            <img className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
                        </Link>
                        <div className="p-2 text-center">
                            <a href="#">
                                <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-white/75 dark:text-white">{data.title}</h5>
                            </a>
                            <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-100/50 dark:text-gray-400">{data.release_date}</p>
                        </div>
                    </div>
    
                ))}
            </div>
        </section>
      );
    }