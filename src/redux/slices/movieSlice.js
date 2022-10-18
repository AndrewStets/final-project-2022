import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import {movieService} from "../../services";




const initialState = {
    movies: [],
    currentMovies: null,
    loading: false,
    errors: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies = action.payload;
                state.errors = null;
                state.loading = true;
            })
            .addCase(getAll.pending,(state,action)=> {
                state.loading = true;
            })
            .addDefaultCase((state,action)=>{
                const [pathElement] = action.type.split('/').splice(-1);
                if (pathElement === 'reject'){
                    state.errors = action.payload;
                    state.loading = false;
                }
            })


});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll
};

export {
    movieActions,
    movieReducer
}

