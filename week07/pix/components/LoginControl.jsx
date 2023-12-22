import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginControl() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/login');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/logout');
    }
    
    return (
        <div className="login" >
            <button className='loginbutton'  onClick={isLoggedIn ? handleLogout : handleLogin}>{isLoggedIn ? '로그아웃' : '로그인'}</button>
            <span className='loginword'>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</span>
        </div>        
    )
}