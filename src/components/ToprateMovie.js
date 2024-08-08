import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { topratemovie } from '../services/products';
import { Link } from 'react-router-dom';

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

      {
        movie.map((products) =>
          <div className="w-36 sm:w-44 md:w-52 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/onemovie/${products.id}`}>
              <img className="rounded-t-lg h-52 sm:h-64 md:h-72 w-full" src={`https://image.tmdb.org/t/p/w500${products.poster_path}`} alt="" />
            </Link>
            <div className="text-center">
              <a href="#">
                <h5 className="mb-2 text-xs sm:text-sm md:text-base mt-2  tracking-tight text-gray-100 dark:text-white">{products.title}</h5>
              </a>
            </div>
          </div>
        )
      }

    </>
  );
}
