import React, { useEffect, useState } from 'react'
import MovieList from './PopularList'
import products, { imagefile } from '../services/products';
import PopularSwiper from '../components/PopularSwiper';
import ToprateMovie from '../components/ToprateMovie';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MainContent from '../components/MainContent';
import { Loading } from '../components/Loading';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

export default function Home() {
    const [loading, setloading] = useState(true)
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        products()
            .then((res) => {
                setmovie(res.results)
                setloading(false)
                console.log('nananan', movie.poster_path)
            })
    }, [])
    return (
        <>
            {
                loading ? <Loading /> :
                    <main className='bg-gray-900'>
                        <MainContent />
                        <div className='w-11/12 m-auto mb-5' >
                            <Search />
                        </div>
                        <section className='w-11/12 m-auto ' >
                            <h2 className='text-2xl mt-5 text-secondary' >Popular Movies</h2>
                            <div className='hide-scrollbar mt-10 gap-2' >
                                <PopularSwiper />
                            </div>
                            <div className='flex w-full pt-5 justify-end'>
                            <Link to='/popularlist' className='text-stone-500 hover:text-stone-300'>see more</Link>
                            </div>
                        </section>
                        <section className=' ' >
                            <h2 className='text-2xl w-11/12 m-auto mt-5 text-secondary ' >Top Rate Movies</h2>
                            <div className='w-11/12  hide-scrollbar m-auto gap-2'>
                                <div className='flex flex-nowrap mt-10 gap-2' >
                                    <ToprateMovie />
                                </div>
                            </div>
                            <div className='flex w-11/12 m-auto pt-5 justify-end'>
                            <Link to='/topratelist' className='text-stone-500 hover:text-stone-300'>see more</Link>
                            </div>  
                        </section>
                    </main>
            }
        </>

    )
}
