import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import { useLocation } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: colors.accent,
  };

const ConfirmWithdrawRequest = () => {
    const [loading, setloading] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const {addWithdrawRequest, user} = UserAuth();

    const handleProceed = () => {
        setloading(true)
        addWithdrawRequest(
            user.uid, 
            location.state.type, 
            location.state.wallet_type, 
            location.state.wallet_address, 
            location.state.amount)
            .then(() => {
                setloading(false);
                navigate("/user_dash/withdraw_receipt");
                window.location.reload();
            }
        );
    }
    const handleCancel = () => { navigate("/user_dash/withdrawCoins") }
    
  return (
    <div>
        <Header>
            <h3>Confirm withdraw</h3>
            <HeaderBtns>
                {!loading && <CancelBtn onClick={handleCancel}>Something is wrong</CancelBtn> }
                <ProceedBtn onClick={handleProceed}>
                    { !loading && <span>Proceed with request</span> }
                </ProceedBtn>
                    <BeatLoader color={colors.accent} loading={loading} cssOverride={override} size={15} />
            </HeaderBtns>
        </Header>
        <p>
            Thoroughly go through the details you provided before continuing.
            Ensure that your wallet address is correct to avoid having your funds sent elsewhere
        </p>
        <div>
            <DetailBox>
                <DetailTitle>Amount</DetailTitle>
                <Detail>USD$ {location.state.amount}</Detail>
            </DetailBox>
            <DetailBox>
                <DetailTitle>Wallet type</DetailTitle>
                <Detail>{location.state.wallet_type}</Detail>
            </DetailBox>
            <DetailBox>
                <DetailTitle>Withdrawing from</DetailTitle>
                <Detail>{location.state.type}</Detail>
            </DetailBox>
            <DetailBox>
                <DetailTitle>Wallet address</DetailTitle>
                <Detail>{location.state.wallet_address}</Detail>
            </DetailBox>
        </div>
    </div>
  )
}


export const GeneralBtn = styled.button`
    border: none;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        color: red;
        text-decoration: underline;
    }
`;
export const ProceedBtn = styled(GeneralBtn)`
    color: ${colors.accent};
`;
export const CancelBtn = styled(GeneralBtn)`
    color: orangered;
`;
export const HeaderBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export default ConfirmWithdrawRequest
