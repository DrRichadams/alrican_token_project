import styled from "styled-components";
import { colors } from "../constants/colors";
import { Link } from "react-router-dom";


export const AuthPara = styled.p`
    text-align: center;
    color: ${colors.accent};
    margin-bottom: 25px;
`;

export const ForgotPasswordLink = styled(Link)`
    text-decoration: none;  
    color: ${colors.accent};
    transition: all 200ms ease-in-out;
    :hover {
        color: red;
    }
`;

export const SignUpLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 200ms ease-in-out;
    :hover {
        letter-spacing: 2px;
        transform: translateX(14px);
    }
`;

export const ExtraAuthBtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
    margin-bottom: 15px;
    padding: 0 12px;
    width: 300px;
    box-sizing: border-box;
`;

export const AuthBtn = styled.button`
    background-color: transparent;
    color: #228B22;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 12px 8px;
    width: 300px;
    border-radius: 6px;
    border: 2px solid #228B22;
    box-sizing: border-box;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    :hover {
        background-color: #228B22;
        color: #fff;
    }
`;

export const AuthButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    /* background-color: red; */
`;

export const AuthInputBox = styled.div`
    background-color: #d9d9d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 8px;
    width: 300px;
    border-radius: 6px;
    box-sizing: border-box;
`;

export const AuthInput = styled.input`
    /* width: 100%; */
    flex: 1;
    padding: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #01050f;
    font-family: Poppins, sans-serif;
    font-weight: 500;
`;

export const AuthDetailsBox = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AuthTitle = styled.h3`
    /* background-color: red; */
    padding: 25px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    pointer-events: none;
`;

export const AuthDetailsContainer = styled.div`
    background-color: #fff;
    width: 450px;
    min-height: 70vh;
    margin: 30px auto;
    border-radius: 8px;
    @media (max-width: 560px) {
        width: 100%;
        min-width: 300;
    }
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BackLink = styled(Link)`
    color: #fff;
    transition: all 200ms ease-in-out;
    :hover {
        color: ${colors.accent}
    };
`;

export const BackTitle = styled.p`
    color: ${colors.accent};
    font-family: Inter, sans-serif;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 2px;
    /* background-color: red; */
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    pointer-events: none;
    @media (max-width: 570px) {
        text-align: right;
    }
`;