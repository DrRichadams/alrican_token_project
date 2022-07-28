import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';
import { RiErrorWarningLine } from "react-icons/ri";
import { colors } from '../constants/colors';

import { VerTitle, VerMessage1, MessageContainer, WarningBox, WarningText } from '../features/VerifyStyledComponents';

const Verify_2_payment = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <MessageContainer>
          <VerTitle>Paying with Bitcoin</VerTitle>
          <VerMessage1>Scan the QR code or use the wallet address below</VerMessage1>
      </MessageContainer>
      <Margins>
        <WarningBox>
          <RiErrorWarningLine size={30} color={colors.accent} />
          <WarningText>Make sure you have proof of payment before you continue</WarningText>
        </WarningBox>
      </Margins>
          <PayOptions>
            <QrCodeContainer>
              <Img src={process.env.PUBLIC_URL + "icons/qrcode.jpg"} alt="" />
            </QrCodeContainer>
            <WalletAddress>
              <WalletTitle>Wallet Address</WalletTitle>
              <WalletAddressBox>
                <AddressText>1192-2252-7634-8835</AddressText>
                <BtnCopy>Copy</BtnCopy>
              </WalletAddressBox>
            </WalletAddress>
          </PayOptions>

          <BtnContainer>
            <ContBtn>Continue</ContBtn>
          </BtnContainer>
    </SectionContainer>
  )
}


export const WalletAddress = styled.div`
  width: 100%;
`;
export const WalletAddressBox = styled.div`
  width: 100%;
`;
export const AddressText = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 600;
  background-color: rgba(212,212,212,.4);
  width: 95%;
  padding: 12px;
  margin: 15px 0;
  /* display: block; */
  border-radius: 6px;
`;
export const BtnCopy = styled.button`
  border: none;
  background-color: ${colors.accent};
  color: ${colors.secondary};
  padding: 8px;
  border-radius: 15px;
  width: 60px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    background-color: ${colors.accentShadow};
    color: ${colors.accent};
  }
`;
export const WalletTitle = styled.h4`
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin: 0;
  color: ${colors.accent};
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const ContBtn = styled.button`
    background-color: ${colors.accent};
    color: ${colors.secondary};
    border: none;
    border-radius: 6px;
    max-width: 300px;
    width: 100%;
    padding: 12px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    :hover {
      background-color: ${colors.accentShadow};
      color: ${colors.accent};
    }
`;
export const Margins = styled.div`
    margin: 20px 0;
`;
export const PayOptions = styled.div`
    display: flex;
    margin: 20px 0;
    gap: 40px;
`;
export const Img = styled.img`
    width: 100%;
`;
export const QrCodeContainer = styled.div`
    max-width: 300px;
`;

export default Verify_2_payment
