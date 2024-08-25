import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
// Import Swiper styles
import 'swiper/css/pagination';

// import required modules
import { topratemovie } from '../services/products';
import { Link } from 'react-router-dom';
import { Loading1 } from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieAction } from '../features/products/productsAction';
import { Searching } from './Search';
import { Pagination } from 'swiper/modules';

export default function ToprateMovie() {
  const [movie, setmovie] = useState([]);
  const [loading,setloading]=useState(true)
  useEffect(() => {
    topratemovie()
      .then((res) => {
        setmovie(res.results)
        setTimeout(() => {
          setloading(false)
        },2000);
        console.log(movie)
      })
  }, [])
  return (
    <>
    {
      loading ? <Loading1/> :
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        400:{
          slidesPerView: 3,
          spaceBetween: 5,
        },
        440: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1250:{
          slidesPerView:6,
          spaceBetween: 20
        },
        1500:{
          slidesPerView:7,
          spaceBetween: 20
        }
      }}
      modules={[Pagination]}
      className="mySwiper "
    >
      {
        movie.map((products) =>
          <SwiperSlide className="w-36 flex-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link
               onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }} to={`/onemovie/${products.id}`}
            >
            <img
              className="rounded-t-lg "
              src={`https://image.tmdb.org/t/p/w500${products.poster_path}`} alt="" />
            </Link>

            <div className="text-center">
              <a href="#">
                <h5 className="mb-2 text-xs sm:text-sm md:text-base mt-2  tracking-tight text-white">{products.title}</h5>
              </a>
            </div>
          </SwiperSlide>
        )
      }

    </Swiper>
    }
  </>

  );
}


