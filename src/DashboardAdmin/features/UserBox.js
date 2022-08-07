import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const UserBox = ({name, email, btnTitle, onClick}) => {
  return (
    <UserContainer onClick={onClick}>
        <UserDetails>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
        </UserDetails>
        <VerifyBtn>{btnTitle}</VerifyBtn>
    </UserContainer>
  )
}


export const UserDetails = styled.div`

`;

export const VerifyBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #6C5DD3;
  font-family: Roboto, sans-serif;
  transition: all .25s ease-in-out;
  cursor: pointer;
  :hover {
    color: ${colors.accent};
    text-decoration: underline;
  }
`;
export const UserEmail = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  color: rgba(192,192,192,1);
  font-weight: 300;
  font-size: 13px;
  padding-left: 6px;
`;
export const UserName = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  color: #fff;
`;

export const UserContainer = styled.div`
  background-color: #242731;
  box-sizing: border-box;
  width: 97%;
  border-radius: 6px;
  padding: 12px 35px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .2s ease-in-out;
  :hover {
    transform: translateY(-3px);
  }
`;

export default UserBox
