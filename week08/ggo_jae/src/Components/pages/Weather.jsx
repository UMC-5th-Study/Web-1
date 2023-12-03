import React, { useState, useEffect } from "react"
import axios from 'axios'

const Weather = () => {
    const API_KEY = "983b5b78ca7db0ebcfc560324b01e31e"
    const [cityName, setCityName] = useState(null);
    const [weatherData1, setWeatherData1] = useState(null)
    const [weatherData2, setWeatherData2] = useState(null)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

    const handleCityName = (e) => {
        setCityName(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            fetchData();
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setWeatherData1(response.data.main.temp);
            setWeatherData2(response.data.weather[0].main)
        } catch (error) {
            console.error("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <input
                placeholder="도시 이름"
                value={cityName}
                onChange={handleCityName}
                onKeyDown={handleKeyPress}
                style={{ width: "500px", borderRadius: "10px", margin: '10px' }} />
            {weatherData1 !== null && (<div style={{ border: "2px solid #ccc", padding: "10px", borderRadius: "10px", width: "600px", margin: "20px auto" }}>
                <div>{cityName}</div>
                <div style={{ fontSize: "30px" }}>{Math.round(((weatherData1 - 273.15) * 10)) / 10}</div>
                <div>{weatherData2}</div>
            </div>)}
            {/* 조건부 렌더링, &&왼쪽이 참일 때만 컴포넌트 return(렌더링) */}
        </div>
    )
}

export default Weather;