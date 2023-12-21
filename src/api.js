import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '0dcca7a9470f6755158e1e22608b90db';

export const fetchMoviesTrending = async () => {
    const resps = await axios.get('/3/trending/movie/day', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    });
    return resps.data;
};

export const fetchMoviesBySearch = async(query) => {
    const resps = await axios.get('/3/search/movie', {
        params: {
            api_key: API_KEY,
            query: query,
        }
    });
    return resps.data;
};

export const fetchMovieDetails = async(movieId) => {
    const resps = await axios.get(`3/movie/${movieId}`,{
        params: {api_key: API_KEY,}
    })
    return resps.data;
};

export const fetchMovieCast = async(id) => {
    const resps = await axios.get(`/3/movie/${id}/credits`,{
        params: {api_key: API_KEY}
    }) 
    return resps.data;
};

export const fetchMovieReviews = async(id) => {
    const resps = await axios.get(`/3/movie/${id}/reviews`,{
        params: {api_key : API_KEY}
    });
    return resps.data;
};