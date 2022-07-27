import React from 'react';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';

const Verify_4_thanks = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <div className="messages">
          <h1 className="title1">Thank you for choosing to invest with us</h1>
          <p>Currently awaiting account and payment verification.</p>
          <div className="warning">
            <p>This shouln't take more than 2 working days</p>
          </div>
      </div>
    </SectionContainer>
  )
}

export default Verify_4_thanks
