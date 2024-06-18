import { Filter } from "../components/Filter/Filter";
import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { getMovies } from "../apiService/api";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
const [movies, setMovies] = useState([]);
const [error, setError] = useState(false)

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
    }, [filter])


const changeFilter = (newFilter) => {
params.set('filter', newFilter)
setParams(params)
}

const  filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div>
        <Filter value={filter} onChange={changeFilter} />
        {error && <p>OOPS! ERROR!</p>}
        {filteredMovies.length > 0 && <MovieList movies={filteredMovies} />}
      </div>
    )
}