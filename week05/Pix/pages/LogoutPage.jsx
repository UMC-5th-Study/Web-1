import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {
    const navigate = useNavigate();
    const LogoutIt = () => {
        navigate('/');
    };

  return (
    <div className='logout-check'>정말 지금 로그아웃 하시겠습니까?
        <div>
            <button className='logout-yes' onClick={LogoutIt}>네, 지금 로그아웃합니다.</button>
            <button className='logout-yes'onClick={LogoutIt}>아니요, 이따가 할게요.</button>
        </div>
    </div>
  )
}
