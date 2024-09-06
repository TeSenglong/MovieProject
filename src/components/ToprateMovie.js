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
import { CardSwiper } from './Card';

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
  const{key}=movie
  return (
    <>
    {
      loading ? <Loading1 key={key}/> :
    <Swiper style={{
      "--swiper-pagination-color": "#0cdefa",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
     // "--swiper-pagination-bullet-size": "10px",
     // "--swiper-pagination-bullet-horizontal-gap": "2px"
    }}
      slidesPerView={2}
      spaceBetween={20}
      pagination={{ clickable: true }}
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
        movie.map((products,index) =>
          <SwiperSlide  key={index}  className=" flex-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  rounded-lg  ">
       <CardSwiper key={index} data={products}/>
          </SwiperSlide>
        )
      }

    </Swiper>
    }
  </>

  );
}


