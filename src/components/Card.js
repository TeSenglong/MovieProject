import React, { useEffect, useState } from 'react'
import products from '../services/products'
import { Link } from 'react-router-dom'

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

