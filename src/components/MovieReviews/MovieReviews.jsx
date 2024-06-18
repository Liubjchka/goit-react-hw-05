import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { ToastContainer } from "react-toastify";
import { getMovieReviews } from "../../apiService/api";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
const [reviews, setReviews] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const {moviesId} = useParams();

useEffect(() => {
    async function fetchData() {
        try {
            setLoading(true);
            const fetchReviews = await getMovieReviews(moviesId);
            setReviews(fetchReviews);
        } catch (error) {
            setError(true);
        } finally {
        setLoading(false);
        }
    }

    fetchData();
console.log(fetchData);

}, [moviesId]);

return (
    <div>
{loading && <Loader/>}
{error && <ToastContainer/>}
{reviews && (
    <div>
    <p>

    </p>

    </div>
)}
    </div>
)
}