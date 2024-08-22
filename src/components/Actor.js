import React, { useEffect, useState } from 'react'
import { getactor } from '../services/products'
import { useParams } from 'react-router-dom'
import { Loading1 } from './Loading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

export default function Actor() {
    const [actor,setactor]=useState([])
    const [loading,setloding]=useState([true])
    const {id}=useParams()
    useEffect(()=>{
        getactor(id)
        .then((res)=>{
            setactor(res.cast)
            console.log('actorr',actor)
        })
    },[id])
  return (

<>
<Swiper
          slidesPerView={2}
          spaceBetween={10}
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
          className="mySwiper"
        >
{
  actor.map((data)=> 
    <SwiperSlide className="w-36 flex-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className="w-auto bg-slate-500 h-32 flex-none rounded-lg shadow dark:bg-gray-800">
    <div className="flex gap-2 p-3 h-full items-center justify-center">
        <img className="w-24 h-24  rounded-full   shadow-lg"  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt=""/>
        <div>
        <p className="mb-1 text-xl font-medium text-gray-100 dark:text-white">{data.name}</p>
        <span className="text-sm text-gray-300 dark:text-gray-400">{data.character}</span>
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
{/* <>
{
  actor.map((data)=> 

<div className="w-auto bg-slate-500 h-32 flex-none rounded-lg shadow dark:bg-gray-800">
    <div className="flex gap-2 p-3 h-full items-center justify-center">
        <img className="w-24 h-24  rounded-full   shadow-lg"  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt=""/>
        <div>
        <p className="mb-1 text-xl font-medium text-gray-100 dark:text-white">{data.name}</p>
        <span className="text-sm text-gray-300 dark:text-gray-400">{data.character}</span>
        </div>
    </div>
</div>
    
     )
}
</> */}