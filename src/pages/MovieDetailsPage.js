import { fetchMovieDetails } from "api";
import { Loader } from "components/Loader/Loader";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

export default function MovieDetailsPage() {
    const [details, setDetails] = useState([])
    const { movieId } = useParams();
    const location = useLocation();
    const clickTo = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        async function getMovieDetails() {
            try {
                const movieDetails = await fetchMovieDetails(movieId)
                setDetails(movieDetails);
                
            } catch (error) {
                
            }
        }
        getMovieDetails()
    },[movieId])
    
    return (
        <>
            <Link to={clickTo.current}>Go back</Link>
            <MovieDetails items={details}/>
                <ul style={{
                    backgroundColor:'rgb(19, 20, 21)',
                    margin: 0,
                    borderBottomStyle: 'groove',
                    padding: '10px'
                }}>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
}