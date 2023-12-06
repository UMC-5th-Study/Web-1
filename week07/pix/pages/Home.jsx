import React from 'react'
import AdPage from "../components/AdPage";

export default function Home() {
    
    return (
        <div className='home-ad'>
            <AdPage />
            <button /*onClick={onClickAdItem}*/>광고 안 보기</button>
        </div>
    )
}