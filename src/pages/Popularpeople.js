import React, { useEffect, useState } from 'react'
import { popularperson } from '../services/products'
import { Loading1, Loading22 } from '../components/Loading'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/small logo.jpg';
export default function Popularpeople() {
    const [loading, setloading] = useState(true)
    const [person, setperson] = useState([])
    const [totalpage, settotalpage] = useState(0)
    const [page, setpage] = useState(1)
    useEffect(() => {
        const popularpeople = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`)
            return res.json()
                .then((movies) => {
                    settotalpage(movies.totals_pages);
                    setperson([...person, ...movies.results]);
                    setTimeout(() => {
                        setloading(false)
                    }, 1500);
                    console.log('totalpages', movies)
                });
        }
        popularpeople();
    }, [page]);
    //     popularperson()
    //         .then((res) => {
    //             setperson(res.results)
    //             setloading(false)
    //             console.log('personnnn', person)
    //         })
    // }, [])
    return (
        <>
            <Helmet>
                <meta charSet='UTF-8' />
                <link rel="shortcut icon" href={logoimg} />
                <title>Mohaori-popularPeople</title>
                <meta name='title' content='About Mohaori' />
                <meta name='description' content='About Demo Movies website មហោរី design from class web-design web20' />
                <meta name='thumbnail' content={thumnail} />
                <meta property="og:title" content="About មហោរី​ Mohaori - movies website" />
                <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
                <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
                <meta property='og:image:width' content="400" />
                <meta property='og:image:height' content='300' />
            </Helmet>
            <main className='bg-gray-900 dark:bg-gray-300 pt-20 pb-10'>
                {
                    loading ? <Loading22 /> :
                        <section className='w-11/12 m-auto' >
                            <p className='text-secondary pt-5 text-xl md:text-3xl font-bold dark:text-gray-900 ' >Popular Actor </p>
                            <article className=' mt-5 grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-center' >
                                {
                                    person.map((data, index) =>
                                        <div key={index} className="w-auto h-auto bg-slate-800   flex-none mt-5 rounded-lg shadow dark:bg-gray-800">
                                            <Link onClick={() => {
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            }}
                                                to={`/creditsactor/${data.id}`}>
                                                <div className="grid grid-cols-6 p-5 gap-2 h-full items-center justify-center">
                                                    <img className=" col-span-3 w-20 h-20 sm:w-28 sm:h-28 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48  mr-5 rounded-full   shadow-lg" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt="" />
                                                    <div className=' col-span-3 flex flex-col xs:gap-2' >
                                                        <p className="mb-1 2xl:text-3xl text-xs sm:text-base md:text-xl sm:font-medium text-gray-100 dark:text-white">{data.name}</p>
                                                        <p className="text-xs 2xl:text-2xl md:text-sm text-gray-100 dark:text-gray-400">{data.known_for_department}</p>
                                                        <p className='text-secondary 2xl:text-xl text-xs md-text-base' > Pop:  {data.popularity}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </article>
                            <div className='w-full text-center mt-10 pb-10'>
                                {
                                    totalpage !== page && <button className='dark:text-gray-500 text-white border text-secondary hover:bg-slate-800 hover:text-white  p-3 text-base md:text-xl rounded-lg ' onClick={() => setpage(page + 1)}> See more
                                    </button>
                                }
                            </div>
                        </section>
                }
            </main>
        </>

    )
}
