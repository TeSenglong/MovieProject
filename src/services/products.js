import React from 'react'
const BASE_URL ='https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1';

export default async function products() {
    
    const response= await fetch(`${BASE_URL}`)

    return response.json()
}
const  filepath='https://image.tmdb.org/t/p/w500'
export  async function imagefile(){
    const response = await fetch(`${filepath}`)
    return response.json()
}
    
const toprate=' https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1;'
export async function topratemovie() {
    const response = await fetch(`${toprate}`)
    return response.json()
}