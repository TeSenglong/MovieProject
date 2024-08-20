import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieAction, searchMovieAction } from '../../features/products/productsAction'

export default function DataTablee() {

    const columns = [
        {
            name: 'ID',
            selector: row => <div>{row.id}</div>,
            sortable:true,
            width:"100px",
            hight:"fit-content",
            
        },
        {
            name: 'Title',
            selector: row => <div>{row.title}</div>,
            sortable:true,
            width:"250px",
        },
        {
            name: 'Poster',
            selector: row => <img className='w-28 h-36' src={`https://image.tmdb.org/t/p/w500${row.poster_path}`} alt={row.title} />,
            width:"250px",
        },
        {
            name: 'Status',
            selector: row => <div >{row.overview}</div>,
            width:"500px",
        },
        {
            name: 'Release Date',
            selector: row => <div>{row.release_date}</div>,
            width:"200px",
        },
    ];
    let handleSubmit = (e) => {
        e.preventDefault()
        // get what user input
        console.log("handle submit click");
    }
    const { movies, status, error } = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const [query ,setquery] = useState("")   
    const data = useState([])

    // useEffect(()=>{
    //     dispatch(fetchMovieAction())
    // },[])
   
    useEffect(()=>{
        if(query == 0){
            console.log('no result')
            dispatch(fetchMovieAction())
        }else{
            dispatch(searchMovieAction(query))
        }
    },[query])
    return (
        <section className='mt-20 w-11/12 m-auto'>

            <DataTable
               columns={columns}
                data={movies && movies}
                pagination
                subHeader
                subHeaderComponent={
                    <form 
                    onSubmit={handleSubmit}
                    class="w-1/2 mx-auto">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input 
                                onChange={(e) => {
                                    console.log(e)
                                    setquery(e.target.value)
                                }}
                                type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
    
                }
            />
        </section>
    )
}
