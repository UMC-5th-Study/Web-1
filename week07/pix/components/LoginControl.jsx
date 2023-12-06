import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginControl() {
    const navigate = useNavigate();
    
    const onClickLoginItem = () => {
        navigate(`/login`, {
        })
    }
    
    return (
        <div className="login" >
            <button className='loginbutton'  onClick={onClickLoginItem}>로그인</button>
            <span className='loginword'>로그인 해주세요!</span>
        </div>        
    )
}