import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Card({data}) {
  return (
<div className="w-64 transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a className='' href="#">
        <img className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
    </a>
    <div className="p-5 text-center">
        <a href="#">
            <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-white/75 dark:text-white">{data.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-100/50 dark:text-gray-400">{data.release_date}</p>

    </div>
</div>

  )
}
export function MovieCard({data,index}){
  return(
    <div
    key={index} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg ">
    <Link onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }}
        to={`/onemovie/${data.id}`} className=''>
        <LazyLoadImage
            effect="blur"
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "0.5s" },
            }}
            className="rounded-t-lg  "
            src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
            alt={data.title} />
    </Link>
    <div className="p-2 text-center">
        <a href="#">
            <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-gray-300/75 dark:text-sky-900">{data.title}</h5>
        </a>
        <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-300/50 dark:text-gray-400">{data.release_date}</p>
    </div>
</div>
  )
}

export function CardSwiper({data,index}){
  return(
    <div data-aos="zoom-in"
    key={index} className=" " >
     <Link
        onClick={() => {
         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
       }} to={`/onemovie/${data.id}`}
     >
     <LazyLoadImage 
             effect="blur"
             wrapperProps={{
               // If you need to, you can tweak the effect transition using the wrapper style.
               style: { transitionDelay: "0.5s" },
             }}
       className="rounded-t-lg "
       src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
     </Link>

     <div className="text-center">
       <a href="#">
         <h5 className="mb-2 text-xs sm:text-sm md:text-base mt-2 dark:text-sky-900 sm:font-bold tracking-tight  text-white">{data.title}</h5>
       </a>
       <div className='p-2 sm:p-2' ></div>
     </div>
    </div>
  )
}