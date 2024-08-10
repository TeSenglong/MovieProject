import React, { useEffect, useState } from 'react'
import { movieid } from '../services/products'
import { useParams } from 'react-router-dom'
import { Loading1 } from '../components/Loading'
import Actor from '../components/Actor'
import NowPlaying from '../components/NowPlaying'
import PopularSwiper from '../components/PopularSwiper'
import UpComing from '../components/UpComing'


export default function OneMovie() {
  const [onemovie, setonemovie] = useState([])
  const [loading, setloading] = useState(true)
  const { id } = useParams()

  // const genres= res.genres.map(ress)
  useEffect(() => {
    movieid(id)
      // getactor(id)
      .then((res) => {
        setonemovie(res)
        setloading(false)
        console.log('onemovie', onemovie)
      })
  }, [id])
  return (
    <main>
      {
        loading ? <Loading1 /> :
          <section ion className=" relative pb-10 pt-10 top-0 text-white  dark:bg-gray-900 bg-cover  bg-no-repeat"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${onemovie.poster_path})`, }}
          >
            <div className=" absolute inset-0 sm:inset-0 bg-opacity-80 bg-slate-900"></div>
            <div className="flex flex-wrap  justify-center sm:justify-around sm:flex-nowrap h-3/4 px-4 relative md:pt-16 pt-10 mx-auto gap-4 lg:gap-8 xl:gap-0  ">

              <div className=" mt-5 sm:mt-0 sm:w-3/5 sm:h-full w-4/5 flex flex-col sm:col-span-8 justify-center">
                <div className="sm:hidden h-auto mb-5 w-full flex justify-center">
                  <img className=' w-60 h-auto sm:w-56 md:w-60 lg:w-60 lg:h-auto xl:w-72  ' src={`https://image.tmdb.org/t/p/w500${onemovie.poster_path}`} alt="mockup" />
                </div>
                <h1 className="max-w-2xl mb-4 text-xl sm:text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">
                  {onemovie.title}
                </h1>
                <p className='text-xl mb-2' >Overview</p>
                <p className=" max-w-2xl  font-light text-xs text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  {onemovie.overview}</p>
              </div>

              <div className='w-4/5 sm:w-auto sm:ml-10 '>
                <div className=' sm:gap-10 text-xs sm:text-sm '>
                  <p>Popular: <span className='text-gray-400' > {onemovie.popularity}</span></p>
                  <p>Rate: <span className='text-secondary' >{onemovie.vote_average}/10</span></p>
                  <p> Status: <span className='text-gray-400' > {onemovie.status}</span></p>
                </div>
                <div className=' '>
                  <p className='mr-10'>
                    Release_Date: <span className='text-gray-400' >{onemovie.release_date}</span>
                  </p>
                  <p className='mr-10'>Time: <span className='text-gray-300' >{Math.floor(`${onemovie.runtime}` / 60)}h-{`${onemovie.runtime}` % 60}mn</span> </p>
                  <p>{onemovie.origin_country}</p>
                </div>
                {/* <p className='text-white mb-2' >Genres:  {`${onemovie.genres[1].name}_
                                            ${onemovie.genres[0].name}_
                                            ${onemovie.genres[2].name}`}</p> */}
                <div className='flex flex-wrap mb-3'>
                  <p className='mr-2' >
                    Genres:
                  </p>
                  {
                    onemovie.genres.map((data) => (
                      <span className=' text-gray-400' >
                        {data.name}_
                      </span>

                    ))}
                </div>
                <div className='w-full text-center' >
                  <a href="#" className="text-secondary w-28 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Trailer
                  </a>
                </div>
              </div>

              <div className="hidden w-full sm:w-2/5 h-72 md:w-2/5 md:h-full mb-10 sm:mb-0 sm:flex justify-center items-center ">
                <img className=' w-60 h-auto sm:w-56 md:w-60 lg:w-60 lg:h-auto xl:w-72  ' src={`https://image.tmdb.org/t/p/w500${onemovie.poster_path}`} alt="mockup" />
              </div>


            </div>
          </section>

      }

      <section className='w-11/12 m-auto'>
        <h3 className='text-secondary font-bold text-xl mt-10 w-11/12 '>
          Movie Top Cast
        </h3>
        <div className='flex hide-scrollbar m-auto gap-2  ' >
          <Actor />
        </div>
      </section>
      <section className=' ' >
        <h3 className=' text-xl font-bold text-secondary w-11/12 m-auto mt-10' >Now playing</h3>
        <div className='w-11/12 hide-scrollbar m-auto gap-2'>
          <div className='flex flex-nowrap mt-10 gap-2' >
            <NowPlaying />
          </div>
        </div>
      </section>
      <section className='w-11/12 m-auto'>
        <h3 className='text-secondary text-xl font-bold mt-10 mb-5' >
          UpComing
        </h3>
        <UpComing />
      </section>
    </main>
  )
}


