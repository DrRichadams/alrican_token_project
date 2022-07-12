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
    BackTitle,
    AuthPara
 } from "../features/AuthStyledComponents";

const ForgotPassword = () => {
    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <TopBar className="top_bar">
                <BackLink to={"/login"}> <BsArrowLeft size={25} /> </BackLink>
                <BackTitle>Ariel Crypto.</BackTitle>
            </TopBar>
            <AuthDetailsContainer>
                <AuthTitle>FORGOT PASSWORD</AuthTitle>
                <AuthPara>Provide the email address you used to create the account below.</AuthPara>
                <AuthDetailsBox>
                    <AuthInputBox className="usernameBox">
                        <BiUserCircle color={colors.accent} size={30} />
                        <AuthInput placeholder="Email" type={"text"} />
                    </AuthInputBox>
                </AuthDetailsBox>
                <AuthButtonContainer>
                    <AuthBtn>SUBMIT EMAIL</AuthBtn>
                    <ExtraAuthBtnsContainer>
                        {/* <ForgotPasswordLink to={"/"}>Forgot password</ForgotPasswordLink> */}
                        <SignUpLink to={"/signup"}>SignUp</SignUpLink>
                    </ExtraAuthBtnsContainer>
                </AuthButtonContainer>
            </AuthDetailsContainer>
        </SectionContainer>
    ) 
}

export default ForgotPassword