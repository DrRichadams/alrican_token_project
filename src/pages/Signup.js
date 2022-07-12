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

const Signup = () => {
    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <TopBar className="top_bar">
                <BackLink to={"/"}> <BsArrowLeft size={25} /> </BackLink>
                <BackTitle>Ariel Crypto.</BackTitle>
            </TopBar>
            <AuthDetailsContainer>
                <AuthTitle>CREATE ACCOUNT</AuthTitle>
                <AuthDetailsBox>
                    <AuthInputBox><AuthInput placeholder="Full names" type={"text"} /></AuthInputBox>
                    <AuthInputBox><AuthInput placeholder="Physical Address" type={"text"} /></AuthInputBox>
                    <AuthInputBox><AuthInput placeholder="Date of birth" type={"text"} /></AuthInputBox>
                    <AuthInputBox><AuthInput placeholder="Cell" type={"text"} /></AuthInputBox>
                    <AuthInputBox><AuthInput placeholder="Email" type={"text"} /></AuthInputBox>
                    <AuthInputBox><AuthInput placeholder="Password" type={"password"} /></AuthInputBox>
                    <AuthInputBox><AuthInput placeholder="Confirm Password" type={"password"} /></AuthInputBox>
                </AuthDetailsBox>
                <AuthButtonContainer>
                    <AuthBtn>SUBMIT DETAILS</AuthBtn>
                    <ExtraAuthBtnsContainer>
                        <ForgotPasswordLink to={"/login"}>Alredy have an account ?</ForgotPasswordLink>
                        {/* <SignUpLink to={"/login"}>Alredy have an account ?</SignUpLink> */}
                    </ExtraAuthBtnsContainer>
                </AuthButtonContainer>
            </AuthDetailsContainer>
        </SectionContainer>
    )
}
export default Signup;