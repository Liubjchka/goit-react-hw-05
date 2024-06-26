import { Link } from "react-router-dom";
import PageNotFound from "../assets/page_not_found.jpg";

export default function NotFoundPage() {
    return <div>
        <h1>Sorry, page not found</h1>
                <Link to='/'>Back to home page</Link>
        <img src={PageNotFound} alt="Page not found" style={{ width: '100%', height: 'auto' }} />
        </div>
}