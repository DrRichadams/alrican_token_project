import React from 'react';
import { 
  Circle,
  CirclrTopTitle,
  CirclrBelowTitle,
  WalletBox,
  WalletAddress,
  WalletType,
  BtnChange,
  StatBox,
  StatTitle,
  CoinBox,
  StatValue,
 } from '../features/DashboardStyledComponents';

export const DashboardCircle = ({value, title}) => {
  return (
    <Circle>
        <CirclrTopTitle>{value}</CirclrTopTitle>
        <CirclrBelowTitle>{title}</CirclrBelowTitle>
    </Circle>
  )
}
export const DashboardWalletBox = ({address, type, onClick}) => {
  return (
    <WalletBox>
      <div>
        <WalletAddress>{address}</WalletAddress>
        <WalletType>{type}</WalletType>
      </div>
      <BtnChange onClick={() => onClick()}>Change</BtnChange>
    </WalletBox>
  )
}
export const DashboardStatBox = ({title, crypt1, crypt2, crypt3}) => {
  return (
    <StatBox>
      <StatTitle>{title}</StatTitle>
      <CoinBox>
        <StatValue>{crypt1.type}</StatValue><StatValue>{crypt1.value}</StatValue>
      </CoinBox>
      <CoinBox>
        <StatValue>{crypt2.type}</StatValue><StatValue>{crypt2.value}</StatValue>
      </CoinBox>
      <CoinBox>
        <StatValue>{crypt3.type}</StatValue><StatValue>{crypt3.value}</StatValue>
      </CoinBox>
    </StatBox>
  )
}
