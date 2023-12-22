import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        const emailRegex =/^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;

        setEmail(emailValue);

        if(!emailRegex.test(emailValue)){
			setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    const checkIt = () => {
        if (!emailError && email !== '') {
            navigate('/');
        }
    };

  return (
    <div className='login-container'>
        <h1>이메일과 비밀번호를 입력해주세요</h1>
        <div className='login-info'>
            <div>이메일 주소</div>
            <input name='emailemail' className='login-input' placeholder="이메일" value={email} onChange={handleEmailChange} />
                {emailError && <div className='redredred'>올바른 이메일을 입력해주세요.</div>}
        </div>
        <div className='login-info'>
            <div>비밀번호</div>
            <input className='login-input' placeholder="영문, 숫자, 특수문자 포함 8자 이상"></input>
        </div>
        <button className='login-check' onClick={checkIt}>로그인</button>
    </div>
  )
}
