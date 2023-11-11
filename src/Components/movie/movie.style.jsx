import styled from "styled-components";

export const MovieItemContainer = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 150px;
    background-color: rgb(55, 59, 105);
    display: flex;
`;

export const Background = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(55, 59, 105, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 10px;
    color: white;
    margin: 5px;
`;

export const Overview = styled.div`
    font-size: 10px;
    color: white;
    margin: 5px;
    text-align: left;
`;

export const ImageContainer = styled.div`
    height: 90%;
    width: 100%;
`;

export const MoviePoster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const IndexBlock = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const MovieTitle = styled.div`
    font-size: 10px;
    color: white;
`;

export const MovieAverage = styled.div`
    font-size: 10px;
    color: white;
`;
