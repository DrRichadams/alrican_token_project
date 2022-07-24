import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoLogOut, IoChevronBack } from "react-icons/io5";
import { colors } from "../constants/colors";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector } from "react-redux";

const LogoutModal = () => {
    const {logout} = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const {isOpen} = useSelector(state => state.modalReducer)

    // console.log(isOpen)

    return ReactDOM.createPortal(
        <PortalContainer show={isOpen ? "flex":"none"}>
            <LogoutBox>
                <LogoutWarning>
                    <RiErrorWarningFill size={50} />
                    <LogoutText>You are logging out of the system!</LogoutText>
                </LogoutWarning>
                <LogoutBtns>
                    <LogoutCancel>
                        <IoChevronBack size={25} />
                        <LogoutBtnText>Cancel</LogoutBtnText>
                    </LogoutCancel>
                    <LogoutIndeed onClick={handleLogout}>
                        <LogoutBtnText>Logout</LogoutBtnText>
                        <IoLogOut size={25} />
                    </LogoutIndeed>
                </LogoutBtns>
            </LogoutBox>
        </PortalContainer>,
        document.getElementById('logout-modal')
    )
}

export const LogoutBox = styled.div`
    background-color: #fff;
    width: 30vw;
    min-width: 230px;
    height: 45vh;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.8),
    -3px -3px 12px rgba(0,0,0,0.5);
`;
export const LogoutWarning = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 15px;
    margin-bottom: 25px;
    color: ${colors.accent};
`;
export const LogoutText = styled.h3`
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
`;
export const LogoutBtns = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
export const LogoutCancel = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.accentShadow};
    color: ${colors.primary};
    cursor: pointer;
    transition: all 250ms ease-in-out;
    padding: 9px 15px;
    /* width: 100%; */
    flex: 1;
    border: 2px solid transparent;
    border-radius: 6px;
    box-sizing: border-box;
    :hover {
        /* opacity: .9;
        padding: 9px 12px; */
        transform: scale(0.95);
        border-color: ${colors.accent};
        color: ${colors.accent};
        background-color: transparent;
    }
`;
export const LogoutBtnText = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 600;
`;
export const LogoutIndeed = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.accent};
    color: ${colors.secondary};
    cursor: pointer;
    transition: all 250ms ease-in-out;
    padding: 9px 15px;
    /* width: 100%; */
    flex: 1;
    border: 2px solid transparent;
    border-radius: 6px;
    box-sizing: border-box;
    :hover {
        /* opacity: .9;
        padding: 9px 12px; */
        transform: scale(0.95);
        border-color: ${colors.accent};
        color: ${colors.accent};
        background-color: transparent;
    }
`;

const PortalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
    display: ${props=>props.show};
`;

export default LogoutModal;
