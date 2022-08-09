import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const TopUpRequests = () => {
  return (
    <TopUpRequestsContainer>
      <RequestBox>
        <UserDetails>
          <Personals>Richard</Personals>
          <Personals>proxyserver7798@gmail.com</Personals>
        </UserDetails>
        <AckBtn>Acknowledge</AckBtn>
      </RequestBox>
      <RequestBox>
        <UserDetails>
          <Personals>Jolly</Personals>
          <Personals>joly@gmail.com</Personals>
        </UserDetails>
        <AckBtn>Acknowledge</AckBtn>
      </RequestBox>
    </TopUpRequestsContainer>
  )
}


export const AckBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: Inter, sans-serif;
  text-decoration: underline;
  color: ${colors.accent};
  cursor: pointer;
  transition: all .25s ease-in-out;
  :hover {
    color: orangered;
  }
`;
export const Personals = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  color: #f5f5f5;
  font-weight: 300;
  font-size: 14px;
`;
export const UserDetails = styled.div`
  /* display: flex; */
  /* background-color: red; */
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
export const RequestBox = styled.div`
  background-color: #242731;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  /* box-shadow: 3px 3px 24px rgba(0,0,0,0.3); */
  /* margin-bottom: 15px; */
`;
export const TopUpRequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default TopUpRequests
