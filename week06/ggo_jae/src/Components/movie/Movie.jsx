import React, { useState } from "react";
import movies from "../movieDummy";
import PropTypes from 'prop-types';
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
import { Link } from "react-router-dom";


function MovieItem({ movie }) {
    const [showOverview, setShowOverview] = useState(false);

    const onMouseEnter = () => {
        setShowOverview(true);
        console.log(this)
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
            <Link to={`/movie/${movie.title}`}>
                <ImageContainer onMouseClick={onMouseEnter}>
                    <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                </ImageContainer>
            </Link>
            <IndexBlock>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieAverage>{movie.vote_average}</MovieAverage>
            </IndexBlock>
        </MovieItemContainer>
    );
}

MovieItem.PropTypes = {
    movie: PropTypes.node.isRequired,
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
