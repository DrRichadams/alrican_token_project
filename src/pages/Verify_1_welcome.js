import React from 'react';
import styled from 'styled-components';
import { useNavigate, Navigate } from "react-router-dom";
import { UserAuth } from '../contexts/AuthContext';
import { SectionContainer } from '../features/SectionContainer';
import { colors } from '../constants/colors';
import MinMenuBar from '../features/MinMenuBar';
import { RiErrorWarningLine } from "react-icons/ri";

import { 
  WalletsContainer,
  // WalletBox,
  WarningText,
  WarningBox,
  VerMessage2,
  VerMessage1,
  VerTitle,
  MessageContainer,
 } from '../features/VerifyStyledComponents';

const Verify_1_welcome = () => {
  const navigate = useNavigate();

  const {userdata, signupfee, bitcoinwallets, ethereumwallets, tronwallets, routedata} = UserAuth();

  if(routedata?.hasProof) return <Navigate to="/verify4" />

  const activeBTN = bitcoinwallets?.find(item=>item.isActive);
  const activeETH = ethereumwallets?.find(item=>item.isActive);
  const activeTRN = tronwallets?.find(item=>item.isActive);
  // console.log("BTC wallets", bitcoinwallets)
  // console.log("active wallet", activeBTN)
  
  const handleSelect = (wallet) => {
    let wAddress;
    if(wallet === "bitcoin") wAddress = activeBTN;
    if(wallet === "ethereum") wAddress = activeETH;
    if(wallet === "tron") wAddress = activeTRN;
    bitcoinwallets && navigate("/verify2", {state: {
      wallet,
      address: wAddress.address,
      wallet_name: wAddress.name,
    }})
  }

  return (
    <SectionContainer>
      <MinMenuBar />
      <MessageContainer>
          <VerTitle>Welcome {userdata && userdata.names}</VerTitle>
          <VerMessage1>Thank you for joining our amazing family</VerMessage1>
          <VerMessage2>
            To continue and start using our services, pay a none-refundable fee of <Fee>USD$ {signupfee}</Fee> to any one of the following crypto wallets
          </VerMessage2>
          <WarningBox>
            <RiErrorWarningLine size={30} color={colors.accent} />
            <WarningText>Please, keep a record of the transaction, it will be required later for verification</WarningText>
          </WarningBox>
          <AlreadyPaidBox onClick={() => navigate("/verify3")}>Already paid?</AlreadyPaidBox>
      </MessageContainer>

      <WalletsContainer>
          <WalletBox onClick={() => handleSelect("bitcoin")}>
            <ImgIcon src={process.env.PUBLIC_URL + "/icons/bitcoin.png"} alt="" />
            <WalletTitle>Bitcoin</WalletTitle>
          </WalletBox>
          <WalletBox onClick={() => handleSelect("ethereum")}>
            <ImgIcon src={process.env.PUBLIC_URL + "/icons/ethereum.png"} alt="" />
            <WalletTitle>Ethereum</WalletTitle>
          </WalletBox>
          <WalletBox onClick={() => handleSelect("tron")}>
            <ImgIcon src={process.env.PUBLIC_URL + "/icons/tron.png"} alt="" />
            <WalletTitle>Tron</WalletTitle>
          </WalletBox>
      </WalletsContainer>
    </SectionContainer>
  )
}



export const AlreadyPaidBox = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    color: ${colors.accent};
    cursor: pointer;
    transition: all .25s ease-in-out;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    margin: 0;
    :hover {
      color: red;
      text-decoration: underline;
      transform: scale(1.1);
    }
`;

export const WalletBox = styled.button`
    box-sizing: border-box;
    background-color: rgba(192,192,192,.4);
    min-height: 250px;
    height: 100%;
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
      transform: scale(.97);
      background-color: rgba(192,192,192,.7);
    }
`;
export const ImgIcon = styled.img`
    width: 100px;
`;
export const WalletTitle = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
    margin: 0;
`;
export const Fee = styled.span`
    color: ${colors.accent};
`;

export default Verify_1_welcome
