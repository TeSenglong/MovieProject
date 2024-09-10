import React, { useCallback } from 'react'
import { useEffect, useState, useRef } from "react"
import { Loading11, Loading2, Loadinglist } from "../components/Loading"
import { Link, useLocation } from "react-router-dom"
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/small logo.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from 'axios'
import { searchMovieAction } from '../features/products/productsAction'
import { useDispatch, useSelector } from 'react-redux'
import { clearResults } from '../features/products/productsSlice'
import { MovieCard } from '../components/Card'
import { Searching } from '../components/Search'
export default function SearchMovie() {
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(false)
    const [totalpage, settotalpage] = useState(1)
    const [movies, setMovies] = useState([])
    const [pageN, setpage] = useState(1)
    const [hasmore, setHasmore] = useState(false)
    const [query, setquery] = useState("")
    const [qloading, setqloading] = useState(false)
    const dispatch = useDispatch()

    // const { movies, status, error } = useSelector(state => state.movies)
    // const results = useSelector((state)=> state.movies.movies)
    useEffect(() => {
        
        setMovies([]);
        setpage(1); // Reset page number when query changes
      }, [query]);
    
      useEffect(() => {
        if (query === '') {
          fetchGenres(pageN);
        } else {
          fetchMovies(query, pageN);
        }
      }, [pageN, query]);
    
    const fetchMovies = (query, pageN) => {
        // setloading(true);
        setError(false);
        let cancel;
        axios({
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/movie',
          params: {
            api_key: '4113f3ad734e747a5b463cde8c55de42',
            query: query,
            page: pageN,
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
          setMovies(prevMovies => [...prevMovies, ...res.data.results]);
          settotalpage(res.data.total_pages);
          setloading(false);
        }).catch(e => {
          if (axios.isCancel(e)) return;
          setError(true);
        });
        return () => cancel();
      };
    
    const fetchGenres = async (pageN) => {     //fetch data to select genre movies
        // if (selected.length > 0) {
        //     const genreIds = selected.map((genre) => genre.value).join(',');
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&page=${pageN}&sort_by=popularity.desc`);
            const data = await res.json();
            setMovies(prevGenres => [...prevGenres, ...data.results]);
            console.log('genresPages',data)
            settotalpage(data.total_pages)
            // setTimeout(() => {
            //     setloading1(false)
            // }, 1000);
            // console.log('genresmoiveee', data)
        } catch (error) {
            console.error('Error fetching genres:', error);
        
    }}
    const handleSelect = (e) => {
        setquery(e.target.value);
    }

    const closeSearch = () => {
        setMovies([])
        // fetchGenres(pageN)
        setquery('')
        setpage(1)
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        // get what user input
        console.log("handle submit click");
    }

    //   const handleSubmit = (event) => {
    //     event.preventDefault(); // Prevent the default form submission
    //     if (query.trim()) {
    //       setMovies([...movies, query]);
    //       setquery(''); // Clear the input field
    //     }
    //   };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 20 >= document.documentElement.scrollHeight
        ) {
            setpage((prev) => prev + 1);
        }
    }
    const nextPage = () => {
        setpage(pageN + 1)
        if (query) {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }
    return (
        <>
        
            <Helmet>
                <meta charSet='UTF-8' />
                <link rel="shortcut icon" href={logoimg} />
                <title>Mohaori-Search</title>
                <meta name='title' content='About Mohaori' />
                <meta name='description' content='About Demo Movies website មហោរី design from class web-design web20' />
                <meta name='thumbnail' content={thumnail} />
                <meta property="og:title" content="About មហោរី​ Mohaori - movies website" />
                <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
                <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
                <meta property='og:image:width' content="400" />
                <meta property='og:image:height' content='300' />
            </Helmet>

            <main className=' dark:bg-gray-300 bg-gray-900 pb-10 pt-20'>
                <div className='w-4/5 absolute top-0 left-1/2 transform -translate-x-1/2  bg-logo m-auto h-3/5' >
                </div>
                {
                    loading ? <Loadinglist /> :
                        <section className=' h-auto w-11/12 m-auto mt-40 ' >
                            <div className=' relative w-1/2 m-auto items-center lg:mb-10 lg:mt-10'>
                                {/* <Searching /> */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="">
                                    <label for="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input value={query}
                                            onChange={handleSelect}
                                            type="text" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                    </div>
                                </form>
                                <div className='absolute gap-3 flex end-2.5 bottom-2.5' >
                                    {
                                        query &&
                                        <button onClick={closeSearch} className='dark:text-gray-100  p-1 ' >
                                            <svg className='w-3 fill-gray-600 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                                        </button>
                                    }
                                    {/* <button   on type="submit" className="text-white hidden sm:block   bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                                </div>
                            </div>
                            <div className='flex justify-center mt-4 md:mt-4 lg:mt-0 items-center'>
                                <h2 className='text-xl text-secondary dark:text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5 text-center' > movies</h2>
                            </div>
                            <article className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6  gap-1 sm:gap-4'>
                                {movies.map((data, index) => (

                                    <MovieCard key={index} data={data} />
                                ))}




                            </article>


                            <div className='w-full text-center mt-10'>
                                {
                                    totalpage !== pageN && <button className='dark:text-gray-900 border-sky-500 dark:border-gray-800  border text-secondary hover:bg-slate-400 hover:text-gray-900  p-3 text-base md:text-xl rounded-lg ' onClick={nextPage}> See more
                                    </button>
                                }
                            </div>
                        </section>
                }
            </main>
        </>
    );
}

// {movies.map(data => {
//     return <div ref={lastMovie}
//         key={data} className="h-auto transition ease-in-out delay-150 flex-none hover:-translate-y-1 hover:scale-110  duration-300  rounded-lg ">
//         <Link onClick={() => {
//             window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//         }}
//             to={`/onemovie/${data.id}`} className=''>
//             <LazyLoadImage
//                 className="rounded-t-lg "
//                 effect="blur"
//                 wrapperProps={{
//                     // If you need to, you can tweak the effect transition using the wrapper style.
//                     style: { transitionDelay: "1s" },
//                 }}
//                 src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
//                 alt={data.title} />
//         </Link>
//         <div className="p-2 text-center">
//             <a href="#">
//                 <h5 className="mb-2 text-center text-base sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl  font-bold tracking-tight text-gray-300/75 dark:text-sky-900">{data.title}</h5>
//             </a>
//             <p className="mb-3 text-xs sm:text-sm md:text-base  font-normal text-gray-300/50 dark:text-gray-400">{data.release_date}</p>
//         </div>
//     </div>
// })}