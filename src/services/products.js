
const BASE_URL ='https://api.themoviedb.org/3';
const API_key = '?api_key=4113f3ad734e747a5b463cde8c55de42'

export default async function products() {  
    const response= await fetch(`${BASE_URL}/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
    return response.json()
}
export async function productsid(id) {  
    const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
    return response.json()
}
const toprate=' https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1;'
export async function topratemovie() {
    const response = await fetch(`${toprate}`)
    return response.json()
}

const IDproducts='https://api.themoviedb.org/3/movie/76600/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US'
export async function getOneMovie(id){
const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
return response.json()
}
export async function getactor(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=4113f3ad734e747a5b463cde8c55de42&page=1`)
    return res.json()
}
export async function nowplaying() {
    const res= await fetch(`${BASE_URL}/movie/now_playing${API_key}&language=en-US&page=1`)
    return res.json()
}
export async function upcoming() {
    const res= await fetch(`${BASE_URL}/movie/upcoming${API_key}&language=en-US&page=1`)
    return res.json()
}