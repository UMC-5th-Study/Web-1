import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SuccessModal from './modal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);

    if (inputValue === "") {
      setNameMessage("입력하세요!");
    } else {
      setNameMessage("멋진 이름이네요");
    }
  };

  const handleNicknameChange = (event) => {
    const inputValue = event.target.value;
    setNickname(inputValue);

    if (inputValue.length < 2 || inputValue.length > 5) {
      setNicknameMessage("닉네임은 2-5자 이내로 입력하세요.");
    } else {
      setNicknameMessage("맞아요!");
    }
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // 이메일 유효성 검사를 수행해야 하며, 여기에서는 간단하게 구현합니다.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(inputValue)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다. 다시 입력하세요.");
    } else {
      setEmailMessage("형식에 맞아요");
    }
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);

    // 비밀번호 유효성 검사를 수행해야 하며, 여기에서는 간단하게 구현합니다.
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    if (!passwordPattern.test(inputValue)) {
      setPasswordMessage("비밀번호가 이상해요. 다시 입력하세요.");
    } else {
      setPasswordMessage("좋아요");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);

    if (inputValue !== password) {
      setConfirmPasswordMessage("비밀번호가 일치하지 않습니다. 다시 입력하세요.");
    } else {
      setConfirmPasswordMessage("일치해요!");
    }
  };

  useEffect(() => {
    const isNameValid = name !== "" ? true : false;
    const isNicknameValid = nickname.length >= 2 && nickname.length <= 5;
    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = passwordPattern.test(password);
    const isConfirmPasswordValid = confirmPassword === password;
  
    setIsFormValid(
      isNameValid &&
      isNicknameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    );
  }, [name, nickname, email, password, confirmPassword, emailPattern, passwordPattern]);
  

  return (
    <div className="App">
      <div className="content">
        <h1>회원가입</h1>
        <form>
        <label htmlFor="name">이름</label>
        <input type="text" className={`login ${nameMessage ? 'error-text' : 'success-text'}`} id="name" value={name} onChange={handleNameChange}style={{ color: 'white' }}/>
        { nameMessage && (<div className={nameMessage === '멋진 이름이네요' ? 'success-text' : 'error-text'}> {nameMessage}</div>)}

          <label htmlFor="nickname">닉네임</label>
          <input type="text" className={`login ${nicknameMessage ? 'error-text' : 'success-text'}`} id="nickname" value={nickname} onChange={handleNicknameChange} style={{ color: 'white' }}/>
          {nicknameMessage && <div className={nicknameMessage === '맞아요!' ? 'success-text' : 'error-text'}>{nicknameMessage}</div>}


          <label htmlFor="email">이메일</label>
          <input type="text" className={`login ${emailMessage ? 'error-text' : 'success-text'}`} id="email" value={email} onChange={handleEmailChange} style={{ color: 'white' }}/>
          {emailMessage && <div className={emailMessage === '형식에 맞아요' ? 'success-text' : 'error-text'}>{emailMessage}</div>}



          <label htmlFor="password">비밀번호</label>
          <input type="password" className="login" id="password" value={password} onChange={handlePasswordChange} />
          {passwordMessage && <div className={passwordMessage=== '좋아요' ? 'success-text' : 'error-text'}>{passwordMessage}</div>}



          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input type="password" className="login"  id="confirmPassword"  value={confirmPassword}  onChange={handleConfirmPasswordChange}/>
          {confirmPassword && <div className={confirmPasswordMessage=== '일치해요!' ? 'success-text' : 'error-text'}>{confirmPasswordMessage}</div>}



          <input
          type="submit"
          placeholder="가입하기"
          className={`submit ${isFormValid ? "enabled" : "disabled"}`}
          disabled={!isFormValid}
        />        
        
        </form>
        {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
}

export default App;

