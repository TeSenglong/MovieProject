import React, { useEffect, useState } from 'react'
import { videoid } from '../services/products'
import { useParams } from 'react-router-dom'

export default function Iframe() {
    const [movie,setmovie]=useState([])
    const {id}= useParams()
    useEffect(()=>{
        videoid(id)
        .then((res)=>{
            setmovie(res.results)
            console.log('iframmeee videoo',movie)
        })
    },[])
  return (
    <div>
            <button onClick={} >

            </button>
    </div>
  )
}
