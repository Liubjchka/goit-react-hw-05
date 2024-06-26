import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { getMovieReviews } from "../../apiService/api";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { moviesId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const fetchReviews = await getMovieReviews(moviesId);
                setReviews(fetchReviews);
                console.log(fetchReviews);
            } catch (error) {
                setError(error.message);
                toast.error("Whoops, something went wrong!");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [moviesId]);

    return (
        <div>
            {loading && <Loader />}
            {error && <ErrorMessage />}
            <ToastContainer />
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <p><strong>{review.author}</strong></p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>We don’t have any reviews for this movie</p>
            )}
        </div>
    );
}
