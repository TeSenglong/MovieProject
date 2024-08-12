import React, { useEffect, useState } from 'react'
import products from '../services/products';
import Card from '../components/Card';
import { Loading, Loading1 } from '../components/Loading';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const [movie, setmovie] = useState([]);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        products()
            .then((res) => {
                setmovie(res.results)
                setloading(false)
                console.log('loading',loading)
            })
    }, [])
    return (
        loading ? <Loading1/> :
        <section className=' h-auto w-11/12 m-auto  pt-20' >
            <h2 className='text-xl text-secondary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5' >Popp List</h2>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  xs:gap-1 sm:gap-4'>

                { movie.map((data, index) => (
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
        </section>
    )
}
export default MovieList;