
import { useEffect, useState } from "react"
import { getMovies } from "../apiService/api";
import { Link } from "react-router-dom";

export default function MoviesPage() {
const [movies, setMovies] =  useState([]);
const [error, setError] = useState(false);


useEffect(()=>{
const controller = new AbortController();

    async function fetchData() {
        try {
            const fetchMovies = await getMovies({
                abortController : controller,
            });
            setMovies(fetchMovies)

        // setMovies(prevMovies => [...prevMovies, ...fetchMovies]);
        
        console.log(fetchMovies);


        } catch (error) {
            if (error.code !== 'ERR_CANCELED') {
                // console.log(error);
                setError(true);
            }
        }
    }
fetchData();

return () =>{
    controller.abort()
}
}, [])

return (
    <div>
    <h1>Trending today</h1>

{error && <p>OOPS! ERROR!</p>}

    {movies.length > 0 && (
        <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
        ))}
        </ul>
    )}
    </div>
);
}