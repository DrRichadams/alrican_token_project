import React, {useState} from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import PuffLoader from "react-spinners/PuffLoader";



const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const UserBoxDelete = ({name, email, btnTitle, onClick, id, refererId}) => {
  const [loading, set_loading] = useState(true);
  return (
    <UserContainer onClick={() => alert("Workang")}> 
        <UserDetails>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
        </UserDetails>
        {!loading && <VerifyBtn>{btnTitle}</VerifyBtn>}
        <LoaderBox><PuffLoader color={colors.accent} loading={loading} size={30} /></LoaderBox>
    </UserContainer>
  )
}


export const LoaderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
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

export default UserBoxDelete;
