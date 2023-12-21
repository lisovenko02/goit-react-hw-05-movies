import { fetchMoviesBySearch } from "api";
import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { TrendingListMovies } from "components/TrendingListMovies/TrendingListMovies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';

    const handleSubmit = value => {
        
        if(!value.query) {
            return
        };
        
        if (query === value.query) {
            setError(`"${value.query}" has just been introduced`)
          } 
        setSearchParams({ query: value.query });
        
        setMovies([]);
    }

    useEffect(() => {
        async function searchMovies() {
            try {
                setError(null)
                const searchingMovie = await (fetchMoviesBySearch(query))
                const { results } = searchingMovie;
                setMovies(results);
            } catch (error) {
                
            }
        }
        searchMovies()
        
    },[query])


    return (
        <>
        <SearchMovies handleSubmit={handleSubmit}/>
        {movies.length > 0 && <TrendingListMovies items={movies} />}
        {error && (
          <h2
            
            style={{
              marginTop: 30,
              textAlign: 'center',
              color: 'white'
            }}
          >
            {error}
          </h2>
        )}
        </>
    )
}