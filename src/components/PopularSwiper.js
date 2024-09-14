import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Card, { CardSwiper, Popularmovie, SwiperCard } from './Card';
import products from '../services/products';
import { Link } from 'react-router-dom';
import { Loading1 } from './Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function PopularSwiper() {
  const [movie, setmovie] = useState([]);
  const [loading,setloading]=useState(true)
  useEffect(() => {
    products()
      .then((res) => {
        setmovie(res.results)
        setTimeout(() => {
          setloading(false)
        },2000);
        console.log(movie)
      })
  }, [])
  return (
    <article>
    {
      loading ? <Loading1/> :
    <Swiper 
    // style={{
    //   "--swiper-pagination-color": "#0cdefa",
    //   "--swiper-pagination-bullet-inactive-color": "#999999",
    //   "--swiper-pagination-bullet-inactive-opacity": "1",
    //  // "--swiper-pagination-bullet-size": "10px",
    //  // "--swiper-pagination-bullet-horizontal-gap": "2px"
    // }}
      slidesPerView={2}
      spaceBetween={20}
      // pagination={{ clickable: true }}
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
          spaceBetween: 20,
        },
        1500:{
          slidesPerView:7,
          spaceBetween: 20,
        }
      }}
        touchEventsTarget='container'
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        movie.map((movies,index) =>
          <SwiperSlide  key={index}  className=' flex-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  rounded-lg' >
     <CardSwiper key={index} data={movies}/>
          </SwiperSlide>
        )
      }

    </Swiper>
    }
  </article>
  );
}


