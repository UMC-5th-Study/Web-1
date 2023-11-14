import React from "react";
import nav_style from "../styles/nav_style";

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginToggle : false
        };
        this.loginHandler.bind(this);
    }
    loginHandler = (e) => {
        this.setState(prevState => ({
			loginToggle : !prevState.loginToggle
		}));
    }
    render(){
        return(
            <nav_style.login_wrap>
            <nav_style.btn onClick={this.loginHandler}>{this.state.loginToggle? "로그아웃" : "로그인"}</nav_style.btn>
            <nav_style.login_message>{this.state.loginToggle ? "환영합니다!!" : "로그인 해주세요!"}</nav_style.login_message>
            </nav_style.login_wrap>
        );
    }
}

export default {LoginControl};