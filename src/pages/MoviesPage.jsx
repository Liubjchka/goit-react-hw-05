import { Filter } from "../components/Filter/Filter";
import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { getMovies } from "../apiService/api";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const [params, setParams] = useSearchParams();
//об'єкт, що описує URL;
const filter = params.get("filter") ?? "";

useEffect(()=>{
if (filter === "") {
    setMovies([]);
    return;
}

    const controller = new AbortController();
    
        async function fetchData() {
            try {
                setLoading(true);
                const fetchMovies = await getMovies({
                    abortController : controller,
                });
                setMovies(fetchMovies)
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(true);
                    toast.error("Whoops, something went wrong!");
                }
            } finally {
                setLoading(false);
            }
        }
    fetchData();
    
    return () =>{
        controller.abort()
    }
    }, [filter])


const changeFilter = (newFilter) => {
params.set('filter', newFilter)
setParams(params)
}

const  filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div>
        {loading && <Loader/>}
        {error && <ErrorMessage />}
        <ToastContainer />
        <Filter value={filter} onChange={changeFilter} />
        {filteredMovies.length > 0 && <MovieList movies={filteredMovies} />}
      </div>
    )
}