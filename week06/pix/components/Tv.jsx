import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL= "https://image.tmdb.org/t/p/w1280/";

export default function Tv(props) {
    const navigate = useNavigate();
    
    const onClickMovieItem = () => {
        navigate(`/tv/${props.name}`, {
            state: props
        })
    }

    return (
        <div className="movie-container" onClick={onClickMovieItem}>
            <div className='movie-overview'>{props.overview}</div>
            <img src={IMG_BASE_URL + props.poster_path} alt="tv포스터" />
            <div className='movie-info'>
                <h4>{props.name}</h4>
                <span>{props.vote_average}</span>
            </div>
            
        </div>
    );
}