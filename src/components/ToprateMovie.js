import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Card, { SwiperCard } from './Card';
import { topratemovie } from '../services/products';

export default function ToprateMovie() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        topratemovie()
            .then((res) => {
                setmovie(res.results)
                console.log(movie)
            })
    }, [])
    return (
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            '@2.00': {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
                {
                    movie.map((products) => 


                        <SwiperSlide>
                            <div className="w-72 flex-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a className='' href="#">
                                    <img className="rounded-t-lg " src={`https://image.tmdb.org/t/p/w500${products.poster_path}`} alt={products.title} />
                                </a>
                                <div className="p-5 text-center">
                                    <a href="#">
                                        <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-white/75 dark:text-white">{products.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-100/50 dark:text-gray-400">{products.release_date}</p>

                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    }

            </Swiper>
        </>
    );
}
