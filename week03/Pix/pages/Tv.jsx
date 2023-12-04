import React from 'react'
import Tv from '../components/Tv'
import { dummy } from "../tvDummy";

export default function Tvtv() {
    return (
        <div>
            <div className="movies-container">
                {
                dummy.results.map((item) => {
                    return (
                    <Tv
                        name={item.name}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        overview={item.overview}
                    />
                    )
                })
                }
            </div>
        </div>
    )
}