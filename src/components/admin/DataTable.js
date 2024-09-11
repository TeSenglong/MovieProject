import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieAction, searchMovieAction } from '../../features/products/productsAction'

export default function DataTablee() {

    const columns = [
        {
            name: 'ID',
            selector: row => <div>{row.id}</div>,
            sortable: true,
            width: "100px",
            hight: "fit-content",


        },
        {
            name: 'Title',
            selector: row => <div className='w-auto' >{row.title}</div>,
            sortable: true,
            maxWidth: '200px',
            wrap: true,

        },
        {
            name: 'Release Date',
            selector: row => <div>{row.release_date}</div>,
            width: "150px",
            sortable: true,

        },
        {
            name: 'Poster',
            selector: row => <img className='w-auto h-36' src={`https://image.tmdb.org/t/p/w500${row.poster_path}`} alt={row.title} />,
            width: "150px",
            sortable: true,
        },
        {
            name: 'OverView',
            selector: row => <div className='flex flex-wrap' >{row.overview}</div>,
            width: "500px",
            sortable: true,
            wrap: true

        },
        {
            name: 'Popularity',
            selector: row => <div>{row.popularity}</div>,
            width: "150px",
            sortable: true,

        },
    ];
    createTheme('solarized', {
        text: {
            primary: '#ffffff ',
            secondary: '#2aa198',
        },
        background: {
            default: '#111827',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#073642',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');
    createTheme('dark', {
        background: {
            default: 'transparen',
        }
    });
    let handleSubmit = (e) => {
        e.preventDefault()
        // get what user input
        console.log("handle submit click");
    }
    const { movies, totalPages, status, error } = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const [query, setquery] = useState("")
    const data = useState([])
    const [page, setpage] = useState(1)
    // useEffect(()=>{
    //     dispatch(fetchMovieAction())
    // },[])

    useEffect(() => {
        if (query === '') {
            console.log('no result')
            dispatch(fetchMovieAction({ page }))
            console.log(movies)
        } else {
            dispatch(searchMovieAction({ page, query }))
        }
    }, [query, page])
    const nextpage = () => {
        setpage(page + 1)
    }
    return (
        <article className='pt-20 p-10 m-auto'>
            <DataTable
                columns={columns}
                data={movies}
                pagination
                style={{ overflow: 'wrap' }}
                onChangePage={nextpage}
                onChangeRowsPerPage={movies}
                paginationTotalRows={totalPages}
                paginationServer
                subHeader
                theme='solarized'
                // paginationComponent={CustomMaterialPagination}
                subHeaderComponent={
                    <form
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
                                type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search............." required />
                        </div>
                    </form>

                }
            />
        </article>
    )
}
