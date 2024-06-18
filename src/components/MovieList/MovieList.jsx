import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

export const MovieList = ({movies}) => {
    const location = useLocation();
    //об'єкт, що описує поточний URL;
    console.log(location);
   
    return (
        <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
            </li>
        ))}
        </ul>
    )
} 

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};