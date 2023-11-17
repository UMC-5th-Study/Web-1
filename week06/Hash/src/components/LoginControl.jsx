import React, { useState } from "react";
import nav_style from "../styles/nav_style";


function LoginControl (){
    const [loginToggle, SetloginToggle] = useState(false);
    const loginHandler = () => {
        const prevState = loginToggle;
        SetloginToggle(!prevState);
    };
    
    return(
        <nav_style.login_wrap>
        <nav_style.btn onClick={loginHandler}>{loginToggle? "로그아웃" : "로그인"}</nav_style.btn>
        <nav_style.login_message>{loginToggle ? "환영합니다!!" : "로그인 해주세요!"}</nav_style.login_message>
        </nav_style.login_wrap>
    );
    }
export default {LoginControl}