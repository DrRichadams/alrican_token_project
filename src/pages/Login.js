import React, { useState } from "react"
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

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
    AuthError,
    ErrorText,
 } from "../features/AuthStyledComponents";
 import { UserAuth } from "../contexts/AuthContext";

const Login = () => {

    const {signIn, user} = UserAuth();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [emailerror, setemailerror] = useState(null);
    const [passworderror, setpassworderror] = useState(null);
    const [autherror, setautherror] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email) setemailerror("An email is required to login!");
        if(!password) setpassworderror("A password required to login!");
        if(password && email) {
            try {
                setautherror(null);
                await signIn(email, password);
            } catch (e) {
                setautherror(e.message);
            }
        }
    }

    const handleEmail = (e) => { 
        setemail(e.target.value);
        setemailerror(null);
    }
    const handlePassword = (e) => { 
        setpassword(e.target.value);
        setpassworderror(null);
    }

    if(user) return <Navigate to={"/rerouter"} />

    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <TopBar className="top_bar">
                <BackLink to={"/"}> <BsArrowLeft size={25} /> </BackLink>
                <BackTitle>Ariel Crypto.</BackTitle>
            </TopBar>
            <AuthDetailsContainer onSubmit={(e) => handleSubmit(e)}>
                <AuthTitle>LOGIN</AuthTitle>
                <AuthDetailsBox>
                    {emailerror && <ErrorText>{emailerror}</ErrorText>}
                    <AuthInputBox>
                        <BiUserCircle color={colors.accent} size={30} />
                        <AuthInput placeholder="Email" type={"email"} onChange ={(e) => handleEmail(e)} value={email} />
                    </AuthInputBox>
                    {passworderror && <ErrorText>{passworderror}</ErrorText>}
                    <AuthInputBox>
                        <BiLock color={colors.accent} size={30} />
                        <AuthInput placeholder="Password" type={"password"} onChange ={(e) => handlePassword(e)} value={password} />
                    </AuthInputBox>
                </AuthDetailsBox>
                {autherror && <AuthError>{autherror}</AuthError>}
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