import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieById } from "../apiService/api";

export default function MovieDetailsPage() {
const {moviesId} = useParams();

const [movie, setMovie] = useState(null);
const [error, setError] = useState(null);

useEffect(()=>{
    async function fetchData() {
        try {
            const fetchedMovie = await getMovieById(moviesId);
            setMovie(fetchedMovie);
        } catch (error) {
            setError(error.message)
        }
        }
            fetchData();
        }, [moviesId]);

    return (
        <div>
        <h1>MovieDetailsPage</h1>
        {error && <p>Error fetching movie: {error}</p>}

        {movie && (<div>
            <p>ID: {movie.id}</p>
            <p>Title: {movie.title || movie.name}</p>

<p>
            Poster:
            {movie.poster_path && (
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
            />
            )}
            </p>

        </div>)}
        </div>
    )
}


// "id": 1022790,
// "name": "Inside Out Collection",
// "poster_path": "/Apr19lGxP7gm6y2HQX0kqOXTtqC.jpg",
// "backdrop_path":  "/bR8H6S3Jc2vhPvz2VWX0dQ3XTFV.jpg"