import { useState } from 'react';
import movieData from './data.json';

function addMe(movie, movieList) {
    const categoryMovie = movieList;
    categoryMovie.push(movie);
    return categoryMovie;
}

export default function useMovieData() {
    const [recommended, setRecommended] = useState([]);
    const [latest, setLatest] = useState([]);
    const [trending, setTrending] = useState([]);
    const [originals, setOriginals] = useState([]);

    // checking if any array is empty
    if (recommended.length === 0) {
        const movies = Object.keys(movieData.movies);

        movies.map(movieId => {
            const movie = movieData.movies[movieId];
            const type = movie.type;

            if (type === "recommend") setRecommended(addMe(movie, recommended));
            if (type === "new") setLatest(addMe(movie, latest));
            if (type === "trending") setTrending(addMe(movie, trending));
            if (type === "original") setOriginals(addMe(movie, originals));
        });
    }

    return { recommended, latest, trending, originals }

}