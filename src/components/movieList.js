import React from 'react';
import MovieCard from './movieCard.js';

const MovieList = ({ movies }) => {
    return (

        <div className="card-columns align-content-center flex-wrap">
            {
                movies.map((movie, i) => {
                    return (
                        <MovieCard
                            key={i}
                            id={movie.id}
                            title={movie.title}
                            description={movie.description}
                            producer={movie.producer}
                            date={movie.release_date}
                        />
                    );
                })
            }
        </div>
    );
}

export default MovieList;