import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org'

export const getMovies = async ({abortController}) => {
    const response = await axios.get('3/trending/movie/day?api_key=33093cbbc00611921b04f9776f3628fe', 
        {
            signal: abortController.signal
        }
    )
    return response.data.results;
}


// Питання по baseURL