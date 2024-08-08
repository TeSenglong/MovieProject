import React, { useEffect, useState } from 'react'
import { productsid } from '../services/products'
import { useParams } from 'react-router-dom'
import { Loading1 } from '../components/Loading'


export default function OneMovie() {
  const [onemovie, setonemovie] = useState([])
  const [loading, setloading] = useState(true)
  const { id } = useParams()
  // const genres= res.genres.map(ress)
  useEffect(() => {
    productsid(id)
      .then((res) => {
        setonemovie(res)
        setloading(false)
        console.log('onemovie', onemovie)
      })
  }, [])
  return (
    <>
      {
        loading ? <Loading1 /> :
          <section className=" relative pb-10 pt-10 top-0 text-white  dark:bg-gray-900 bg-cover  bg-no-repeat"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${onemovie.poster_path})`, }}
          >
            <div className=" absolute inset-10 sm:inset-0 bg-opacity-60 bg-slate-900"></div>
            <div className="flex flex-wrap  items-center justify-center sm:justify-around sm:flex-nowrap h-3/4 px-4 relative md:pt-16 pt-20 mx-auto gap-4 lg:gap-8 xl:gap-0  ">
              <div className=" my-5 w-3/5 flex flex-col sm:col-span-8 justify-center items-center  ">
                <h1 className="max-w-2xl mb-4 text-xl sm:text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">{onemovie.title}</h1>
                  <span>{onemovie.release_date}</span>
                <p className=" max-w-2xl mb-6 font-light text-xs text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{onemovie.overview}</p>
                <div className='flex sm:gap-10 text-sm sm:text-base '>
                  <span>Popular: {onemovie.popularity}</span>
                  <span className='text-secondary' >Rate: {onemovie.vote_average}/10</span>
                  <span>Status: {onemovie.status}</span>
                </div>
                {/* <p className='text-white mb-2' >Genres:  {`${onemovie.genres[1].name}_
                                            ${onemovie.genres[0].name}_
                                            ${onemovie.genres[2].name}`}</p> */}
                                            <div className='flex flex-wrap text-xs mb-3'>
                                            <p className='mr-2' >
                                              Genres: 
                                            </p>
                                            {
                                              onemovie.genres.map((data)=>(
                                              <span className='' >
                                                {data.name}_
                                              </span>
                                                                   
                                            ))}
                                            </div>
                <a href="#" className="text-secondary inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Trailer
                </a>
                                            <p>{onemovie.origin_country}</p>
              </div>
              <div className=" hidden sm:block w-full sm:w-2/5 h-72 md:w-2/5 md:h-full mb-10 sm:mb-0 sm:flex justify-center items-center ">
                <img className=' w-60 h-auto sm:w-56 md:w-60 lg:w-60 lg:h-auto xl:w-72  ' src={`https://image.tmdb.org/t/p/w500${onemovie.poster_path}`} alt="mockup" />                   
              </div>
              <div className=''></div>
            </div>
          </section>
      }

    </>
  )
}

