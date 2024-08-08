import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Card, { Popularmovie, SwiperCard } from './Card';
import products from '../services/products';
import { Link } from 'react-router-dom';


export default function PopularSwiper() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        products()
            .then((res) => {
                setmovie(res.results)
                console.log(movie)
            })
    }, [])

    return (
      <>
        {
          movie.map((movie, index) =>
            <div className="w-36 sm:w-44 md:w-52 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/onemovie/${movie.id}`}>
            <img className="rounded-t-lg h-52 sm:h-64 md:h-72 w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
          </Link>
          <div className="text-center">
            <a href="#">
              <h5 className="mb-2 text-xs sm:text-sm md:text-base mt-2  tracking-tight text-gray-100 dark:text-white">{movie.title}</h5>
            </a>
          </div>
        </div>
          )
        }
      </>
    );
  }
  

