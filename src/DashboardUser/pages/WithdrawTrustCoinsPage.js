import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { UserAuth } from '../../contexts/AuthContext';
import { TiWarning } from "react-icons/ti";


const CircleDetailer = ({tc, usd}) => {
  return(
      <CircleDetailerContainer>
        <Label>Available</Label>
        <Value>{tc} TC</Value>
        <Value>USD ${usd}</Value>
      </CircleDetailerContainer>
  )
}

const WithdrawTrustCoinsPage = () => {
  const {coinrate, trustcoins} = UserAuth();
  const [toWithdraw, setToWithdraw] = useState(null)
  const [error, setError] = useState(null)
  console.log("Rate", coinrate)

  const usdAmountFunc = (rate, coins) => rate * coins

  const checkValidity = (reqAmount, rate, available) => {
    if(reqAmount > usdAmountFunc(rate, available)){
      setError("You cannot withdraw an amount larger than the available balance")
    } else return true
  }

  const handleChange = (e) => {
    if(checkValidity(e.target.value, coinrate, trustcoins.coins)) {
      if(!isNaN(e.target.value)){
        setError(null)
        setToWithdraw(e.target.value)
      }
    }
  }
    
  return (
    <WithDrawContainer>
      {trustcoins && <CircleDetailer tc={trustcoins.coins} usd={usdAmountFunc(trustcoins.coins, coinrate)} />}
      <MainTitle>Withdraw from your trust coins</MainTitle>
      {error && 
        <ErrorBox>
          <TiWarning size={25} />
          <ErrorText>{error}</ErrorText>
        </ErrorBox>
      }
      
      <InputContainer>
          <InputLabel>USD$</InputLabel>
          <Input placeholder='Amount to withdraw' onChange={(e) => handleChange(e)} value={toWithdraw} />
      </InputContainer>
      { toWithdraw && <RequestBtn>Request withdraw</RequestBtn> }
    </WithDrawContainer>
  )
}


export const ErrorBox = styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.accentShadow};
    padding: 12px;
    border-radius: 6px;
    gap: 15px;
    color: ${colors.accent};
    margin: 15px 0 20px 0;
`;
export const ErrorText = styled.p`
    margin: 0;
`;

export const RequestBtn = styled.button`
  background-color: ${colors.accent};
  border: none;
  outline: none;
  padding: 12px;
  margin-top: 18px;
  color: #fff;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  transition: all .25s ease-in-out;
  :hover {
    background-color: ${colors.accentShadow};
    color: #01050f;
  }
`;
export const Input = styled.input`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  padding: 12px;
  border: none;
  outline: none;
  background-color: rgba(192,192,192, .5);
  border-radius: 0 6px 6px 0;;
`;
export const InputLabel = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  background-color: rgba(192,192,192, .5);
  padding: 12px;
  border-radius: 6px 0 0 6px;
`;
export const InputContainer = styled.div`
  margin: 0;
  font-family: Roboto, sans-serif;
  display: flex;
  align-items: center;
`;
export const MainTitle = styled.p`
  margin: 30px 0 20px 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #01050f;
`;
export const Value = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
`;
export const Label = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-family: Inter, sans-serif;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${colors.accent};
`;
export const CircleDetailerContainer = styled.div`
  box-shadow: 1px 1px 8px rgba(192,192,192,0.3);
  background-color: #f5f5f5;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const WithDrawContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default WithdrawTrustCoinsPage
