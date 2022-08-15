import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import MenuBtn from './MenuBtn';
import { colors } from '../../constants/colors';
import { USERS } from '../../constants/DATA';

const PageMenus = ({place}) => {
    const location = useLocation();
    const navigate = useNavigate();
  
    if(place === "verify") {
        return (
            <Menu>
                <ControlsContainer>
                    <MenuBtn title="Potentially paid accounts" active={location.pathname.includes("potentially_paid")} link="" clickable={() => navigate("potentially_paid")} />
                    <MenuBtn title="Unpaid accounts" active={location.pathname.includes("unpaid_accounts")} link="" clickable={() => navigate("unpaid_accounts")} />
                    {/* <MenuBtn title="All accounts" active={location.pathname.includes("all_accounts")} link="" clickable={() => navigate("all_accounts")} /> */}
                    <MenuBtn title="Active accounts" active={location.pathname.includes("all_accounts")} link="" clickable={() => navigate("all_accounts")} />
                </ControlsContainer>
                {/* <AllAccountsBadge>Total accounts | {USERS.length}</AllAccountsBadge> */}
              </Menu>
          )
    }

    if(place === "withdraw_requests") {
        return (
            <Menu>
                <ControlsContainer>
                    <MenuBtn title="Pending requests" active={location.pathname.includes("pending_requests")} link="" clickable={() => navigate("pending_requests")} />
                    <MenuBtn title="Approved requests" active={location.pathname.includes("approved_requests")} link="" clickable={() => navigate("approved_requests")} />
                    <MenuBtn title="Rejected requests" active={location.pathname.includes("rejected_requests")} link="" clickable={() => navigate("rejected_requests")} />
                </ControlsContainer>
                {/* <AllAccountsBadge>Total requests | {USERS.length}</AllAccountsBadge> */}
              </Menu>
          )
    }

    if(place === "set_rates") {
        return (
            <Menu>
                <ControlsContainer>
                    <MenuBtn title="Trust coin rate" active={location.pathname.includes("trust_coin_rate")} link="" clickable={() => navigate("trust_coin_rate")} />
                    <MenuBtn title="Affiliates fee" active={location.pathname.includes("affiliates_fee")} link="" clickable={() => navigate("affiliates_fee")} />
                    <MenuBtn title="Wallet Addresses" active={location.pathname.includes("wallet_addresses")} link="" clickable={() => navigate("wallet_addresses")} />
                </ControlsContainer>
                {/* <AllAccountsBadge>Total requests | {USERS.length}</AllAccountsBadge> */}
              </Menu>
          )
    }

    if(place === "top_up_requests") {
        return (
            <Menu>
                <ControlsContainer>
                    <MenuBtn title="Requests" active={location.pathname.includes("awaiting")} link="" clickable={() => navigate("awaiting")} />
                    <MenuBtn title="History" active={location.pathname.includes("history")} link="" clickable={() => navigate("history")} />
                </ControlsContainer>
                {/* <AllAccountsBadge>Total requests | {USERS.length}</AllAccountsBadge> */}
              </Menu>
          )
    }

    if(place === "tees") {
        return (
            <Menu>
                <ControlsContainer>
                    <MenuBtn title="Ts & Cs for Trust Coins" active={location.pathname.includes("trust_coins")} link="" clickable={() => navigate("trust_coins")} />
                    <MenuBtn title="Ts & Cs for Affiliats" active={location.pathname.includes("affiliates")} link="" clickable={() => navigate("affiliates")} />
                </ControlsContainer>
                {/* <AllAccountsBadge>Total requests | {USERS.length}</AllAccountsBadge> */}
              </Menu>
          )
    }
}


export const AllAccountsBadge = styled.div`
    color: #fff;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
`;

export const ControlsContainer = styled.div`
    display: flex;
    gap: 30px;
`;
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0 20px 0;
`;

export default PageMenus
