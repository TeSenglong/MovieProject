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
import Select from 'react-select';
import { genrekeys, Upcomingg } from "../services/products"
import makeAnimated from 'react-select/animated';
export function Upcominglist() {
    const animatedComponents = makeAnimated();
    const [loading, setloading] = useState(true)
    const [totalpage, settotalpage] = useState(2)
    const [page, setpage] = useState(1)
    const [movies, setMovies] = useState([])
    const [loading1, setloading1] = useState(false)



    const [selected, getSelected] = useState('');//state use to hold data from onClick (genre.js)
    const fetchGenres = async (page) => {     //fetch data to select genre movies
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&with_genres=${selected.map((genre) => genre.value).join(',')}&page=${page}&sort_by=popularity.desc`);
            const data = await res.json();
            setMovies(prevGenres => [...prevGenres, ...data.results]);
            console.log('genresPages',data)
            setTimeout(() => {
                setloading1(false)
            }, 1000);
            // console.log('genresmoiveee', data)
        } catch (error) {
            console.error('Error fetching genres:', error);
        
    }}
    const fetchPopular = ({page}) => {
        Upcomingg({ page })
            .then((res) => {
                settotalpage(res.total_pages)
                setMovies(prevGenres => [...prevGenres, ...res.results]);
                console.log( 'PopularMovies', res)
            }) // if no query get simple data from action
        setTimeout(() => {
            setloading(false)
        }, 1000)

    }
    useEffect(() => {
        if (selected) {
            fetchGenres(page);
        } else if(selected === '') {
            fetchPopular({page})
        }
    }, [selected, page]);
    
    
    const [genres, setGenres] = useState([]);
    useEffect(() => {
      genrekeys()
        .then((res) => {
          setGenres(res.genres);
        //   console.log('genress search', genres)
        })
    }, [])   
  const handleGenreChange = (selectedOption,actionMeta) => {
    getSelected(selectedOption)
    console.log('selectopption',selectedOption)
    console.log('selected',selected)
    setpage(1);
    setMovies([])
    if(actionMeta.action === 'clear'){
        getSelected('')
        console.log('clear',actionMeta)
        setpage(1)
        setMovies([])
    }
    else if(selectedOption === ''){
    console.log('clear multi',selectedOption)
    setMovies([])
        setpage(1)
    }
  }
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 200 >= document.documentElement.scrollHeight && !loading
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
                                <Select
                                value={selected}
                                    options={genres.map((genre) => ({ value: genre.id, label: genre.name }))}
                                    onChange={handleGenreChange}
                                    placeholder="Select a genre"
                                    isMulti
                                    components={animatedComponents}
                                    name="genre movie"
                                    isClearable
                                    className='md:w-1/2 w-4/5  m-auto p-3'
                                />
                            </div>
                            <div className='flex  justify-center mt-2 sm:mt-0 lg:mt-0 items-center'>
                                {
                                    selected ?
                                        <h2 className='text-xl z-10 text-secondary dark:text-sky-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5  text-center  ' >{selected.map((genre) => genre.label)}</h2>

                                        : <h2 className='text-xl font-bold z-10 text-secondary dark:text-sky-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mb-10 mb-5 text-center' >UpComing movies</h2>
                                }

                            </div>


                            {loading1 ? <Loadinglist /> :
                                <article className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6  gap-1 sm:gap-4'>
                                    {
                                     (movies.map((data, index) => (
                                        <MovieCard key={index} data={data} />
                                    )))
                                    }
                                </article>
                            }
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