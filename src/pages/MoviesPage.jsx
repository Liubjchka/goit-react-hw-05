import axios from 'axios';
import { useEffect, useState } from "react"

export default function MoviesPage() {
const [movies, setMovies] =  useState([]);


useEffect(()=>{
const controller = new AbortController();

    async function fetchData() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=33093cbbc00611921b04f9776f3628fe', 
                {
                    signal: controller.signal
                }
            )
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
        console.log(response.data.results);
return response;

        } catch (error) {}
    }
fetchData();

return () =>{
    controller.abort()
}
}, [])

return (
    <div>
    <h1>Trending today</h1>
    {movies.length > 0 && (
        <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
            <p>{movie.title}</p>
            </li>
        ))}
        </ul>
    )}
    </div>
);
}