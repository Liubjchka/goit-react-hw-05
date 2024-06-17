import { useSearchParams } from "react-router-dom";
import { Filter } from "../components/Filter/Filter";

export default function MoviesPage() {

const [params, setParams] = useSearchParams();
//об'єкт, що описує URL;

const filter = params.get("filter") ?? "";

const changeFilter = (newFilter) => {
params.set('filter', newFilter)
setParams(params)
}
    return (
        <div>
            <Filter value={filter} onChange={changeFilter}/>
        </div>
    )
}