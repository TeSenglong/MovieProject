import { asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { API_key, BASE_URL } from '../api'

export const searchMovieAction = createAsyncThunk('/movies/fetctmovies', async (query) => {
    try {
        const res = await fetch(`${BASE_URL}/search/movie${API_key}&&query=${query}`)
        const data = await res.json()
        console.log('data th8ujnk',data.results)
        return data.results
        
    } catch (error) {
        return Promise.resolve(error)
    }
})