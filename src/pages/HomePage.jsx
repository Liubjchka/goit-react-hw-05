
import { useEffect, useState } from "react"
import { getMovies } from "../apiService/api";
import { MovieList } from "../components/MovieList/MovieList";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default function HomePage() {
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
    <PageTitle>Trending today</PageTitle>
{error && <p>OOPS! ERROR!</p>}
    {movies.length > 0 && <MovieList movies={movies} />}
    </div>
);
}