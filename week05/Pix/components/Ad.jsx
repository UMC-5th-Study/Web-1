import React, {useState} from 'react'
import AdPage from './AdPage';

export default function Ad() {
  
  const [isAdOn, setIsAdOn] = useState(false);

  const handleAdOn = () => {
    setIsAdOn(true);
  };

  const handleAdOff = () => {
    setIsAdOn(false);
  };
  
  return (
    <div>
      <div>{!isAdOn && <AdPage />}</div>
      <button onClick={isAdOn ? handleAdOff : handleAdOn}>{isAdOn ? '광고 보기' : '광고 안 보기'}</button>
    </div>
  )
}