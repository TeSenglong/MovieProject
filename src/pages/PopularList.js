import React, { useCallback, useEffect, useRef, useState } from 'react'
import Card, { MovieCard } from '../components/Card';
import { Loading, Loading1, Loadinglist } from '../components/Loading';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieAction, searchMovieAction } from '../features/products/productsAction';
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/small logo.jpg';
import GenreDropdown from '../components/Genres';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PopularMovie } from '../services/products';
const PopularList = () => {
    const [loading, setloading] = useState(true)
    const [loading2, setloading2] = useState(false)
    const [totalpage, settotalpage] = useState(2)
    const [page, setpage] = useState(1)
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const [loading1, setloading1] = useState(false)
    useEffect(() => {

        PopularMovie({ page })
            .then((res) => {
                settotalpage(res.total_pages)
                setMovies(prevGenres => [...prevGenres, ...res.results]);
            }) // if no query get simple data from action
        setTimeout(() => {
            setloading(false)
        }, 1000)

    }, [page, dispatch])
    let handleSubmit = (e) => {
        e.preventDefault()
        // get what user input
        console.log("handle submit click");
    }
    const [genresMovie, setGenresMovie] = useState([]); //state use to hold data from (fetchGenres)
    const [selected, getSelected] = useState('');//state use to hold data from onClick (genre.js)
    const [isInitialRender, setIsInitialRender] = useState(true);


    const fetchGenres = async (page) => {     //fetch data to select genre movies
        try {

            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&with_genres=${selected}&page=${page}&sort_by=popularity.desc`);
            const data = await res.json();
            // settotalpage(data.totals_pages);
            setGenresMovie(prevGenres => [...prevGenres, ...data.results]);
            setTimeout(() => {
                setloading1(false)
            }, 1000);
            console.log('genresmoiveee', data)
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };
    useEffect(() => {
        if (!isInitialRender) {
            fetchGenres(page);
        } else {
            setIsInitialRender(false);
        }
    }, [selected, page]);

    const [genrename, setgenrename] = useState('')//get name of genres from selected

    const handleGenreSelect = (genreId, name) => {
        if (genreId !== selected) {
            // setloading2(true)
            getSelected(genreId);//get id to fetch data
            setgenrename(name)//get name
            setpage(1); // Reset to first page on new selection
            setGenresMovie([]); // Clear previous results
        }
        // setTimeout(()=>{
        //     setloading2(false)
        // },1000)
    };

    const handleCloseGenres = () => {
        getSelected('');
        setGenresMovie([]); // Clear genre results`
    };
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 20 >= document.documentElement.scrollHeight && !loading
        ) {
            setpage((prev) => prev + 1);
        }
    }
    const nextpage = () => {
        setpage(page + 1)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }
    return (
        <>

            <Helmet>
                <meta charSet='UTF-8' />
                <link rel="shortcut icon" href={logoimg} />
                <title>Mohaori-PopularMovie</title>
                <meta name='title' content='About Mohaori' />
                <meta name='description' content='About Demo Movies website មហោរី design from class web-design web20' />
                <meta name='thumbnail' content={thumnail} />
                <meta property="og:title" content="About មហោរី​ Mohaori - movies website" />
                <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
                <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
                <meta property='og:image:width' content="400" />
                <meta property='og:image:height' content='300' />
            </Helmet>
            <main className='dark:bg-gray-300 bg-gray-900 pb-10 pt-20'>
                {
                    loading ? <Loadinglist /> :
                        <section className=' h-auto w-11/12 m-auto sm:mt-32 md:mt-40' >
                            <div className='w-4/5 absolute top-0 left-1/2 transform -translate-x-1/2  bg-logo m-auto h-3/5' >
                            </div>
                            <div className='flex justify-start items-center mt-5 lg:mb-10 lg:mt-10'>
                                {/* <Searching /> */}
                                {/* <form
                                    onSubmit={handleSubmit}
                                    class="w-1/2 mx-auto">
                                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input
                                            onChange={(e) => {
                                                console.log(e)
                                                setquery(e.target.value)
                                            }}
                                            type="text" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                        <button type="submit" class="text-white hidden sm:block  absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                    </div>
                                </form> */}
                                <div className='flex flex-col z-10 mt-2 sm:mt-10 sm:flex-row flex-wrap gap-2'>
                                    <div className='' >
                                        <GenreDropdown onSelect={handleGenreSelect} />
                                    </div>
                                    {selected && (
                                        <button onClick={handleCloseGenres} className="text-gray-300 z-10 ml-5 h-full hover:bg-sky-600 dark:text-sky-400">
                                            Close Genre
                                        </button>
                                    )}
                                </div>

                            </div>
                            <div className='flex  justify-center mt-2 sm:mt-0 lg:mt-0 items-center'>
                                {
                                    selected ?
                                        <h2 className='text-xl z-10 text-secondary dark:text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5  text-center ' >{genrename}</h2>

                                        : <h2 className='text-xl font-bold z-10 text-secondary dark:text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5 text-center' >Popular movies</h2>
                                }

                            </div>

                            {loading1 ? <Loadinglist /> :
                                <article className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6  gap-1 sm:gap-4'>
                                    {selected ? (genresMovie.map((data, index) => (
                                        <MovieCard key={index} data={data} />
                                    ))) : (movies.map((data, index) => (
                                        <MovieCard key={index} data={data} />
                                    )))
                                    }
                                </article>
                            }
                            <div className='w-full text-center mt-10'>
                                {
                                    totalpage !== page && <button className='border border-sky-500 dark:border-gray-800 dark:text-gray-800   text-secondary hover:bg-slate-200 hover:text-gray-800  p-2 text-base md:text-xl rounded-lg ' onClick={nextpage}> See more
                                    </button>
                                }
                            </div>
                        </section>
                }
            </main>
        </>
    )
}
export default PopularList;












{/*                      
                            {query ? (movies.map((data, index) => (
                                    <div key={index} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Link onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                            to={`/onemovie/${data.id}`} className=''>
                                            <img loading='lazy' className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
                                        </Link>
                                        <div className="p-2 text-center">
                                            <a href="#">
                                                <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-gray-300/75 dark:text-white">{data.title}</h5>
                                            </a>
                                            <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-300/50 dark:text-gray-400">{data.release_date}</p>
                                        </div>
                                    </div>
                                ))) : (selected ? (genresMovie.map((data, index) => (
                                    <div key={index} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Link onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                            to={`/onemovie/${data.id}`} className=''>
                                            <img className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
                                        </Link>
                                        <div className="p-2 text-center">
                                            <a href="#">
                                                <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-gray-300/75 dark:text-white">{data.title}</h5>
                                            </a>
                                            <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-300/50 dark:text-gray-400">{data.release_date}</p>
                                        </div>
                                    </div>
                                ))):(movie.map((data, index) => (
                                        <div key={index} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <Link onClick={() => {
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            }}
                                                to={`/onemovie/${data.id}`} className=''>
                                                <img className="rounded-t-lg  " src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
                                            </Link>
                                            <div className="p-2 text-center">
                                                <a href="#">
                                                    <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-gray-300/75 dark:text-white">{data.title}</h5>
                                                </a>
                                                <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-300/50 dark:text-gray-400">{data.release_date}</p>
                                            </div>
                                        </div>
                                    ))
                                )
                                )} */}
