import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieAction } from '../features/products/productsAction'
import { Link } from 'react-router-dom'
import { initFlowbite } from 'flowbite'

export default function Search() {
    initFlowbite()
    const dispatch = useDispatch()
    const { movies, status, error } = useSelector(state => state.movies)
    const [query, setquery] = useState('')
    let handleSubmit = (e) => {
        e.preventDefault()
        // get what user input
        console.log("handle submit click");
    }
    useEffect(() => {
        dispatch(searchMovieAction(query))
    }, [query])
    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            className="w-1/2 max-w-screen-md mx-auto mt-5 lg:mb-10 lg:mt-10">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        onChange={(e) => {
                            console.log(e)
                            setquery(e.target.value)
                        }}
                        type="search" id="default-search" className="block w-full md:p-4 md:pl-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies....." required />
                    <button type="submit" className="text-white hidden sm:block absolute end-2.5 bottom-1 md:bottom-2.5 bg-primary hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 md:px-4 md:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className='grid grid-cols-2 mt-5 md:10 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-1 sm:gap-4'>
               
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

            </div>
        </div>
    )
}
export function Searching() {
    const dispatch = useDispatch()
    const { movies, status, error } = useSelector(state => state.movies)
    const [query, setquery] = useState("")
    let handleSubmit = (e) => {
        e.preventDefault()
        // get what user input
        console.log("handle submit click");
    }
    useEffect(() => {
        dispatch(searchMovieAction(query))
    }, [query])
    return ( 
            <form
             onSubmit={handleSubmit}
            className="w-1/2 max-w-screen-md mx-auto mb-5 lg:mb-10 lg:mt-10">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input 
                        onChange={(e) => {
                            console.log(e)
                            setquery(e.target.value)
                        }}
                        type="text" id="default-search" className="block w-full md:p-4 md:pl-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies...." required />
                    <button type="submit" className="text-white hidden sm:block absolute end-2.5 bottom-1 md:bottom-2.5 bg-primary hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 md:px-4 md:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
    )
}

