import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from '../store/actions/modalAction';
import { colors } from '../constants/colors';

const MinMenuBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/")
    };
    const handleLogout = () => {
        dispatch(openModal())
    };
  return (
    <MenuBar className="menuBar">
        <MenuBarLogo className="logo" onClick={handleNavigate}>A.C.M</MenuBarLogo>
        <LogoutBtn onClick={handleLogout}>logout</LogoutBtn>
    </MenuBar>
  )
}


export const LogoutBtn = styled.button`
    font-family: Roboto, sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.accent};
    border: 2px solid ${colors.accent};
    border-radius: 6px;
    background-color: transparent;
    color: ${colors.accent};
    padding: 8px 12px;
    width: 130px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    :hover {
      background-color: ${colors.accent};
      color: ${colors.secondary};
    }
`;
export const MenuBarLogo = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 1.3rem;
    color: ${colors.accent};
    cursor: pointer;
`;
export const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default MinMenuBar
