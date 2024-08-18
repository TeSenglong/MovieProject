import React, { useEffect, useState } from 'react'
import { upcoming } from '../services/products'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Loading1 } from './Loading'
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
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    loading ? <Loading1 /> : coming.map((movie) =>
                        <SwiperSlide>
                            <div className=' m-auto w-auto h-auto cursive-font pt-10 ' >
                                <div className=" relative top-0 w-auto h-auto mb-10  dark:bg-gray-900 bg-cover  bg-no-repeat"
                                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, }}  >
                                    <div className="absolute inset-0 bg-opacity-80 bg-slate-900 "></div>
                                    <div className="flex flex-col gap-2 xs:grid xs:grid-cols-8  h-3/4 pb-4 max-w-screen-xl p-5 sm:p-2  relative mx-auto lg:gap-8 xl:gap-0 ">
                                        <div className=" m-auto col-span-3 ">
                                            <img className=' sm:absolute sm:-top-10 sm:-left-10 md:w-40 md:h-56 lg:w-52 lg:h-64 xl:w-60 xl:h-80 ' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="mockup" />
                                        </div>
                                        <div className=" my-5 m-auto place-self-center col-span-5  text-center">
                                            <Link to={`/onemovie/${movie.id}`} >
                                                <h1 className=" mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-6xl text-white dark:text-white">{movie.title}</h1>
                                            </Link>
                                            <p className="hidden xs:block max-w-2xl mb-6 font-light text-white lg:mb-8 text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl dark:text-gray-400">{movie.overview.length > 150 ? `${movie.overview.substring(0, 150)}....` : movie.overview}</p>
                                            <a href="#" className="inline-flex items-center text-secondary justify-center px-4 py-3 text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-center font-bold border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
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
    const dispatch = useDispatch()
    const { movies, status, error } = useSelector(state => state.movies)
    const [query, setquery] = useState("")
    useEffect(() => {
        dispatch(searchMovieAction(query))
    }, [query])
    const [movie, setcoming] = useState([])
    const [loading, setloading] = useState(true)
    const [totalpage, settotalpage] = useState(0)
    const [page, setpage] = useState(1)
    useEffect(() => {
        const fetchmovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`)
            return res.json()
                .then((movies) => {
                    settotalpage(movies.totals_pages);
                    setcoming([...movie, ...movies.results]);
                    setloading(false);
                    console.log('totalpages', movies)
                });
        }
        fetchmovie();
    }, [page]);
    //     upcoming()
    //         .then((res) => {
    //             setcoming(res.results)
    //             setloading(false)
    //         })
    // }, [])
    return (
        loading ? <Loading1 /> :
            <section className=' h-auto w-11/12 m-auto  pt-20' >
                <Searching/>
                <h2 className='text-xl text-secondary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5' >UpComing List</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-1 sm:gap-4'>
                {movies.map((data, index) => (
                    <div key={index} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                <div className='w-full text-center mt-10'>
                    {
                        totalpage !== page && <button className='text-white border text-secondary hover:bg-slate-800 hover:text-white  p-3 text-base md:text-xl rounded-lg ' onClick={() => setpage(page + 1)}> See more
                        </button>
                    }
                </div>
            </section>
    );
}