import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchMovieAction } from "../features/products/productsAction"
import { Loading1, Loadinglist } from "../components/Loading"
import { Link } from "react-router-dom"
import { Searching } from "../components/Search"
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/iconlogo.png';
export function Nowplayinglist() {

    const dispatch = useDispatch()
    const { movies, status, error } = useSelector(state => state.movies)
    const [query, setquery] = useState("")
    useEffect(() => {
        dispatch(searchMovieAction(query))
    }, [query])


    const [movie, setmovie] = useState([])
    const [loading, setloading] = useState(true)
    const [totalpage, settotalpage] = useState(0)
    const [page, setpage] = useState(1)
    useEffect(() => {
        const fetchmovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`)
            return res.json()
                .then((movies) => {
                    settotalpage(movies.totals_pages);
                    setmovie([...movie, ...movies.results]);
                    setTimeout(() => {
                        setloading(false)
                    }, 1500);
                    console.log('totalpages', movies)
                });
        }
        fetchmovie();
    }, [page]);
    return (
        <>
            <Helmet>
                <meta charSet='UTF-8' />
                <link rel="shortcut icon" href={logoimg} />
                <title>Mohaori-NowPlayingMovie</title>
                <meta name='title' content='About Mohaori' />
                <meta name='description' content='About Demo Movies website មហោរី design from class web-design web20' />
                <meta name='thumbnail' content={thumnail} />
                <meta property="og:title" content="About មហោរី​ Mohaori - movies website" />
                <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
                <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
                <meta property='og:image:width' content="400" />
                <meta property='og:image:height' content='300' />
                <meta property="og:url" content=" https://movieproject-ashen.vercel.app/Mohaori/thumnail.png " />
                <meta property="og:type" content="Movies-project" />
                <meta property='fb:app_id' content='1226113552034640' />
            </Helmet>
            <main className='dark:bg-gray-300 bg-gray-900 pb-10 pt-20'>
                {
                    loading ? <Loadinglist /> :
                        <section className=' h-auto w-11/12 m-auto ' >
                            <Searching />
                            <h2 className='text-xl text-secondary dark:text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5 text-center pb-10' >NowPlaying List</h2>
                            <article className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-1 sm:gap-4'>
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
                            </article>
                            <div className='w-full text-center mt-10'>
                                {
                                    totalpage !== page && <button className='border text-secondary dark:text-gray-600 hover:bg-slate-800 hover:text-white  p-3 text-base md:text-xl rounded-lg ' onClick={() => setpage(page + 1)}> See more
                                    </button>
                                }
                            </div>
                        </section>
                }
            </main>
        </>
    );
}

