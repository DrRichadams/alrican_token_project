import React from 'react';
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import { DashboardCircles, DashboardRects, UserWallets, WalletsTitle, UserStats } from '../features/DashboardStyledComponents';
import { DashboardCircle, DashboardWalletBox, DashboardStatBox } from '../comps/DashboardComps';


const Dashboard = () => {
  return (
    <div>
        <PageTitles name="Richard" location="Dashboard" />
        <DashboardCircles>
          <DashboardCircle value="80" title="Trust coin current rate" />
          <DashboardCircle value="100" title="Current signing up fee" />
          <DashboardCircle value="10%" title="Affiliates percentage" />
          <DashboardCircle value="$1000" title="Affiliates expenses" />
          <DashboardCircle value="100" title="Currently active Users" />
          <DashboardCircle value="150" title="Currenty unverified Users" />
          <DashboardCircle value="50" title="Coin topup requests" />
          <DashboardCircle value="20" title="Withdraw requests" />
        </DashboardCircles>

        <DashboardRects>
          <UserWallets>
            <WalletsTitle>Wallets in use</WalletsTitle>
            <DashboardWalletBox address="ITCP-AAED-EGEW-GWER-ERFF" type="Bitcoin" onClick={() => {}} />
            <DashboardWalletBox address="NCPD-AAED-EGEW-GWER-ERFF" type="Etherium" onClick={() => {}} />
            <DashboardWalletBox address="DOPS-AAED-EGEW-GWER-ERFF" type="Dogicoin" onClick={() => {}} />
          </UserWallets>

          <UserStats>

            <DashboardStatBox title="From Trust Coins" crypt1={{type: "BTC", value: "10.0002"}} crypt2={{type: "ETH", value: "13.0002"}} crypt3={{type: "DOG", value: "0.00021"}} />
            <DashboardStatBox title="User fees" crypt1={{type: "BTC", value: "10.0002"}} crypt2={{type: "ETH", value: "13.0002"}} crypt3={{type: "DOG", value: "0.00021"}} />
          </UserStats>
        </DashboardRects>
    </div>
  )
}

export default Dashboard