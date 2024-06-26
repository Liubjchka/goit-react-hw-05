import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getCast } from "../../apiService/api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
const [cast, setCast] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const {moviesId} = useParams();

useEffect(()=>{
    async function fetchData() {
        try {
            setLoading(true);
            const fetchCast = await getCast(moviesId);
            setCast(fetchCast);
            console.log(fetchCast);
        } catch (error) {
            setError(error.message);
            toast.error("Whoops, something went wrong!")
        } finally {
        setLoading(false);
        }
    }
    fetchData();
},[moviesId])

    return (
        <div>
        {loading && <Loader/>}
        {error && <ErrorMessage/>}
        <ToastContainer/>

        {cast.length > 0 ? (
            <ul>
                {cast.map((actor)=>(
                    <li key={actor.id}>
                        <h3>{actor.name}</h3>
                        <p>Character: {actor.character}</p>
                        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                    </li>
                ))}
            </ul>
        ) : (
                !loading && <p>We do not have any cast information for this movie.</p>
            )}
        </div>
    );
}