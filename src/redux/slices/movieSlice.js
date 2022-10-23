import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    loading: false,
    errors: null,
    // movieName: {}
    movieName1:{}
};

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

// const getMovieName = createAsyncThunk(
//     'movieSlice/getMovieName',
//     async ({name}, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.searchMovie(name);
//             return data;
//         }catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );

const getMovieByName = createAsyncThunk(
    'movieSlice/getMovieByName',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie1(query, page);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const getMovieByGenre = createAsyncThunk(
    'genreSlice/getMovieByGenre',
    async ({with_genre,page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovie(with_genre,page);
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
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.errors = null;
                state.loading = true;
            })
            .addCase(getAllMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMovieByGenre.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.errors = null;
                state.loading = true;
            })
            .addCase(getMovieByGenre.pending, (state, action) => {
                state.loading = true;
            })
            // .addCase(getMovieName.fulfilled, (state, action) => {
            //     state.movieName = action.payload;
            //     state.errors = null;
            //     state.loading = true;
            // })
            // .addCase(getMovieName.pending, (state, action) => {
            //     state.loading = action.payload;
            // })
            .addCase(getMovieByName.fulfilled, (state, action) => {
                state.movieName1 = action.payload;
                state.errors = null;
                state.loading = true;
            })
            .addCase(getMovieByName.pending, (state, action) => {
                state.movieName1 = action.payload;
            })
            .addDefaultCase((state, action) => {
                const [pathElement] = action.type.split('/').splice(-1);
                if (pathElement === 'reject') {
                    state.errors = action.payload;
                    state.loading = false;
                }
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAllMovies,
    getMovieByGenre,
    // getMovieName
    getMovieByName
};

export {
    movieActions,
    movieReducer
};










// const initialState = {
//     movies: [],
//     currentMovies: null,
//     loading: false,
//     errors: null
// };
//
// const getAll = createAsyncThunk(
//     'movieSlice/getAll',
//     async ({page}, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getAll(page);
//             return data;
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );
//
//
//
// const movieSlice = createSlice({
//     name: 'movieSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder =>
//         builder
//             .addCase(getAll.fulfilled,(state,action)=>{
//                 state.movies = action.payload;
//                 state.errors = null;
//                 state.loading = true;
//             })
//             .addCase(getAll.pending,(state,action)=> {
//                 state.loading = true;
//             })
//             .addDefaultCase((state,action)=>{
//                 const [pathElement] = action.type.split('/').splice(-1);
//                 if (pathElement === 'reject'){
//                     state.errors = action.payload;
//                     state.loading = false;
//                 }
//             })
//
//
// });
//
// const {reducer: movieReducer} = movieSlice;
//
// const movieActions = {
//     getAll
// };
//
// export {
//     movieActions,
//     movieReducer
// }
