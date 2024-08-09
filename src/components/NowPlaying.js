import React, { useEffect, useState } from 'react'
import { nowplaying } from '../services/products'
import { Link } from 'react-router-dom'

export default function NowPlaying() {
    const [movie, setmovie] = useState([])
    useEffect(() => {
        nowplaying()
            .then((res) => {
                setmovie(res.results)
                console.log('nowplaing', movie)

            })
    }, [])
    return (
        <>
            {
                movie.map((moviee, index) =>
                    <div className="w-36 h-auto sm:w-44 md:w-52 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/onemovie/${moviee.id}`}>
                            <img className="rounded-t-lg h-52 sm:h-64 md:h-72 w-full" src={`https://image.tmdb.org/t/p/w500${moviee.poster_path}`} alt="" />
                        </Link>
                        <div className="text-center">
                            <a href="#">
                                <h5 className="mb-2 text-xs sm:text-sm md:text-base mt-2  tracking-tight text-gray-100 dark:text-white">{moviee.title}</h5>
                            </a>
                        </div>
                    </div>
                )
            }
        </>
    )
}
