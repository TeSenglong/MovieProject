import React, { useEffect, useState } from 'react'
import { popularperson } from '../services/products'
import { Loading1 } from '../components/Loading'

export default function Popularpeople() {
    const [loading, setloading]=useState(true)
    const [person, setperson] = useState([])
    useEffect(() => {
        popularperson()
            .then((res) => {
                setperson(res.results)
                setloading(false)
                console.log('personnnn', person)
            })
    }, [])
    return (
        loading ? <Loading1/> :
        <main className='w-11/12 m-auto'>
            <section className='mt-28' >
            <p className='text-secondary text-xl ' >Popular Actor </p>
            <div className=' mt-5 grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-center' >
                {
                    person.map((data,index) => 

                        <div key={index} className="w-auto h-auto bg-slate-800   flex-none mt-5 rounded-lg shadow dark:bg-gray-800">
                            <div className="grid grid-cols-6 p-5 gap-2 h-full items-center justify-center">
                                <img className=" col-span-3 w-20 h-20 sm:w-28 sm:h-28 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48  mr-5 rounded-full   shadow-lg" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt="" />
                                <div className=' col-span-3 flex flex-col xs:gap-2' >
                                    <p className="mb-1 2xl:text-3xl text-xs sm:text-base md:text-xl sm:font-medium text-gray-100 dark:text-white">{data.name}</p>
                                    <p className="text-xs 2xl:text-2xl md:text-sm text-gray-100 dark:text-gray-400">{data.known_for_department}</p>
                                    <p className='text-secondary 2xl:text-xl text-xs md-text-base' > Pop:  {data.popularity}</p>
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
