import { useState, useEffect } from 'react';
import movieData from './data.json';

export default function useMovieData() {
    const [recommended, setRecommended] = useState([]);
    const [latest, setLatest] = useState([]);
    const [trending, setTrending] = useState([]);
    const [originals, setOriginals] = useState([]);

    useEffect(() => {
        const movies = Object.keys(movieData.movies);

        movies.map(movieId => {
            const movie = movieData.movies[movieId];

            switch (movie.type) {
                case "recommend":
                    setRecommended([...recommended, movie]);
                    break;
                case "new":
                    setLatest([...latest, movie]);
                    break;
                case "trending":
                    setTrending([...trending, movie]);
                    break;
                case "original":
                    setOriginals([...originals, movie]);
                    break;
                default:
                    console.log(movie)
            }
        })

    }, []);

    return { recommended, latest, trending, originals }

}