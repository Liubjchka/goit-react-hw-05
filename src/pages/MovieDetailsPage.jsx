import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getMovieById } from "../apiService/api";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { BackLink } from "../components/BackLink/BackLink";
import Loader from "../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
const location = useLocation();
const backLinkRef = useRef(location.state);

const {moviesId} = useParams();

const [movie, setMovie] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

useEffect(()=>{
    async function fetchData() {
        try {
            setLoading(true);
            const fetchedMovie = await getMovieById(moviesId);
            setMovie(fetchedMovie);
        } catch (error) {
            setError(error.message);
            toast.error("Whoops, something went wrong!")
        } finally {
            setLoading(false);
        }
        }
            fetchData();
        }, [moviesId]);

    return (
        <div>
        {loading && <Loader/>}
        {error && <ErrorMessage />}
        <ToastContainer/>
<PageTitle>MovieDetailsPage</PageTitle>
<BackLink href={backLinkRef.current ?? "/movies"} >Go back</BackLink>
        {movie && (<div>
        <div>
            <h2>Title: {movie.title || movie.name}</h2>
            <p>Runtime: {movie.runtime} min</p>
            <p>Description: {movie.overview}</p>
            <p>
            {movie.poster_path && (
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
            />
            )}
            </p>
            <p>
            {movie.backdrop_path && (
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title || movie.name}
            />
            )}
            </p>
            </div>


<div>
<h2>Additonal information</h2>
<ul>
    <li>
    <Link to='movie-cast'>Movie Cast</Link>
    </li>
    <li>
    <Link to='movie-reviews'>Movie Reviews</Link>
    </li>
</ul>
</div>
<Suspense fallbach={<Loader/>}>
<Outlet/>
</Suspense>
        </div>)}
        </div>
    )
}