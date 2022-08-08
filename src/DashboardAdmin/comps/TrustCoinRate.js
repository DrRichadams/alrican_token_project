import React from 'react';
import styled from 'styled-components';
import AffiliatesCircle from './AffiliatesCircle';
import LongInput from './LongInput';

const TrustCoinRate = () => {
  return (
    <div>
      <AffiliatesCircle fee="0.000859" label="Current rate in TC/USD$ 1"/>
      <Inputs>
        <LongInput 
            title="Set current rate" 
            prefix="TC" 
            placeholder="New rate in TC" 
            btnText="Update" 
          />
      </Inputs>
    </div>
  )
}


export const Inputs = styled.div`
  margin-top: 20px;
`;

export default TrustCoinRate
