import React from 'react';
import styled from 'styled-components'
import {useState} from 'react';

const [ style, setStyle ] = useState({display: 'none'})


const Mcon = styled.div`
    position: relative;
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`
const On = styled.div`
    display: none;
    position: absolute;
    padding: 20px;
    background-color: rgba(0,0,0,0.5);
`

On:hover = styled.div`
    display: block;
`

const Off = styled.div`
    position: relative;
`
  
const Img = styled.img`
    max-width: 100%;
`
  
const Info = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h4`
    margin: 0;
`
  
const Sspan = styled.span`
    margin-left: 3px;
`
const Overview = styled.div`
    padding-top: 30px;
`


export const IMG_BASE_URL= "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview}) {
    return (
        <Mcon
            onMouseEnter={e => {
                setStyle({display: 'block'})
            }}
            onMouseLeave={e => {
                        setStyle({display: 'none'})
            }}
        >
            <On>
                <Title>{title}</Title>
                <Overview>{overview}</Overview>
            </On>
            <Off>
                <Img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
                <Info>
                    <Title>{title}</Title>
                    <Sspan>{vote_average}</Sspan>
                </Info>
            </Off>
            
            
        </Mcon>
    );
}