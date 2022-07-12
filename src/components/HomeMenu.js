import React from "react";
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components";
import "../index.css"
import { colors } from "../constants/colors";

const HomeMenu = () => {
    return(
        <MenuContainer>
            <LogoBtn to={"/"}>A.C.M</LogoBtn>
            <AuthBtnContainer>
                <LinkBtn to={"/login"}>LOGIN</LinkBtn>
                <CTABtn to={"/signup"}>GET STARTED</CTABtn>
            </AuthBtnContainer>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 30px 50px; */
    /* margin-top: 20px; */
`;

const AuthBtnContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Btn = styled.div`
    display: inline-block;
    padding: 12px;
`;

const LogoBtn = styled(Link)`
    list-style: none;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    color: ${colors.accent};
    font-family: Inter, sans-serif;
`

const LinkBtn = styled(Link)`
    list-style: none;
    text-decoration: none;
    font-weight: bold;
    color: ${colors.accent};
`

const CTABtn = styled(Link)`
    list-style: none;
    text-decoration: none;
    background-color: ${colors.accent};
    color: #fff;
    font-weight: bold;
    padding: 12px 20px;
    margin-left: 20px;
    border-radius: 30px;
    transition: all 300ms ease-in-out;
    font-family: 'Roboto', sans-serif;
    :hover{
        background-color: #fff;
        color: ${colors.accent};
        box-shadow: 3px 3px 6px ${colors.accentShadow},
                    -3px -3px 6px ${colors.accentShadow};
    }
`

export default HomeMenu;