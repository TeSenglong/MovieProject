import { asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { API_key, BASE_URL } from '../api'

export const searchMovieAction = createAsyncThunk('/movies/fetctmovies', async ({query,page}) => {
    try {
    
        const res = await fetch(`https://api.themoviedb.org/3/search/movie${API_key}&query=${encodeURIComponent(query)}&page=${page}`)
        const data = await res.json()
        console.log('data th8ujnk',data)
        console.log('data.results',data.results,'data.total_pages',data.total_pages)
        return {
            movies:data.results,
            totalPages:data.total_pages,
        }

    } catch (error) {
        return Promise.resolve(error)
    }
})

export const fetchMovieAction = createAsyncThunk('/movies/fetchmoviess',async ({page}) =>{
    try{
        const res = await fetch(`${BASE_URL}/discover/movie${API_key}&page=${page}`)
        const data = await res.json()
        console.log('discover' ,data)
        // console.log('data.results',data.results,'data.total_pages',data.total_pages)
        return {
            movies:data.results,
            totalPages:data.total_pages,
        }
    }catch (error){
        return Promise.resolve(error)
    }
})
export const Nowplayingfetch = createAsyncThunk('/movie/now_playing',async ({page}) =>{
    try{
        const res = await fetch(`${BASE_URL}/movie/now_playing${API_key}&language=en-US&page=${page}`)
        const data = await res.json()
        // console.log('nowplayhing' ,data.results)
        return data.results
    }catch (error){
        return Promise.resolve(error)
    }
})
export const TopRatefetch = createAsyncThunk('/movie/TopRate',async ({page}) =>{
    try{
        const res = await fetch(`${BASE_URL}/movie/top_rated${API_key}&language=en-US&page=${page}`)
        const data = await res.json()
        console.log('TopRateplayhing' ,data.results)
        return data.results
    }catch (error){
        return Promise.resolve(error)
    } 
})
export const trendingfetch = createAsyncThunk('/movie/Trending',async ({page}) =>{
    try{
        const res = await fetch(`${BASE_URL}/trending/movie/week${API_key}&language=en-US&page=${page}`)
        const data = await res.json()
        // console.log('tredingplayhing' ,data.results)
        return data.results
    }catch (error){
        return Promise.resolve(error)
    }
})