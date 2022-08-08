import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const WithdrawRequestBox = ({name, email, from, amount, onClick}) => {
  return (
    <RequestBox onClick={onClick}>
        <RequestItem>{name}</RequestItem>
        <RequestItem>{email}</RequestItem>
        <NatureOfRequest>
            <FromBox>
            <FooterItems>{from}</FooterItems>
            <RequestTitle>From</RequestTitle>
            </FromBox>
            <AmountBox>
            <FooterItems>USD$ {amount}</FooterItems>
            <RequestTitle>Amount</RequestTitle>
            </AmountBox>
        </NatureOfRequest>
    </RequestBox>
  )
};


export const RequestTitle = styled.p`
  margin: 0;
  color: rgba(192,192,192,.5);
`;
export const AmountBox = styled.div`
  
`;
export const FromBox = styled.div`
  
`;
export const NatureOfRequest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  border-top: 1px solid ${colors.accent};
  padding-top: 10px;
`;
export const FooterItems = styled.p`
  margin: 0;
  color: ${colors.accent};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 13px;
`;
export const RequestItem = styled.p`
  margin: 8px 0;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 300;
`;
export const RequestBox = styled.div`
  background-color: #242731;
  /* height: 100px; */
  box-sizing: border-box;
  padding: 12px;
  border-radius: 6px;
  /* margin: 15px; */
  /* box-shadow: 3px 3px 12px rgba(0,0,0,0.3); */
  /* border: 1px solid ${colors.accentShadow}; */
  border-top: 1px solid ${colors.accentShadow};
  transition: all .5s ease-in-out;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 12px rgba(0,0,0,0.3);
    transform: scale(0.98);
  }
`;

export default WithdrawRequestBox
