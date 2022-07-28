import React from 'react';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';
import { VerTitle, VerMessage1, MessageContainer } from '../features/VerifyStyledComponents';
import styled from 'styled-components';

const Verify_3_proof = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <MessageContainer>
          <VerTitle>Submit proof of payment</VerTitle>
          <VerMessage1>Take a screenshot of your transaction and submit it here</VerMessage1>
          <div className="select">
            <p>Select your screenshot from your computer storage</p>
            <input type="file" />
          </div>
      </MessageContainer>
      <button className="submit">Submit proof of payment</button>
    </SectionContainer>
  )
}

export const DragnDrop = styled.div`
    
`;

export default Verify_3_proof
