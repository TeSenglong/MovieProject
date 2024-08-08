import React, { useEffect, useState } from 'react'
import products from '../services/products';
import Card from '../components/Card';
import { Loading } from '../components/Loading';

const MovieList = () =>{
    const [movie, setmovie]=useState([]);
    const [loading, setloading]=useState(true)
    useEffect(()=>{
        products()
        .then((res)=>{
            setmovie(res.results)
            setloading(false)
            console.log(movie)
        })
    },[])
    return(
        <>
        {loading ? <Loading/> :  movie.slice(0,10).map((movie, index)=>(
            <Card
            key={index}
            data={movie}
            />
        ))}
        </>
    )
}
export default MovieList;