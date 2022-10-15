import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

let rootReducer = combineReducers({
    movieReducer
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};