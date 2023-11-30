import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgb(3, 37, 65)',
    };

    const logoStyle = {
        width: '154px',
        height: '20px',
        marginRight: '20px',
    };

    const listItemStyle = {
        display: 'inline-block',
        marginRight: '10px',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    const [ls, setLs] = useState(true)

    const handleLogin = () => {
        setLs(!ls)
        navigate('/Login')
    }

    return (
        <div style={headerStyle}>
            <img
                style={logoStyle}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="로고"
            />
            <ul>
                <li style={listItemStyle}><Link to="/Movie" style={linkStyle}>영화</Link></li>
                <li style={listItemStyle}><Link to="/TV" style={linkStyle}>TV 프로그램</Link></li>
                <li style={listItemStyle}><Link to="/Celebirity" style={linkStyle}>인물</Link></li>
            </ul>
            <button style={{}} onClick={handleLogin}>
                {ls ? "로그인" : "로그아웃"}
            </button>
            <div style={{ color: "white", marginLeft: "10px" }}>
                {ls ? "로그인해주세요!" : "환영합니다!"}
            </div>
        </div >
    );
}

export default Header;
