import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org'
const API_KEY = '33093cbbc00611921b04f9776f3628fe'


const options = {
headers: {
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzA5M2NiYmMwMDYxMTkyMWIwNGY5Nzc2ZjM2MjhmZSIsInN1YiI6IjY2NjRjOGUyY2UzNjYzNDllMjZkZTRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78mug-BZWcIQKq-QyfQ3vuH5OLbtlehnEaVauoU2Xmo'
}
};

export const getMovies = async ({abortController}) => {
    const url = `${BASE_URL}/3/trending/movie/day?language=en-US?api_key=${API_KEY}`
    const response = await axios.get(url, options, 
        {
            signal: abortController.signal
        }
    )
    return response.data.results;
}

export const getMovieById = async movieId => {
    const url = `${BASE_URL}/3/movie/${movieId}?language=en-US?api_key=${API_KEY}`
    const response = await axios.get(url, options)
    return response.data;
}


export const getMovieReviews = async movieId => {
    const url = `${BASE_URL}/3/movie/${movieId}/reviews?language=en-US&page=1?api_key=${API_KEY}`
    const response = await axios.get(url, options)
    return response.data.results;
    
}

export const getCast = async movieId => {
    const url = `${BASE_URL}/3/movie/${movieId}/credits?language=en-US&page=1?api_key=${API_KEY}`
    const response = await axios.get(url, options);
    return response.data.cast;
}