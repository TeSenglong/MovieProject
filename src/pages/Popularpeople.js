import React, { useEffect, useState } from 'react'
import { popularperson } from '../services/products'

export default function Popularpeople() {
    const [person, setperson] = useState([])
    useEffect(() => {
        popularperson()
            .then((res) => {
                setperson(res.results)
                console.log('personnnn', person)
            })
    }, [])
    return (

        <main className='w-11/12 m-auto'>
            <section className='mt-28' >
            <p className='text-secondary text-xl ' >Popular Actor </p>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center' >
                {
                    person.map((data,index) => 

                        <div key={index} className="w-64 h-32 sm:w-72 sm:h-36 xl:w-96 xl:h-60 2xl:w-128 2xl:h-64  bg-slate-500   flex-none mt-5 rounded-lg shadow dark:bg-gray-800">
                            <div className="flex h-full items-center justify-center">
                                <img className=" w-20 h-20 sm:w-28 sm:h-28 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52  mr-5 rounded-full   shadow-lg" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt="" />
                                <div className='' >
                                    <p className="mb-1 2xl:text-3xl text-base md:text-xl font-medium text-gray-100 dark:text-white">{data.name}</p>
                                    <p className="text-xs 2xl:text-2xl md:text-sm text-gray-100 dark:text-gray-400">{data.known_for_department}</p>
                                    <p className='text-secondary 2xl:text-xl text-sm md-text-base' > Pop:  {data.popularity}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            </section>
        </main>

    )
}
