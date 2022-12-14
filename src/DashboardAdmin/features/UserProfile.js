import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { openAvatarModal, openModal } from '../../store/actions/modalAction';
import { colors } from '../../constants/colors';
import { FiLogOut } from "react-icons/fi";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../firebase/config';
import { UserAuth } from '../../contexts/AuthContext';

const UserProfile = () => {
    const {userdata, myAvatar} = UserAuth();
    const dispatch = useDispatch()

    const handleUserProfileClicked = () => {
        dispatch(openAvatarModal())
    }

  return (
    <Controls>
        <UserProfiler>
            <Image onClick={() => handleUserProfileClicked()}>
                {myAvatar && <Imager src={myAvatar[0]?.url} /> }
            </Image>
            <Names>
                <Name>{userdata?.names}</Name>
                <UserType>Admin</UserType>
            </Names>
        </UserProfiler>
        <LogoutBtn onClick={() => dispatch(openModal())}>
            <FiLogOut size={20} />
        </LogoutBtn>
      </Controls>
  )
}



export const Imager = styled.img`
    width: 100%;
`;

export const ImageWarning = styled.div`
  background: linear-gradient(45deg, #8E2DE2, #4A00E0);
`;
export const Waiting = styled.p`
  margin: 0;
  color: #fff;
`;

export const LogoutBtn = styled.div`
    color: ${colors.accent};
    cursor: pointer;
    transition: all 250ms ease-in-out;
    :hover {
        color: orangered;
    }
`;

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 25px;
`;

export const UserProfiler = styled.div`
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Img = styled.img`
    width: 100%;
    /* height: 100%; */
`;
export const Image = styled.div`
    background-color: #f5f5f5;
    width: 50px;
    height: 50px;
    border: 2px solid ${colors.accent};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    transition: all .25s ease-in-out;
    :hover {
        ::after{
            content: 'Edit';
            transition: all .25s ease-in-out;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Roboto, sans-serif;
            color: #f5f5f5;
            cursor: pointer;
        }
    }
`;

export const Names = styled.div`

`;

export const Name = styled.p`
    margin: 0;
    color: #f5f5f5;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 300;
`;

export const UserType = styled.p`
    margin: 0;
    color: #f5f5f5;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-size: 10px;
    font-weight: 600;
`;


export default UserProfile
