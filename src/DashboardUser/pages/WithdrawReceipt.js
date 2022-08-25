import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const WithdrawReceipt = () => {
  return (
    <div>
      <div>
        <DetailBox>
            <DetailTitle>Amount</DetailTitle>
            <Detail>USD$ 200</Detail>
        </DetailBox>
        <DetailBox>
            <DetailTitle>Wallet type</DetailTitle>
            <Detail>Ethereum</Detail>
        </DetailBox>
        <DetailBox>
            <DetailTitle>Withdrawing from</DetailTitle>
            <Detail>Affiliates</Detail>
        </DetailBox>
        <DetailBox>
            <DetailTitle>Wallet address</DetailTitle>
            <Detail>asdf-asdf-aefw-drwa</Detail>
        </DetailBox>
    </div>
    </div>
  )
}

export const Detail = styled.p`
    margin: 0;
    font-family: Inter, sans-serif;
    font-weight: 600;
`;
export const DetailTitle = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
`;
export const DetailBox = styled.div`
    /* background-color: ${colors.accentShadow}; */
    /* padding: 12px 25px; */
    padding: 12px 0;
    /* border-radius: 6px; */
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 2px solid ${colors.accent}; */
    border-bottom: 2px solid ${colors.accent};
`;

export default WithdrawReceipt
