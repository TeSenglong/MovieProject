import React, { useEffect, useState } from 'react'
import { getactor } from '../services/products'
import { useParams } from 'react-router-dom'

export default function Actor() {
    const [actor,setactor]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        getactor(id)
        .then((res)=>{
            setactor(res.cast)
            console.log('actorr',actor)
        })
    },[id])
  return (
<>
{
    actor.map((data)=> 

<div className="w-64 bg-slate-500 h-32  flex-none mt-5 rounded-lg shadow dark:bg-gray-800">
    <div className="flex h-full items-center justify-center">
        <img className="w-24 h-24 mr-5 rounded-full   shadow-lg"  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt=""/>
        <div>
        <p className="mb-1 text-xl font-medium text-gray-100 dark:text-white">{data.name}</p>
        <span className="text-sm text-gray-300 dark:text-gray-400">{data.character}</span>
        </div>
    </div>
</div>
    
     )
}
</>

  )

}