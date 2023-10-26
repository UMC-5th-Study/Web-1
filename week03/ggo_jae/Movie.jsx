import React, { useState } from "react";
import { movies } from "./movieDummy";
import "../index.css";

function MovieItem({ movie }) {
    const [showOverview, setShowOverview] = useState(false);

    const onMouseEnter = () => {
        setShowOverview(true);
    };

    const onMouseLeave = () => {
        setShowOverview(false);
    };

    return (
        <div className="movie-item" onMouseLeave={onMouseLeave}>
            {showOverview ? (
                <div className="background">
                    <div className="title">
                        {movie.title}
                    </div>
                    <div className="overview">
                        {movie.overview}
                    </div>
                </div>
            ) : null}
            <div className="image-m">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} onMouseEnter={onMouseEnter} alt={movie.title} className="movie-poster" />
            </div>
            <div className="index-block">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-average">{movie.vote_average}</div>
            </div>
        </div>
    );
}

function Movie() {
    return (
        <div className="movie-grid">
            {movies.results.map(function (movie) {
                return <MovieItem key={movie.id} movie={movie} />;
            })}
        </div>
    );
}

export default Movie;
