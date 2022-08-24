import React from "react";
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components";
import "../index.css"
import { colors } from "../constants/colors";

const HomeMenu = () => {
    return(
        <MenuContainer>
            {/* <LogoBtn to={"/"}>A.A.T</LogoBtn> */}
            <LogoBtn to={"/"}>
                <LogoImg src={process.env.PUBLIC_URL + "logo2_on_dark.png"} alt="" />
            </LogoBtn>
            <AuthBtnContainer>
                <LinkBtn to={"/login"}>LOGIN</LinkBtn>
                <CTABtn to={"/signup/uxDKTekFvuROQIpgtGLg4kJjOmq2"}>GET STARTED</CTABtn>
            </AuthBtnContainer>
        </MenuContainer>
    )
}

const LogoImg = styled.img`
    width: 100%;
`;
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
    width: 60px;
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