import React, { useState } from 'react';
import AdPage from './AdPage';

const Ad = () => {
    const [ad, setAd] = useState(true);
    const handleToggleClick = () => {
        setAd(!ad);
    }
    return (
        <div>
            <button onClick={handleToggleClick}>
                광고
            </button>
            <div>
                {ad ? <AdPage /> : null}
            </div>
        </div>
    );
}

export default Ad;
