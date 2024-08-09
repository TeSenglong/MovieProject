import React, { useEffect, useState } from 'react'
import MovieList from './MoviesList'
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

export default function Home() {
    const [loading, setloading]=useState(true)
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
    // loading ? <Loading/> :
        <main className='bg-gray-900'>
                <MainContent/>   
            <h2 className='text-2xl ml-10 mt-5 text-white mb-2' >Popular Movies</h2>
            <section className=' ' >
                <div className='w-11/12  hide-scrollbar m-auto gap-2'>
                    <div className='flex flex-nowrap mt-10 gap-2' >
                    <PopularSwiper />
                    </div>
                </div>
            </section>
            <h2 className='text-2xl ml-10 mt-5 text-white mb-2 ' >Top Rate Movies</h2>
            <section className=' ' >
                <div className='w-11/12  hide-scrollbar m-auto gap-2'>
                    <div className='flex flex-nowrap mt-10 gap-2' >
                        <ToprateMovie />
                    </div>
                </div>
            </section>
        </main>
}
</>

    )
}
