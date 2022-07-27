import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../features/SectionContainer';
import { colors } from '../constants/colors';
import MinMenuBar from '../features/MinMenuBar';

const Verify_1_welcome = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <div className="messages">
          <h1 className="title1">Welcome Nadim.</h1>
          <h3>Thank you for joining our amazing family.</h3>
          <p>
            To continue and start using our services, pay a none-refundable fee of USD$ 50 to any one of the following crypto wallets.
          </p>
          <div className="warning">
            <p>Please, keep a record of the transaction, it will be required late for verification.</p>
          </div>
      </div>

      <div className="wallets">
          <div className="wallet_box">
            <div className="icon">O</div>
            <p className="name">Bitcoin</p>
          </div>
          <div className="wallet_box">
            <div className="icon">O</div>
            <p className="name">Ethereum</p>
          </div>
          <div className="wallet_box">
            <div className="icon">O</div>
            <p className="name">Dogie Coin</p>
          </div>
      </div>
    </SectionContainer>
  )
}

export default Verify_1_welcome
