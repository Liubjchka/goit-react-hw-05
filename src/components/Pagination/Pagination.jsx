import { useState } from "react";
import css from "./Pagination.module.css";
import "../MovieCast/MovieCast";
import PropTypes from "prop-types"; // Import PropTypes

const Pagination = ({ cast }) => {
const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 5;
const lastIndex = cardsPerPage *  currentPage;
const firstIndex = lastIndex - cardsPerPage;

const cards = cast.slice(firstIndex, lastIndex);

const numberOfPages = Math.max(Math.ceil(cast.length / cardsPerPage), 1);
const numbers = [...Array(numberOfPages).keys()].map((i) => i + 1);

const PrevPage = () => {
  if(currentPage > 1) {
    setCurrentPage(currentPage - 1)
  }
}

const changeCurrentPage = (page) => {
  setCurrentPage(page);
}
const nextPage = () => {
  if(currentPage < numberOfPages) {
    setCurrentPage(currentPage + 1)
  }
}

  return (
    <>
        <div className={css.container}>
            <div className={css.pagination}>


              <ul>
          {cards.map((actor) => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            </li>
          ))}
        </ul>

                <ul>
                <li>
                    <a onClick={PrevPage} href="#">Prev</a>
                </li>
                {numbers.map((value, id) => (
                  <li className={` ${currentPage === value ? "active" : ""}`} key={id}>
                    <a onClick={changeCurrentPage} href="#">{value}</a>
                </li>
                ))}

                <li>
                    <a onClick={nextPage} href="#">Next</a>
                </li>
              </ul> 
              
            </div>
        </div>
    </>
  )
}

// Define prop types for the Pagination component
Pagination.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ).isRequired, // cast should be an array of objects with specific shape
};

export default Pagination;
