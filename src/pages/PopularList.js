import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Loading, Loading1 } from '../components/Loading';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import { popularlist } from '../services/products';
import Search, { Searching } from '../components/Search';
import { searchMovieAction } from '../features/products/productsAction';

const PopularList = () => {
    const [movie, setmovie] = useState([]);
    const [loading, setloading] = useState(true)
    const [totalpage, settotalpage] = useState(0)
    const [page, setpage] = useState(1)

    const dispatch = useDispatch()
    const {movies,status,error}=useSelector(state =>state.movies)
    const [query,setquery]=useState("")
    useEffect(()=>{
        dispatch(searchMovieAction(query))
    },[query])

    useEffect(() => {
            const fetchmovie = async () => {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`)
                    return res.json()
                    .then((movies) => {
                        settotalpage(movies.totals_pages);
                        setmovie([...movie,...movies.results]);
                        setloading(false);
                        console.log('totalpages',movies)
                    });
            }
            fetchmovie();
    }, [page]);
    return (
        loading ? <Loading1 /> :
            <section className=' h-auto w-11/12 m-auto  pt-20' >
          <Searching/>
                <h2 className='text-xl text-secondary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5' >Popular movies</h2>
              
                <div className='grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-1 sm:gap-4'>
                    {movies.map((data, index) => (
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
                </div>
                
                <div className='w-full text-center mt-10'>   
                    {
                        totalpage !== page && <button className='text-white border text-secondary hover:bg-slate-800 hover:text-white  p-3 text-base md:text-xl rounded-lg ' onClick={() => setpage(page + 1)}> See more
                    </button>
                    }  
                </div>
            </section>
    )
}
export default PopularList;