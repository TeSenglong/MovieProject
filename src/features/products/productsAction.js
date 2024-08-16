import { asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { API_key, BASE_URL } from '../api'

export const productsAction = createAsyncThunk('/movies/fetctmovies', async (query) => {
    try {
        const res = await fetch(`${BASE_URL}/search/movie${API_key}&&query=${query}`)
        const data = await res.json()
        return data
    } catch (error) {
        return Promise.resolve(error)
    }
})