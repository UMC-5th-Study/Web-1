import React from 'react'
import { useState } from 'react';
import axios from 'axios';
//import Control from '../components/Control'

export default function WeatherMap() {
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const API_KEY = "58504cfde021dc42b20828d529b6be36";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    

  

  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
        try {
            const data = await axios({
                method: 'get',
                url: url
            })
            setResult(data);
        }
        catch (err) {
            alert(err);
        }
    }
  }

  return (
    <div className='input-country'>
        <input className='box' value={location} onChange={(e)=>setLocation(e.target.value)} type='text' onKeyDown={searchWeather} placeholder="도시를 입력하세요" />
        {Object.keys(result).length !== 0 && (
            <div className='result'>
                <div className='city'>{result.data.name}</div>
                <div className='temperature'>{Math.round(((result.data.main.temp -273.15) * 10)) / 10}°C</div>
                <div className='sky'>{result.data.weather[0].main}</div>
            </div>
        )}
    </div>
  )
}
