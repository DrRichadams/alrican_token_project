import React from 'react';
import styled from 'styled-components';
import { UserAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import { RiErrorWarningFill } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const WithdrawReceipt = () => {
    const navigate = useNavigate();
    const {withdrawRequest, removeWithdrawRequest, user} = UserAuth();
    console.log("Withdraw", withdrawRequest)

    if(!withdrawRequest) return <ClipLoader color={colors.accent} loading={true} cssOverride={override} size={150} />

    const cancelRequest = () => {
        removeWithdrawRequest(user.uid).then(() => {
            navigate("/user_dash");
            // window.location.reload();
        });
    }

  return (
    <div>
        <h3>Withdraw statement</h3>
        <WarningContainer>
            <div className="warningBox">
                <RiErrorWarningFill size={50} />
            </div>
            <div className="centerBox">
                <WarningTitle>Warning</WarningTitle>
                <WarningMessage>You are not allowed to make another withdraw request while another one is pending.</WarningMessage>
            </div>
            <WarningTerminate onClick={cancelRequest}>Terminate request</WarningTerminate>
        </WarningContainer>
      <div>
        <DetailBox>
            <DetailTitle>Amount</DetailTitle>
            <Detail>USD$ {withdrawRequest?.amount}</Detail>
        </DetailBox>
        <DetailBox>
            <DetailTitle>Wallet type</DetailTitle>
            <Detail>{withdrawRequest?.walletType}</Detail>
        </DetailBox>
        <DetailBox>
            <DetailTitle>Withdrawing from</DetailTitle>
            <Detail>{withdrawRequest?.type}</Detail>
        </DetailBox>
        <DetailBox>
            <DetailTitle>Wallet address</DetailTitle>
            <Detail>{withdrawRequest?.walletAddress}</Detail>
        </DetailBox>
    </div>
    </div>
  )
}

export const WarningTerminate = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    color: blue;
    cursor: pointer;
    text-decoration: underline;
    transition: all .25s ease-in-out;
    :hover {
        color: red;
    }
`;
export const WarningContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(245, 171, 0, .2);
    color: rgb(245, 171, 0);
    padding: 12px;
    border-radius: 6px;
`;
export const WarningTitle = styled.h4`
    margin: 0;
    color: orangered;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
`;
export const WarningMessage = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    color: #01050f;
`;
export const Detail = styled.p`
    margin: 0;
    font-family: Inter, sans-serif;
    font-weight: 600;
`;
export const DetailTitle = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
`;
export const DetailBox = styled.div`
    /* background-color: ${colors.accentShadow}; */
    /* padding: 12px 25px; */
    padding: 12px 0;
    /* border-radius: 6px; */
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 2px solid ${colors.accent}; */
    border-bottom: 2px solid ${colors.accent};
`;

export default WithdrawReceipt
