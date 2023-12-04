import React from 'react'
import { useLocation } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie/Movie';

export default function MovieDetail() {
    const {state} = useLocation();

    return (
        <div className='page-container'>
            <div style={{display: 'flex'}}>
                <img 
                    style={{ width: "300px", height: "450px" }}
                    src={IMG_BASE_URL + state.poster_path}
                    alt='영화 포스터 이미지'
                />
                <div>
                    <div style={{ fontSize: "32px" }}>{state.title}</div>
                    <br />
                    <div style={{ fontSize: "20px" }}>{state.overview}</div>
                </div>
            </div>
        </div>
    )
}