import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    loading: false,
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
async (_,{rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
}
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {},
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.errors = null;
                state.loading = true;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
});

const {reducer:genreReducer} = genreSlice;

const genreAction = {
    getAll,
};

export {
    genreReducer,
    genreAction
};