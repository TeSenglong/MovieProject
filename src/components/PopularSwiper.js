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
import products from '../services/products';

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
      <Swiper
        // slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                {
                    movie.map((products) => 


                        <SwiperSlide className='flex justify-center ' >
                            <div className="w-52 flex-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a className='' href="#">
                                    <img className=" " src={`https://image.tmdb.org/t/p/w500${products.poster_path}`} alt={products.title} />
                                </a>
                                <div className="p-5 text-center">
                                    <a href="#">
                                        <h5 className="mb-2 text-center text-base font-bold tracking-tight text-white/75 dark:text-white">{products.title}</h5>
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



//   return (
// <>
// <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         grabCursor={true}
//         modules={[Pagination, Autoplay, Navigation]}
//         Autoplay={{
//             delay: 3000,
//             disableOnInteraction: false
//         }}
//         navigation={true}
//  >
//     {
//         movie.map((products,index)=><SwiperSlide>
//             <Card
//             key={index}
//             data={products}
//             />
//         </SwiperSlide>)
//     }

// </Swiper>
// </>
//   )
// }