import React, { useEffect } from 'react'

import { useRef, useState } from 'react';
// Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
import products from '../services/products';
import { register } from 'swiper/element-bundle';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';
register();

export default function MainContent() {
    const [loading, setLoading] = useState(true)
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        products()
            .then((res) => {
                setmovie(res.results)
                setTimeout(() => {
                    setLoading(false)
                  },1500);
                console.log('nananan', movie.poster_path)
            })
    }, [])
    return (
<section >
<Swiper
  cssMode={true}
  navigation={true}
  pagination={{
    clickable:true,
  }}
  centeredSlides={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  mousewheel={true}
  keyboard={true}
  modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
>
  
    {
     loading? <Loading/>: movie.map((data)=>
            <SwiperSlide >
        <div className=' relative top-0  h-full  bg-cover  bg-no-repeat cursive-font' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`, }} >
        <div className="absolute inset-0 bg-opacity-80 bg-slate-900"></div>
        <div className='flex p-5 md:p-10 md:pt-20 gap-2 md:justify-around opacity-95 pt-20 pb-10 flex-col xs:flex sm:flex-row justify-center'>
            <div className='flex-none m-auto sm:m-0' >
                <Link to={`/onemovie/${data.id}`}>
            <img className='h-96 w-auto  md:h-auto md:w-96' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='picture' />
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center sm:pr-3'>
            <h5 className='text-white  sm:text-2xl lg:text-5xl font-bold' ><Link to={`/onemovie/${data.id}`}>{data.title}</Link></h5>
            <span className='text-slate-400 md:text-base lg:text-xl 2xl:text-2xl' >{data.release_date}</span>
            <div className='w-full' >
                <p className='text-white mt-6 hidden m-auto sm:flex lg:w-128 lg:text-2xl ' >{data.overview.length > 300 ?`${data.overview.substring(0,300)}.....`:data.overview}  </p>
            </div>
            <div className='mt-4' >
            <Link to={`/onemovie/${data.id}`} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
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
</section> 
    );
}

{/* <section>
<Swiper
  cssMode={true}
  navigation={true}
  pagination={true}
  mousewheel={true}
  keyboard={true}
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
>
  
    {
        movie.map((data)=>
            <SwiperSlide >
        <div className=' relative top-0   bg-cover  bg-no-repeat ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.poster_path})`, }} >
        <div className="absolute inset-0 bg-opacity-60 bg-slate-900"></div>
        <div className='flex opacity-95 pt-20 flex-wrap sm:flex-nowrap justify-center'>
            <div className='flex-none' >
            <img className='h-96 w-80 ' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='picture' />
            </div>
            <div className=''>
            <h5 className='text-white' >{data.title}</h5>
            <div>
                <p className='text-white hidden sm:block ' >{data.overview}</p>
            </div>
            </div>
        </div>
        </div>
        </SwiperSlide>
        )
    }

  
</Swiper>
</section> */}

{/* <section className=' h-auto'>
<Swiper
    cssMode={true}
    spaceBetween={30}
    centeredSlides={true}
    // autoplay={{
    //   delay: 5000,
    //   disableOnInteraction: false,
    // }}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
>
    {
       loading? <Loading/> :
        movie.map((movie) =>
            <SwiperSlide>
                
                <div className=" relative top-0 h-11/12  lg:h-11/12 dark:bg-gray-900 bg-cover  bg-no-repeat"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, }}  >
                    <div className="absolute inset-0 bg-opacity-60 bg-slate-900"></div>
                    <div className="grid h-3/4 pt-20 max-w-screen-xl px-4 relative mx-auto lg:gap-8 xl:gap-0 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 ">
                        <div className="  mb-5 sm:col-span-4 md:col-span-4 lg:col-span-5 lg:flex sm:mr-5 m-auto ">
                            <img className=' w-72 h-96 sm:h-auto  sm:w-auto' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="mockup" />
                        </div>
                        <div className=" sm:mb-10 sm:col-span-8 md:col-span-8 place-self-center lg:col-span-7 text-center">
                            <Link to={`/onemovie/${movie.id}`} >
                            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">{movie.title}</h1>
                            </Link>
                            <p className="hidden sm:block max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{movie.overview}</p>
                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Watch now
                            </a>
                        </div>

                    </div>

                </div>
                
            </SwiperSlide>
        )
    }

</Swiper>
</section> */}
// injectStyles: [
//     `
//       .swiper-button-next,
//       .swiper-button-prev {
        
//         border-radius: 100%;
//         color: #0cdefa;
//       }
//       .swiper-pagination-bullet{
//         width: 10px;
//         height: 10px;
//         background-color: #0cdefa;
//       }
//   `,
//   ],