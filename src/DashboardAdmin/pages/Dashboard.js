import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import { DashboardCircles, DashboardRects, UserWallets, WalletsTitle, UserStats } from '../features/DashboardStyledComponents';
import { DashboardCircle, DashboardWalletBox, DashboardStatBox } from '../comps/DashboardComps';
import { UserAuth } from '../../contexts/AuthContext';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';


const Dashboard = () => {
  const {coinrate, affiliatespercentage, signupfee, user} = UserAuth();
  const [all_users, set_all_users] = useState([]);
  const [all_affiliates, set_all_affiliates] = useState([]);
  const [verified_users, set_verified_users] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    // const q = query(collection(db, "users"), where("isVerified", "==", `${true}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const my_users = [];
      querySnapshot.forEach((doc) => my_users.push(doc.data()));
      set_all_users(my_users);
    });

    return () => unsubscribe()
  }, [user])

  // console.log("Dash users ", all_users)
  useEffect(() => {
    let tempUsers = all_users.filter(item => item.isVerified);
    set_verified_users(tempUsers)
  }, [all_users])


  // console.log("Dash verified users ", verified_users)
  // console.log("Dash affiliates ", all_affiliates)
  // console.log("Dash refined affiliates ", refinedAffils)

  return ( 
    <div>
        <PageTitles name="Richard" location="Dashboard" />
        <DashboardCircles>
          <DashboardCircle value={`${coinrate} Tokens`} title="Alrican Token rate per 1 USD$" />
          <DashboardCircle value={`USD$${signupfee}`} title="Minimum signing up fee" />
          <DashboardCircle value={`${affiliatespercentage}%`} title="Affiliates percentage" />
          {/* <DashboardCircle value="$1000" title="Affiliates expenses" /> */}
          <DashboardCircle value={verified_users.length} title="Currently active Users" />
          <DashboardCircle value={all_users.length - verified_users.length} title="Currenty unverified Users" />
          <DashboardCircle value="50" title="Coin topup requests" />
          <DashboardCircle value="20" title="Withdraw requests" />
        </DashboardCircles>

        <DashboardRects>
          <UserWallets>
            <WalletsTitle>Wallets in use</WalletsTitle>
            <DashboardWalletBox address="ITCP-AAED-EGEW-GWER-ERFF" type="Bitcoin" onClick={() => {}} />
            <DashboardWalletBox address="NCPD-AAED-EGEW-GWER-ERFF" type="Etherium" onClick={() => {}} />
            <DashboardWalletBox address="DOPS-AAED-EGEW-GWER-ERFF" type="Tron" onClick={() => {}} />
          </UserWallets>

          <UserStats>

            <DashboardStatBox title="From Alrican Tokens" crypt1={{type: "BTC", value: "10.0002"}} crypt2={{type: "ETH", value: "13.0002"}} crypt3={{type: "DOG", value: "0.00021"}} />
            <DashboardStatBox title="User fees" crypt1={{type: "BTC", value: "10.0002"}} crypt2={{type: "ETH", value: "13.0002"}} crypt3={{type: "Tron", value: "0.00021"}} />
          </UserStats>
        </DashboardRects>
    </div>
  )
}

export default Dashboard