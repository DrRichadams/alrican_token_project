import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';
import { RiErrorWarningLine } from "react-icons/ri";
import { colors } from '../constants/colors';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

import { VerTitle, VerMessage1, MessageContainer, WarningBox, WarningText } from '../features/VerifyStyledComponents';


const getData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  try {
      const data = docSnap.data();
      return data
  } catch (error) {console.log("My error", error)}}

  
const Verify_2_payment = () => {
  const [amount, setAmount] = useState('')
  const [error, seterror] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();
  const {signupfee, user, setAffiliateFee} = UserAuth();

  const handleChange = (e) => {
    if(!isNaN(e.target.value)) {
      seterror(null);
      setAmount(e.target.value)
    }
  }

  const handleNext = () => {
    if(amount.length == 0) {
      seterror("Please provide the amount you wish to pay");
      return
    }
    if(Number(amount) < Number(signupfee)) {
      seterror(`The minimum amount is USD$ ${signupfee}`)
      return
    }
    seterror(null);
    getData(user.uid).then((data) => {
      setAffiliateFee(data.refererId, user.uid, amount)
    })
    navigate("/verify3")
  }

  return (
    <SectionContainer>
      <MinMenuBar />
      <MessageContainer>
          <VerTitle>Paying with {location.state?.wallet}</VerTitle>
          <VerMessage1>Verify you have chosen the correct wallet and use the wallet address below</VerMessage1>
      </MessageContainer>
      <Margins>
        <WarningBox>
          <RiErrorWarningLine size={30} color={colors.accent} />
          <WarningText>Make sure you have proof of payment before you continue</WarningText>
        </WarningBox>
      </Margins>
          <PayOptions>
            <QrCodeContainer>
              <Img src={process.env.PUBLIC_URL + `icons/${location.state?.wallet}.png`} alt="" />
            </QrCodeContainer>
            <WalletAddress>
              <WalletTitle>Wallet Address</WalletTitle>
              <WalletAddressBox>
                <AddressText>{location.state?.address}</AddressText>
                {/* <BtnCopy>Copy</BtnCopy> */}
              </WalletAddressBox>
              <CustomeAmount>
                <AmountLabel>USD$</AmountLabel>
                <AmountInput 
                    type="text" 
                    placeholder="Enter the amount you want to pay" 
                    required={true}
                    onChange={(e) => handleChange(e)}
                    value={amount}
                    />
              </CustomeAmount>
              {error && <ErrorBox>{error}</ErrorBox>}
            </WalletAddress>
          </PayOptions>

          <BtnContainer>
            <ContBtn onClick={() => handleNext()}>Continue</ContBtn>
          </BtnContainer>
    </SectionContainer>
  )
}



export const ErrorBox = styled.div`
  padding: 12px 20px;
  color: red;
  font-family: Poppins, sans-serif;
  font-style: italic;
  font-size: 13px;
`;
export const CustomeAmount = styled.div`
  background-color: ${colors.accentShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  border-radius: 6px;
  box-sizing: border-box;
`;

export const AmountLabel = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

export const AmountInput = styled.input`
  padding: 12px;
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  background-color: transparent;
  flex: 1;
`;


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
  word-wrap: break-word;
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
    @media (max-width: 680px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;
export const Img = styled.img`
    width: 100%;
`;
export const QrCodeContainer = styled.div`
    max-width: 300px;
    @media (max-width: 680px) {
      max-width: 200px;
    }
`;

export default Verify_2_payment
