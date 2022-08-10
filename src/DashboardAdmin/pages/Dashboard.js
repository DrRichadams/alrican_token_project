import React from 'react';
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';


const Dashboard = () => {
  return (
    <div>
        <PageTitles name="Richard" location="Dashboard" />
        <DashboardCircles>
          <Circle>
            <CirclrTopTitle>80</CirclrTopTitle>
            <CirclrBelowTitle>Trust coin current rate</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>100</CirclrTopTitle>
            <CirclrBelowTitle>Current signing up fee</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>10%</CirclrTopTitle>
            <CirclrBelowTitle>Affiliates percentage</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>$1000</CirclrTopTitle>
            <CirclrBelowTitle>Affiliates expenses</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>100</CirclrTopTitle>
            <CirclrBelowTitle>Currently active Users</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>150</CirclrTopTitle>
            <CirclrBelowTitle>Currenty unverified Users</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>50</CirclrTopTitle>
            <CirclrBelowTitle>Coin topup requests</CirclrBelowTitle>
          </Circle>
          <Circle>
            <CirclrTopTitle>20</CirclrTopTitle>
            <CirclrBelowTitle>Withdraw requests</CirclrBelowTitle>
          </Circle>
        </DashboardCircles>
        <div className="dash_rectangles">
          <UserWallets>
            <WalletsTitle>Wallets in use</WalletsTitle>
            <WalletBox>
              <div>
                <WalletAddress>ITCP-AAED-EGEW-GWER-ERFF</WalletAddress>
                <WalletType>Bitcoin</WalletType>
              </div>
              <BtnChange>Change</BtnChange>
            </WalletBox>
            <WalletBox>
              <div>
                <WalletAddress>NCPD-AAED-EGEW-GWER-ERFF</WalletAddress>
                <WalletType>Etherium</WalletType>
              </div>
              <BtnChange>Change</BtnChange>
            </WalletBox>
            <WalletBox>
              <div>
                <WalletAddress>DOPS-AAED-EGEW-GWER-ERFF</WalletAddress>
                <WalletType>Dogicoin</WalletType>
              </div>
              <BtnChange>Change</BtnChange>
            </WalletBox>
          </UserWallets>
          <div className="user_stats">
            <div className="from_coins_stats">
              <p>From Trust Coins</p>
              <div className="coin_box">
                <p>BTC</p><p>10.0002</p>
              </div>
              <div className="coin_box">
                <p>ETH</p><p>13.0002</p>
              </div>
              <div className="coin_box">
                <p>OG</p><p>0.00021</p>
              </div>
            </div>
            <div className="from_user_fees_stats">
              <p>User fees</p>
              <div className="coin_box">
                <p>BTC</p><p>10.0002</p>
              </div>
              <div className="coin_box">
                <p>ETH</p><p>13.0002</p>
              </div>
              <div className="coin_box">
                <p>OG</p><p>0.00021</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}


export const WalletType = styled.p`
  color: ${colors.accentShadow};
  margin: 0;
  margin-top: 4px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
`;
export const WalletAddress = styled.p`
  color: #fff;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 13px;
`;
export const WalletsTitle = styled.p`
  color: #fff;
  margin: 15px 0;
  text-transform: uppercase;
  font-family: Inter, sans-serif;
`;

export const BtnChange = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 0;
  color: ${colors.accent};
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  font-size: 12px;
`;
export const WalletBox = styled.div`
  background-color: #1F2128;
  width: 100%;
  border-radius: 6px;
  padding: 13px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWallets = styled.div`
  background-color: #242731;
  padding: 16px;
  border-radius: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
`;
export const DashboardCircles = styled.div`
  display: flex;
  gap: 12px;
  margin: 25px 0;
`;
export const CirclrTopTitle = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  color: ${colors.accent};
`;

export const CirclrBelowTitle = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(192,192,192,1);
  margin-top: 4px;
`;


export const Circle = styled.div`
  background-color: #242731;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6px;
  box-sizing: border-box;
`;

export default Dashboard
