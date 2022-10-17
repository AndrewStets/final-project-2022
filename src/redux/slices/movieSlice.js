import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: null,
    loading: false,
    errors: null
};

let getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll({page: 1});
            return data.results
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

let getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue})=>{
        try {
            let {data} = await movieService.getById(id);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movies=action.payload
            }),
});

let {reducer:movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getById
};

export {
    movieReducer,
    movieActions
};