import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FiX } from "react-icons/fi"
import { colors } from "../constants/colors";
import { UserAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { closeAddWalletModal } from "../store/actions/modalAction";

const ChangeAvatarModal = () => {
    return ReactDOM.createPortal(
        <PortalContainer show={true ? "flex":"none"}>
            <ChangeAvatarBox>
                <BtnClose><FiX size={25} /></BtnClose>
                <AvatarPreviewBox>

                </AvatarPreviewBox>
            </ChangeAvatarBox>
        </PortalContainer>,
        document.getElementById('change-avatar')
    )
}



export const AvatarPreviewBox = styled.div`
    width: 170px;
    height: 170px;
    background-color: ${colors.accentShadow};
    border-radius: 50%;
    margin-top: 50px;
`;

export const BtnClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    border-radius: 6px;
    background-color: ${colors.accentShadow};
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const ChangeAvatarBox = styled.div`
    width: 60vw;
    height: 90vh;
    background-color: #fff;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PortalContainer = styled.div`
    background-color: black;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(31,33,40,0.9);
    justify-content: center;
    align-items: center;
    display: ${props=>props.show};
`;

export default ChangeAvatarModal;
