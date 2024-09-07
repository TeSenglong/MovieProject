import React, { useEffect, useRef, useState } from 'react'
// import MovieList from './PopularList'
import products, { imagefile } from '../services/products';
import PopularSwiper from '../components/PopularSwiper';
import ToprateMovie from '../components/ToprateMovie';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MainContent from '../components/MainContent';
import { Loading } from '../components/Loading';
import { Link } from 'react-router-dom';
import Search, { Searching } from '../components/Search';
import Trending from '../components/Trending';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Helmet } from 'react-helmet';
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/small logo.jpg';
export default function Home() {
    const [loading, setloading] = useState(true)
    const [movie, setmovie] = useState([]);
    useEffect(() => {

        Aos.init({
        })
        products()
            .then((res) => {
                setmovie(res.results)
                setloading(false)
                console.log('nananan', movie.poster_path)
            })
    }, [])
    return (
        <>
            <Helmet>
                <meta charSet='UTF-8' />
                <link rel="shortcut icon" href={logoimg} />
                <title>Mohaori</title>
                <meta name='title' content='Movies website' />
                <meta name='description' content='Demo Movies website មហោរី design from class web-design web20' />
                <meta name='thumbnail' content={thumnail} />
                <meta property="og:title" content="មហោរី​ Mohaori - movies website" />
                <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
                <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
                <meta property="og:url" content=" https://movieproject-ashen.vercel.app/Mohaori/thumnail.png " />
                <meta property="og:type" content="Movies-project" />
                <meta property='fb:app_id' content='1226113552034640' />
            </Helmet>
            <main className='bg-gray-900 contianer dark:bg-gray-300 '>
                <MainContent />
                <div className='w-11/12 m-auto mb-5 ' >
                    <Search />
                    {/* <Searching/> */}
                </div>

                <section className=' w-11/12 m-auto ' >
                    <h2 className='text-2xl md:text-3xl text-center mt-5 text-secondary dark:text-gray-900 reveal font-medium' >Popular Movies</h2>
                    <div
                        className=' mt-5 md:mt-10 gap-2' >
                        <PopularSwiper />
                    </div>
                    <div className='flex  w-11/12 sm:w-full m-auto justify-end'>
                        <Link onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}
                            to='/popularlist' className='text-stone-500 hover:text-sky-500'><u>see more</u></Link>
                    </div>
                </section>
                <section className='' >
                    <h2 className='text-2xl md:text-3xl text-center w-11/12 m-auto mt-5 text-secondary dark:text-gray-900 font-medium' >TopRate Movies</h2>
                    <div
                        className='w-11/12   m-auto  pt-5 md:pt-10 gap-2' >
                        <ToprateMovie/>
                    </div>

                    <div className='flex w-11/12 m-auto justify-end'>
                        <Link onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }} to='/topratelist' className='text-stone-500 hover:text-sky-500'><u>see more</u></Link>
                    </div>
                </section>
                <section className='' >
                    <h2 className='text-secondary  md:text-3xl text-center mt-5 w-11/12 m-auto text-2xl dark:text-gray-900 font-medium '>Trending movies</h2>
                    <div
                        className='w-11/12 pt-5 md:pt-10   m-auto gap-2' >
                        <Trending />
                    </div>
                    <div className='flex w-11/12 m-auto pb-1 justify-end'>
                        <Link onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}
                            to='/trendinglist' className='text-stone-500 hover:text-sky-500'><u>see more</u></Link>
                    </div>
                </section>
            </main>
        </>

    )
}
