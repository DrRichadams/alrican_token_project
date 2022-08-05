import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { openModal } from '../../store/actions/modalAction';
import { colors } from '../../constants/colors';
import { FiLogOut } from "react-icons/fi";

const UserProfile = () => {
    const dispatch = useDispatch()
  return (
    <Controls>
        <UserProfiler>
            <Image>
                <Img src={process.env.PUBLIC_URL + "/images/user1.jpg"} alt="" />
            </Image>
            <Names>
                <Name>Richard</Name>
                <UserType>Admin</UserType>
            </Names>
        </UserProfiler>
        <LogoutBtn onClick={() => dispatch(openModal())}>
            <FiLogOut size={20} />
        </LogoutBtn>
      </Controls>
  )
}


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
