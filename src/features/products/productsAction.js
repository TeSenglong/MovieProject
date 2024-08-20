import { asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { API_key, BASE_URL } from '../api'

export const searchMovieAction = createAsyncThunk('/movies/fetctmovies', async (query) => {
    try {
        const res = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=4113f3ad734e747a5b463cde8c55de42`)
        const data = await res.json()
        console.log('data th8ujnk',data.results)
        return data.results
        
    } catch (error) {
        return Promise.resolve(error)
    }
})

export const fetchMovieAction = createAsyncThunk('/movies/fetchmoviess',async (data) =>{
    try{
        const res = await fetch(`${BASE_URL}/discover/movie${API_key}`)
        const data = await res.json()
        console.log('discover' ,data.results)
        return data.results
    }catch (error){
        return Promise.resolve(error)
    }
})