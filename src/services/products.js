
const BASE_URL ='https://api.themoviedb.org/3';
const API_key = '?api_key=4113f3ad734e747a5b463cde8c55de42';
const img='https://image.tmdb.org/t/p/';
export default async function products() {  
    const response= await fetch(`${BASE_URL}/movie/popular${API_key}&language=en-US&page=1`)
    return response.json()
}
export async function movieid(id) {  
    const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
    return response.json()
}
// const toprate=' https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1;'
export async function topratemovie() {
    const response = await fetch(`${BASE_URL}/movie/top_rated${API_key}&language=en-US&page=1`)
    return response.json()
}

const IDproducts='https://api.themoviedb.org/3/movie/76600/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US'

export async function getOneMovieVideo(id){
const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
return response.json()
}
export async function getactor(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=4113f3ad734e747a5b463cde8c55de42&page=1`)
    return res.json()
}
export async function getactorcredits(id){
    const res = await fetch(`${BASE_URL}/person/${id}/movie_credits${API_key}`)
    return res.json()
}
export async function personalactor(id){
    const res = await fetch (`${BASE_URL}/person/${id}${API_key}`)
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
export async function popularperson() {
    const res = await fetch(`${BASE_URL}/person/popular${API_key}&language=en-US&page=1`)
    return res.json()
}
export async function trending(){
    const res = await fetch(`${BASE_URL}/trending/movie/week${API_key}`)
    return res.json()
}
export async function videoid(id) {
        const res = await fetch(`${BASE_URL}/movie/${id}/videos${API_key}`)
        return res.json()
}
export async function discoverMovies() {
    const res = await fetch(`${BASE_URL}/discover/movie${API_key}`)
    return res.json()
}

export async function  genrekeys() {
    const res = await fetch(`${BASE_URL}/genre/movie/list${API_key}`)
    return res.json()
}