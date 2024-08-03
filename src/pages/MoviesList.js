import React, { useEffect, useState } from 'react'
import products from '../services/products';
import Card from '../components/Card';

const MovieList = () =>{
    const [movie, setmovie]=useState([]);
    useEffect(()=>{
        products()
        .then((res)=>{
            setmovie(res.results)
            console.log(movie)
        })
    },[])
    return(
        <>
        {movie.slice(0,10).map((movie, index)=>(
            <Card
            key={index}
            data={movie}
            />
        ))}
        </>
    )
}
export default MovieList;