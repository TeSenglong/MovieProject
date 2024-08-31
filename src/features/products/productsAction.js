import { asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { API_key, BASE_URL } from '../api'

export const searchMovieAction = createAsyncThunk('/movies/fetctmovies', async (query) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie${API_key}&query=${encodeURIComponent(query)}`)
        const data = await res.json()
        // console.log('data th8ujnk',data.results)
        return data.results
    } catch (error) {
        return Promise.resolve(error)
    }
})

export const fetchMovieAction = createAsyncThunk('/movies/fetchmoviess',async ({page}) =>{
    try{
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie${API_key}&page=${page}`)
        const data = await res.json()
        // console.log('discover' ,data.results)
        return data.results
    }catch (error){
        return Promise.resolve(error)
    }
})
export const fetchMovieActionPopular = createAsyncThunk('/movies/fetchmoviess',async (page) =>{
    try{
        const res = await fetch(`${BASE_URL}/movie/popurlar${API_key}&language=en-US&page=${page}`)
        const data = await res.json()
        console.log('discover' ,data.results)
        return data.results
    }catch (error){
        return Promise.resolve(error)
    }
})