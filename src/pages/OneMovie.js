import React, { useEffect, useState } from 'react'
import { getOneMovie } from '../services/products'
import { useParams } from 'react-router-dom'


export default function OneMovie() {
  const [onemovie , setonemovie]=useState({})
  const {id}=useParams()
  useEffect(()=>{
    getOneMovie(id)
    .then((res)=>{
      setonemovie(res.results)
    })
  })
  return (
    <>
        <h1>{onemovie.name}</h1>
        <p>{onemovie.site}</p>
    
    </>
  )
}
