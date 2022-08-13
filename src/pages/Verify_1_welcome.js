import React from 'react';
import styled from 'styled-components';
import { UserAuth } from '../contexts/AuthContext';
import { SectionContainer } from '../features/SectionContainer';
import { colors } from '../constants/colors';
import MinMenuBar from '../features/MinMenuBar';
import { RiErrorWarningLine } from "react-icons/ri";

import { 
  WalletsContainer,
  WalletBox,
  WarningText,
  WarningBox,
  VerMessage2,
  VerMessage1,
  VerTitle,
  MessageContainer,
 } from '../features/VerifyStyledComponents';

const Verify_1_welcome = () => {

  const {userdata} = UserAuth();

  return (
    <SectionContainer>
      <MinMenuBar />
      <MessageContainer>
          <VerTitle>Welcome {userdata && userdata.names}</VerTitle>
          <VerMessage1>Thank you for joining our amazing family</VerMessage1>
          <VerMessage2>
            To continue and start using our services, pay a none-refundable fee of USD$ 50 to any one of the following crypto wallets
          </VerMessage2>
          <WarningBox>
            <RiErrorWarningLine size={30} color={colors.accent} />
            <WarningText>Please, keep a record of the transaction, it will be required later for verification</WarningText>
          </WarningBox>
      </MessageContainer>

      <WalletsContainer>
          <WalletBox>
            <div className="icon">O</div>
            <p className="name">Bitcoin</p>
          </WalletBox>
          <WalletBox>
            <div className="icon">O</div>
            <p className="name">Ethereum</p>
          </WalletBox>
          <WalletBox>
            <div className="icon">O</div>
            <p className="name">Tron</p>
          </WalletBox>
      </WalletsContainer>
    </SectionContainer>
  )
}

export default Verify_1_welcome
