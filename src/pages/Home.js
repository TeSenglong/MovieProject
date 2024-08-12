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
import { Link } from 'react-router-dom';

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
    loading ? <Loading/> :
        <main className='bg-gray-900'>
                <MainContent/>   
                <div className='w-11/12 m-auto mb-5' >
            <h2 className='text-2xl mt-5 text-white' >Popular Movies</h2>
                </div>
            <section className='w-11/12 m-auto ' >
                    <div className='hide-scrollbar gap-2' >
                    <PopularSwiper />
                    </div>
                    <div id="pagination_page_1" data-next-page="2" data-current-page="1" class="pagination infinite background_color light_blue">
      <div class="loading_wrapper hide">
        <div class="ball-scale-multiple loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p class="load_more"><a className=" text-white no_click load_more" data-next-page="2" data-current-page="1" href="/movie?page=2">Load More</a></p>
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
