import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjU1ODk1NzcwNGQ0OTg3M2IyNGQ2ZmUzZWZjNjg2YSIsInN1YiI6IjYzNGE3ZjllYjA0NjA1MDA3OTFiNDc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bovQzMpxO307ENjulV_gMtMPAJypUq3iLeNOtT2Rb9w'

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export {
    axiosService
}