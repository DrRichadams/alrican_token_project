import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoLogOut, IoChevronBack } from "react-icons/io5";
import { colors } from "../constants/colors";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/actions/modalAction";

import { 
    LogoutBox,
    LogoutWarning,
    LogoutText,
    LogoutBtns,
    LogoutCancel,
    LogoutBtnText,
    LogoutIndeed,
 } from "./features/modalsStyledComponents";

const LogoutModal = () => {
    const {logout} = UserAuth();
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const handleLogout = async () => {
        await logout();
        dispatch(closeModal())
        navigate('/login');
        // window.location.reload();
    };
    const handleCancelLogout =  () => {
        dispatch(closeModal())
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
                    <LogoutCancel onClick={handleCancelLogout}>
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
