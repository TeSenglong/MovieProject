import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { topratemovie } from '../services/products';
import { Link } from 'react-router-dom';
import { Loading1 } from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieAction } from '../features/products/productsAction';
import { Searching } from './Search';

export default function ToprateMovie() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    topratemovie()
      .then((res) => {
        setmovie(res.results)
        console.log(movie)
      })
  }, [])
  return (
    <>

      {
        movie.map((products) =>
          <div className="w-36 sm:w-44 md:w-52 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} to={`/onemovie/${products.id}`}>
              <img className="rounded-t-lg h-52 sm:h-64 md:h-72 w-full"
                src={`https://image.tmdb.org/t/p/w500${products.poster_path}`} alt="" />
            </Link>
            <div className="text-center">
              <a href="#">
                <h5 className="mb-2 text-xs sm:text-sm md:text-base mt-2  tracking-tight text-gray-100 dark:text-white">{products.title}</h5>
              </a>
            </div>
          </div>
        )
      }

    </>
  );
}

export function TopRateMovieslist() {

  const dispatch = useDispatch()
  const { movies, status, error } = useSelector(state => state.movies)
  const [query, setquery] = useState("")
  useEffect(() => {
      dispatch(searchMovieAction(query))
  }, [query])

  const [movie, setmovie] = useState([]);
  const [loading, setloading] = useState(true)
  const [totalpage, settotalpage] = useState(0)
  const [page, setpage] = useState(1)
  useEffect(() => {
    const fetchmovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`)
      return res.json()
        .then((movies) => {
          settotalpage(movies.totals_pages);
          setmovie([...movie, ...movies.results]);
          setloading(false);
          console.log('totalpages', movies)
        });
    }
    fetchmovie();
  }, [page]);
  return (
    loading ? <Loading1 /> :
      <section className=' h-auto w-11/12 m-auto  pt-20' >
        <Searching/>
        <h2 className='text-xl text-secondary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5' >TopRate List</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-1 sm:gap-4'>
        {loading ? <Loading1 /> : movies.map((data, index) => (
                    <div key={index} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/onemovie/${data.id}`} className=''>
                            <img className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
                        </Link>
                        <div className="p-2 text-center">
                            <a href="#">
                                <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-white/75 dark:text-white">{data.title}</h5>
                            </a>
                            <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-100/50 dark:text-gray-400">{data.release_date}</p>
                        </div>
                    </div>
                ))}
          {movie.map((data, index) => (
            <div className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/onemovie/${data.id}`} className=''>
                <img className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
              </Link>
              <div className="p-2 text-center">
                <a href="#">
                  <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-white/75 dark:text-white">{data.title}</h5>
                </a>
                <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-100/50 dark:text-gray-400">{data.release_date}</p>
              </div>
            </div>

          ))}
        </div>
        <div className='w-full text-center mt-10'>
          {
            totalpage !== page && <button className='text-white border text-secondary hover:bg-slate-800 hover:text-white  p-3 text-base md:text-xl rounded-lg ' onClick={() => setpage(page + 1)}> See more
            </button>
          }
        </div>
      </section>
  );
}
