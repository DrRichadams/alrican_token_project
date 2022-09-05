import React from 'react';
import styled from 'styled-components';
import { UserAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import { useSelector, useDispatch } from "react-redux";
import { openSuperUser, closeSuperUser } from '../../store/actions/superUserActions';

const PageTitles = ({location}) => {
    const {userdata} = UserAuth(); 
    const {isSuper} = useSelector(state => state.superUser);
    const dispatch = useDispatch()
  return (
    <TitlesContainer>
        <Greeting>Hi <Name>{userdata && userdata.names}</Name></Greeting>
        <TitlesOtherBox>
            <WhereYouAre>{location}</WhereYouAre>
            <div>
                {!isSuper && <EnableSuperBtn onClick={() => dispatch(openSuperUser())}>Enable super user</EnableSuperBtn>}
                {isSuper && <EnableSuperBtn onClick={() => dispatch(closeSuperUser())}>Disable super user</EnableSuperBtn>}
            </div>
        </TitlesOtherBox>
    </TitlesContainer>
  )
}

export const EnableSuperBtn = styled.button`
    border: none;
    outline: none;
    padding: 8px 12px;
    background-color: ${colors.accentShadow};
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: ${colors.accent};
    }
`;
export const TitlesOtherBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const TitlesContainer = styled.div`
    margin-bottom: 15px;
`;
export const Name = styled.span`
    margin: 0;
    /* font-family: Roboto, sans-serif;
    color: rgba(192,192,192,0.9); */
    text-transform: capitalize;
`;
export const WhereYouAre = styled.h1`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 28px;
    color: rgba(192,192,192,0.9);
    text-transform: capitalize;
`;
export const Greeting = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-size: 15px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
`;

export default PageTitles
