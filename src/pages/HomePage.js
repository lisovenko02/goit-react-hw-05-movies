import { fetchMoviesTrending } from "api";
import { Loader } from "components/Loader/Loader";
import { TrendingListMovies } from "components/TrendingListMovies/TrendingListMovies";
import { useEffect, useState } from "react";




export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true);
                setError(null);
                const trendingMovies = await (fetchMoviesTrending())
                const {results} = trendingMovies;
                if(!results.length) {
                    setError("Try again")
                } 
                setMovies(results)
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError('We have some problems')
                  }
            } finally {
                setLoading(false);
            }
        }
        getMovies()
    },[])
    return (
        <>
        {loading && <Loader />}
        <TrendingListMovies items={movies}/>
        {error && (
          <h2
            
            style={{
              marginTop: 30,
              textAlign: 'center',
            }}
          >
            {error}
          </h2>
        )}
        </>
    )
} 