import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';


const CircleDetailer = ({tc, usd}) => {
  return(
      <CircleDetailerContainer>
        <Label>Available</Label>
        <Value>{tc} TC</Value>
        <Value>USD ${usd}</Value>
      </CircleDetailerContainer>
  )
}

const WithdrawTrustCoinsPage = () => {
    
  return (
    <WithDrawContainer>
      <CircleDetailer tc="0.0852" usd="280" />
    </WithDrawContainer>
  )
}


export const Value = styled.p`

`;
export const Label = styled.p`

`;
export const CircleDetailerContainer = styled.div`
  box-shadow: 1px 1px 8px rgba(192,192,192,0.3);
  background-color: #f5f5f5;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const WithDrawContainer = styled.div`

`;

export default WithdrawTrustCoinsPage
