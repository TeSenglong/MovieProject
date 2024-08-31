import React, { useEffect, useState } from 'react'
import { movieid, videoid } from '../services/products'
import { useParams } from 'react-router-dom'
import { Loading, Loading1 } from '../components/Loading'
import Actor from '../components/Actor'
import NowPlaying from '../components/NowPlaying'
import PopularSwiper from '../components/PopularSwiper'
import UpComing from '../components/UpComing'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Trailer from '../components/Trailer'
import YouTube from 'react-youtube'
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/small logo.jpg';
export default function OneMovie() {
  const [onemovie, setonemovie] = useState([])
  const [loading, setloading] = useState(true)
  const { id } = useParams()
  const [movie, setmovie] = useState([])
  const [playtrailer, setplaytrailer] = useState(false)
  useEffect(() => {
    Aos.init({
      delay: "200"
    })
    movieid(id)
      .then((res) => {
        setonemovie(res)
        setplaytrailer(false)
        setTimeout(() => {
          setloading(false)
        }, 1500);
        console.log('onemovie', onemovie)
      })
  }, [id])
  useEffect(() => {
    videoid(id)
      .then((res) => {
        setmovie(res.results)
        console.log('videoid', movie)
      })
    }, [id])
 
  const rendertrailer = () => {
    const trailer = movie.find(vid => vid.name === 'Official Trailer')
    const key = trailer ? trailer.key : movie[0].key
    console.log('trailer', trailer)
    return (
      <YouTube
        videoId={key}
        className='absolute left-0 z-40 right-0 m-auto -top-0 bottom-20 sm:bottom-0 '
        iframeClassName='container-youtube'
        title={onemovie.title}
        opts={{
          playerVars: {
            autoplay: 1,
          }
        }}
      />
    )
  }

  return (
    <>
      <Helmet>
        <meta charSet='UTF-8' />
        <link rel="shortcut icon" href={logoimg} />
        <title>{`Mohaori-${onemovie.title}`}</title>
        <meta name='title' content='Movies website' />
        <meta name='description' content='Demo Movies website មហោរី design from class web-design web20' />
        <meta name='thumbnail' content={thumnail} />
        <meta property="og:title" content="មហោរី​ Mohaori - movies website" />
        <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
        <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
        <meta property="og:url" content=" https://movieproject-ashen.vercel.app/Mohaori/thumnail.png" />
        <meta property="og:type" content="Movies-project" />
        <meta property='fb:app_id' content='1226113552034640' />
      </Helmet>
      {
        loading ? <Loading /> : <main>
          <section key={onemovie.key} className=" relative  pb-5 pt-10 top-0 text-white  dark:bg-gray-300 bg-gray-900 bg-cover  bg-no-repeat"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${onemovie.poster_path})`, }}
          >
            <div className=" absolute inset-0 sm:inset-0 bg-opacity-80 bg-slate-900"></div>
            <div className="flex flex-wrap md:p-10 justify-center sm:justify-around 2xl:justify-around sm:flex-nowrap h-3/4 px-4 relative md:pt-16 pt-10 mx-auto gap-4 lg:gap-8 xl:gap-0  ">

              <div data-aos="fade-right" className=" mt-5 sm:mt-0 sm:w-3/5 2xl:w-auto sm:h-full w-4/5 flex flex-col sm:col-span-8 justify-center">
                <div
                  className="sm:hidden  h-auto mb-5 w-full flex justify-center">
                  <img className=' w-60 h-auto sm:w-56 md:w-60 lg:w-60 lg:h-auto xl:w-72  ' src={`https://image.tmdb.org/t/p/w500${onemovie.poster_path}`} alt="mockup" />
                </div>
                <h1 className="max-w-2xl mb-4 text-center sm:text-start text-xl sm:text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl text-white dark:text-white">
                  {onemovie.title}
                </h1>
                <div className='sm:hidden w-full opacity-85 text-center' >
                  <button className="text-secondary w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black  dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 "
                    onClick={() => {setplaytrailer(true) ;window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}} >
                    Watch Trailer
                  </button>
                </div>
                <p className='text-xl md-2xl mb-2' >Overview

                  <span className='sm:hidden text-xs sm:text-sm md:-text-base xl:text-xl flex flex-wrap mb-3'>
                    {
                      onemovie.genres.map((data) => (
                        <span className=' text-gray-400' >
                          _{data.name}
                        </span>
                      ))}
                  </span>
                </p>
                <p className=" max-w-2xl text-sm sm:text-sm text-white lg:mb-8 md:text-sm lg:text-base dark:text-gray-400">
                  {onemovie.overview}</p>
              </div>

              <div className='w-4/5 sm:w-auto sm:ml-10 flex flex-col justify-between '>
                <div>
                  <div className='hidden  sm:flex text-xs sm:text-sm md:-text-base xl:text-xl flex-wrap mb-3'>
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
                  <div className='flex gap-4 sm:block  sm:gap-10 text-xs sm:text-sm md:text-base xl:text-xl '>
                    <div className='pr-3 flex flex-col gap-2' >
                      <p className='sm:mb-2  ' >Popular: <span className='text-gray-400 ' > {onemovie.popularity}</span></p>
                      <p className='sm:mb-2'>Rate: <span className='text-secondary' >{onemovie.vote_average}/10</span></p>
                      <p className='sm:mb-2'> Status: <span className='text-gray-400' > {onemovie.status}</span></p>
                    </div>
                    <div className='flex flex-col gap-2' >
                      <p className='mr-10'>Time: <span className='text-gray-300' >{Math.floor(`${onemovie.runtime}` / 60)}h-{`${onemovie.runtime}` % 60}mn</span> </p>
                      <p>{onemovie.origin_country}</p>
                    </div>
                  </div>
                  <div className='mt-2 mb-2 sm:text-start'>
                    <p className='sm:mb-2  text-xs sm:text-sm md:text-base xl:text-xl '>
                      Release_Date: <span className='text-gray-400' >{onemovie.release_date}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="hidden w-full sm:w-2/5 h-72 md:w-2/5 md:h-full mb-10 sm:mb-0 sm:flex justify-center items-center ">
                <img className=' w-60 h-auto sm:w-56 md:w-60 lg:w-60 lg:h-auto xl:w-72  ' src={`https://image.tmdb.org/t/p/w500${onemovie.poster_path}`} alt="mockup" />
              </div>


            </div>
            {movie && playtrailer ? rendertrailer() : null}

            <div className=' hidden sm:block w-full opacity-85 text-center' >
              <button className="text-secondary w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black  dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 "
                onClick={() => {setplaytrailer(true);window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}}  >
                Watch Trailer
              </button>
            </div>
            {
              playtrailer ? <button className=' absolute bottom-80 sm:bottom-20 right-10 z-50  text-white border border-gray-300 rounded-md p-2 hover:text-gray-600 hover:bg-gray-200' onClick={() => setplaytrailer(false)} >Close</button> : null
            }
          </section>
          {/* /*  onClick={() => setplaytrailer(!playtrailer)} > {playtrailer ? 'Close' : 'Watch Traler'} */}


          <section className=' m-auto bg-gray-900 dark:bg-gray-300'>
            <h3 className='w-11/12 m-auto text-secondary lg:text-2xl dark:text-gray-900  font-bold text-xl pt-10 '>
              Movie Top Cast
            </h3>
            <div className='w-11/12 h-40 m-auto gap-2 mt-10  ' >
              <Actor />
            </div>
          </section>
          <section className='bg-gray-900 dark:bg-gray-300 ' >
            <h3 className=' text-xl font-bold text-secondary lg:text-2xl dark:text-gray-900  w-11/12 m-auto pt-10' >Now playing</h3>
            <div className='w-11/12  m-auto gap-2'>
              <div className='flex flex-nowrap mt-10 gap-2' >
                <NowPlaying />
              </div>
            </div>
          </section>
          <section className=' bg-gray-900 dark:bg-gray-300 pb-10 '>
            <div className='w-11/12 m-auto'>
              <h3 className=' dark:text-gray-900 text-secondary text-xl lg:text-2xl font-bold pt-10 mb-5' >
                UpComing
              </h3 >
              <div
              >

                <UpComing />
              </div>
            </div>
          </section>
        </main >
      }
    </>
  )
}


