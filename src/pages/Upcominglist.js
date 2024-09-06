import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchMovieAction } from "../features/products/productsAction"
import { Loading1, Loadinglist } from "../components/Loading"
import { Link } from "react-router-dom"
import { Searching } from "../components/Search"
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/small logo.jpg';
import GenreDropdown from "../components/Genres"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { MovieCard } from "../components/Card"
export function Upcominglist() {
    const [movie, setcoming] = useState([])
    const [loading, setloading] = useState(true)
    const [totalpage, settotalpage] = useState(0)
    const [page, setpage] = useState(1)
    useEffect(() => {
        const fetchmovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`)
            return res.json()
                .then((movies) => {
                    settotalpage(movies.totals_pages);
                    setcoming([...movie, ...movies.results]);
                    setTimeout(() => {
                        setloading(false)
                    }, 1500);
                    console.log('totalpages', movies)
                });
        }
        fetchmovie();
    }, [page]);
    const [genresMovie, setGenresMovie] = useState([]); //state use to hold data from (fetchGenres)
    const [selected, getSelected] = useState('');//state use to hold data from onClick (genre.js)
    const [isInitialRender, setIsInitialRender] = useState(true);
    const fetchGenres = async (page) => {     //fetch data to select genre movies
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&with_genres=${selected}&page=${page}&sort_by=popularity.desc`);
            const data = await res.json();
            settotalpage(data.totals_pages);
            setGenresMovie(prevGenres => [...prevGenres, ...data.results]);
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
            getSelected(genreId);//get id to fetch data
            setgenrename(name)//get name
            setpage(1); // Reset to first page on new selection
            setGenresMovie([]); // Clear previous results
        }
    };

    const handleCloseGenres = () => {
        getSelected('');
        setGenresMovie([]); // Clear genre results
        setpage(1);
    };
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 20 >= document.documentElement.scrollHeight
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
                <title>Mohaori-UpcomingMovie</title>
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

                                <div className='flex flex-col z-20 mt-2 sm:mt-10 sm:flex-row flex-wrap gap-2'>
                                    <div className='' >
                                        <GenreDropdown onSelect={handleGenreSelect} />
                                    </div>
                                    {selected && (
                                        <button onClick={handleCloseGenres} className="text-gray-300 z-10  ml-5 h-full hover:bg-sky-600 dark:text-sky-400">
                                            Close Genre
                                        </button>
                                    )}
                                </div>

                            </div>
                            <div className='flex  justify-center mt-2 sm:mt-0 lg:mt-0 items-center'>
                                {
                                    selected ?
                                        <h2 className='text-xl z-10 text-secondary dark:text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5  text-center ' >{genrename}</h2>

                                        : <h2 className='text-xl font-bold z-10 text-secondary dark:text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5 text-center' >UpComing movies </h2>
                                }

                            </div>

                            <article className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6  gap-1 sm:gap-4'>
                                {selected ? (genresMovie.map((data, index) => (
                                    <MovieCard key={index} data={data} />
                                ))) : (movie.map((data, index) => (
                                    <MovieCard key={index} data={data} />
                                )))
                                }
                            </article>
                            <div className='w-full text-center mt-10'>
                                {
                                    totalpage !== page && <button className='dark:text-gray-900 border-sky-500 dark:border-gray-800  border text-secondary hover:bg-slate-400 hover:text-gray-900  p-3 text-base md:text-xl rounded-lg ' onClick={nextpage}> See more
                                    </button>
                                }
                            </div>
                        </section>
                }
            </main>
        </>
    );
}