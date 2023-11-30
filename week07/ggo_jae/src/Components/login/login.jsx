import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputEmail));
        handleButtonColor();
    };

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value
        setPassword(inputPassword);
        // 비밀번호가 영문, 숫자, 특수문자를 포함하고 8자 이상인지 여부를 확인
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        setIsValidPassword(passwordRegex.test(inputPassword));
    };

    const handleButtonColor = () => {
        const bgcolor = isValidEmail && isValidPassword ? "#042940" : "gray"
        return bgcolor
    };

    return (
        <div>
            <h1>이메일과 비밀번호를 입력해주세요.</h1>
            <div>
                <label>이메일 주소</label>
                <div>
                    <input
                        type="email"
                        placeholder="이메일 주소"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: "500px", height: "25px", borderRadius: "5px" }}

                    />
                    {!isValidEmail && (
                        <p style={{ color: 'red' }}>올바른 이메일 형식으로 작성해주세요</p>
                    )}
                </div>
            </div>
            <div style={{ marginTop: "10px" }}>
                <label>비밀번호</label>
                <div>
                    <input
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ width: "500px", height: "25px", borderRadius: "5px" }}
                    />
                </div>
            </div>
            <button style={{ width: "500px", height: "30px", borderRadius: "10px", margin: "10px", backgroundColor: handleButtonColor(), color: "white" }}>확인</button>
        </div>
    );
};

export default Login;
