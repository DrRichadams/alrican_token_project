import React, {useState} from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import PuffLoader from "react-spinners/PuffLoader";
import { db } from '../../firebase/config';
import { doc, deleteDoc, deleteField, updateDoc  } from "firebase/firestore";


const UserBoxDelete = ({name, email, btnTitle, onClick, id, refererId}) => {
  const [loading, set_loading] = useState(false);

  const handleDelete = async() => {
    set_loading(true)
    await deleteDoc(doc(db, "KYC", `${id}`));
    await deleteDoc(doc(db, "affiliateRequests", `${id}`));
    await deleteDoc(doc(db, "avatars", `${id}`));
    await deleteDoc(doc(db, "proofs", `${id}`));
    await deleteDoc(doc(db, "topup_proofs", `${id}`));
    await deleteDoc(doc(db, "trust-coins", `${id}`));
    await deleteDoc(doc(db, "withdrawRequests", `${id}`));
    await deleteDoc(doc(db, "affiliates", `${id}`));
    await updateDoc(doc(db, 'affiliates', `${refererId}`), {
        [id]: deleteField()
    });
    await deleteDoc(doc(db, "users", `${id}`));
    set_loading(false)
  }
  
  return (
    <UserContainer> 
        <UserDetails>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
        </UserDetails>
        {!loading && <VerifyBtn onClick={() => handleDelete()}>{btnTitle}</VerifyBtn>}
        {loading && <LoaderBox><PuffLoader color={colors.accent} loading={loading} size={30} /></LoaderBox>}
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
