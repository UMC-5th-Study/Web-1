import React, { useState } from "react";
import { movies } from "../MovieDummy";
import {
    MovieItemContainer,
    Background,
    Title,
    Overview,
    ImageContainer,
    MoviePoster,
    IndexBlock,
    MovieTitle,
    MovieAverage
} from "./movie.style";


function MovieItem({ movie }) {
    const [showOverview, setShowOverview] = useState(false);

    const onMouseEnter = () => {
        setShowOverview(true);
    };

    const onMouseLeave = () => {
        setShowOverview(false);
    };

    return (
        <MovieItemContainer onMouseLeave={onMouseLeave}>
            {showOverview && (
                <Background>
                    <Title>{movie.title}</Title>
                    <Overview>{movie.overview}</Overview>
                </Background>
            )}
            <ImageContainer onMouseEnter={onMouseEnter}>
                <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </ImageContainer>
            <IndexBlock>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieAverage>{movie.vote_average}</MovieAverage>
            </IndexBlock>
        </MovieItemContainer>
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
