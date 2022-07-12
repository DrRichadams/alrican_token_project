import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BiLock } from "react-icons/bi";

import { colors } from "../constants/colors";
import { SectionContainer } from "../features/SectionContainer";

import { 
    ForgotPasswordLink,
    SignUpLink,
    ExtraAuthBtnsContainer,
    AuthBtn,
    AuthButtonContainer,
    AuthInputBox,
    AuthInput,
    AuthDetailsBox,
    AuthTitle,
    AuthDetailsContainer,
    TopBar,
    BackLink,
    BackTitle
 } from "../features/AuthStyledComponents";

const Login = () => {
    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <TopBar className="top_bar">
                <BackLink to={"/"}> <BsArrowLeft size={25} /> </BackLink>
                <BackTitle>Ariel Crypto.</BackTitle>
            </TopBar>
            <AuthDetailsContainer>
                <AuthTitle>LOGIN</AuthTitle>
                <AuthDetailsBox>
                    <AuthInputBox>
                        <BiUserCircle color={colors.accent} size={30} />
                        <AuthInput placeholder="Email" type={"text"} />
                    </AuthInputBox>
                    <AuthInputBox>
                        <BiLock color={colors.accent} size={30} />
                        <AuthInput placeholder="Password" type={"password"} />
                    </AuthInputBox>
                </AuthDetailsBox>
                <AuthButtonContainer>
                    <AuthBtn>LOGIN</AuthBtn>
                    <ExtraAuthBtnsContainer>
                        <ForgotPasswordLink to={"/forgotPassword"}>Forgot password</ForgotPasswordLink>
                        <SignUpLink to={"/signup"}>SignUp</SignUpLink>
                    </ExtraAuthBtnsContainer>
                </AuthButtonContainer>
            </AuthDetailsContainer>
        </SectionContainer>
    )
}

export default Login;