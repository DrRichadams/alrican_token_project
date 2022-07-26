import React, { useState } from "react"
import styled from "styled-components";
import { Link, useNavigate, Navigate, useParams } from "react-router-dom";

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
    ErrorText
 } from "../features/AuthStyledComponents";

 import { UserAuth } from "../contexts/AuthContext";

const Signup = () => {

    const {createUser, user} = UserAuth();
    const navigate = useNavigate();
    const {uid} = useParams();

    const [ names, setnames ] = useState('');
    const [ address, setaddress ] = useState('');
    const [ dob, setdob ] = useState('');
    const [ cell, setcell ] = useState('');
    const [ email, setemail ] = useState('');
    const [ password, setpassword ] = useState('');
    const [ confirmpassword, setconfirmpassword ] = useState('');

    const [ nameserror, setnameserror ] = useState(null);
    const [ addresserror, setaddresserror ] = useState(null);
    const [ doberror, setdoberror ] = useState(null);
    const [ cellerror, setcellerror ] = useState(null);
    const [ emailerror, setemailerror ] = useState(null);
    const [ passworderror, setpassworderror ] = useState(null);
    const [ confirmpassworderror, setconfirmpassworderror ] = useState(null);

    const [ authError, setAuthError ] = useState(null)

    const resetForm = () => {
        setnames(''); setaddress(''); setdob(''); setcell(''); setemail(''); setpassword(''); setconfirmpassword('');
        setnameserror(null); setaddresserror(null); setdoberror(null); setcellerror(null); setemailerror(null); setpassworderror(null); setconfirmpassworderror(null);
    }

    const checkEquality = (a, b) =>  a === b;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!names) setnameserror("Provide your full names to continue");
        if(!address) setaddresserror("Provide your full address to continue");
        if(!dob) setdoberror("Provide your date of birth to continue");
        if(!cell) setcellerror("Provide your cell number to continue");
        if(!email) setemailerror("Provide your email to continue");
        if(!password) setpassworderror("Set a strong password to continue");
        if(!confirmpassword) setconfirmpassworderror("Confirm your password to continue");

        if(password !== confirmpassword) setpassworderror("Your passwords do not match, try again!");
        if(password === confirmpassword) setpassworderror('');

        if(password.length < 8) setpassworderror("For your security, your password should be at least 8 characters in length!");

        if(names && address && dob && cell && email && password && confirmpassword && checkEquality(password, confirmpassword)) {
            try {
                setAuthError(null);
                await createUser(email, password, names, address, dob, cell);
                resetForm();
                navigate('/rerouter')
            } catch (e) {
                setAuthError(e.message);
                console.log(e.message);
            }
        }
    }

    if(user) return <Navigate to={"/rerouter"} />

    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <TopBar className="top_bar">
                <BackLink to={"/"}> <BsArrowLeft size={25} /> </BackLink>
                <BackTitle>Ariel Crypto.</BackTitle>
            </TopBar>
            <AuthDetailsContainer onSubmit={(e) => handleSubmit(e)}>
                <AuthTitle>CREATE ACCOUNT FOR {uid}</AuthTitle>
                <AuthDetailsBox>
                    {nameserror && <ErrorText>{nameserror}</ErrorText>}
                    <AuthInputBox><AuthInput placeholder="Full names" type={"text"} onChange={(e) => {setnameserror(''); setnames(e.target.value)}} value={names} /></AuthInputBox>
                    {addresserror && <ErrorText>{addresserror}</ErrorText>}
                    <AuthInputBox><AuthInput placeholder="Physical Address" type={"text"} onChange={(e) => {setaddresserror(''); setaddress(e.target.value)}} value={address} /></AuthInputBox>
                    {doberror && <ErrorText>{doberror}</ErrorText>}
                    <AuthInputBox><AuthInput placeholder="Date of birth" type={"text"} onChange={(e) => {setdoberror(''); setdob(e.target.value)}} value={dob} /></AuthInputBox>
                    {cellerror && <ErrorText>{cellerror}</ErrorText>}
                    <AuthInputBox><AuthInput placeholder="Cell" type={"text"} onChange={(e) => {setcellerror(''); setcell(e.target.value)}} value={cell} /></AuthInputBox>
                    {emailerror && <ErrorText>{emailerror}</ErrorText>}
                    <AuthInputBox><AuthInput placeholder="Email" type={"email"} onChange={(e) => {setemailerror(''); setemail(e.target.value)}} value={email} /></AuthInputBox>
                    {passworderror && <ErrorText>{passworderror}</ErrorText>}
                    <AuthInputBox><AuthInput placeholder="Create password" type={"password"} onChange={(e) => {setpassworderror(''); setpassword(e.target.value)}} value={password} /></AuthInputBox>
                    {confirmpassworderror && password && <ErrorText>{confirmpassworderror}</ErrorText>}
                    {password && <AuthInputBox><AuthInput placeholder="Confirm Password" type={"password"} onChange={(e) => {setconfirmpassworderror(''); setconfirmpassword(e.target.value)}} value={confirmpassword} /></AuthInputBox>}
                </AuthDetailsBox>
                <AuthError>{authError}</AuthError>
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