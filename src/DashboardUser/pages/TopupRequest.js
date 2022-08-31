import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../constants/colors';
import { Highlight } from '../../pages/HomePage';
import { UserAuth } from '../../contexts/AuthContext';
import { trustcoin_to_usd } from '../features/formulars';


const AddressRender = ({btc, eth, trn, address}) => {
  if(btc || eth || trn) {
    return (
      <WalletAddressBox>
        <WalletAddress>{address}</WalletAddress>
      </WalletAddressBox>
    )
  } 
  
}

const TopupRequest = () => {
  const [amount, setamount] = useState('')
  const [btcState, setBtcState] = useState(false);
  const [ethState, setEthState] = useState(false);
  const [trnState, setTrnState] = useState(false);
  const [currentWalletName, setcurrentWalletName] = useState(false);
  const [currentAddress, setcurrentAddress] = useState('');

  const {bitcoinwallets, ethereumwallets, tronwallets, trustcoins, coinrate} = UserAuth();
  const BTC = bitcoinwallets.find(item => item.isActive);
  const ETH = ethereumwallets.find(item => item.isActive);
  const TRN = tronwallets.find(item => item.isActive);


  console.log("Wallets", BTC)
  
  const navigate = useNavigate();

  const handleWalletChange = (type) => {
    if(type === "btc") {
      setBtcState(true); setEthState(false);
      setTrnState(false); setcurrentAddress(BTC.address)
      setcurrentWalletName(BTC.name)
    }
    if(type === "eth") {
      setBtcState(false); setEthState(true);
      setTrnState(false); setcurrentAddress(ETH.address)
      setcurrentWalletName(ETH.name)
    }
    if(type === "trn") {
      setBtcState(false); setEthState(false);
      setTrnState(true); setcurrentAddress(TRN.address)
      setcurrentWalletName(TRN.name)
    }
  }

  const handleAmountChange = (e) => {
      if(isNaN(e.target.value)) return
      setamount(e.target.value)
  }

  const handleProceed = () => {
    if(amount.length !== 0 && WalletAddress.length !== 0) {
      navigate("/user_dash/topup_thanks", {
        state: {
          amount, currentAddress, currentWalletName
        }
      })
    }
  }

  return (
    <div>
      <MainTitle>Top up <Highlight>TRUST COIN</Highlight> form</MainTitle>
      <MainWarning>Please fill in the form correctly and ensure you send funds to the correct crypto address</MainWarning>
      <SummeryContainer>
        <SummeryBox>
            <SummeryBoxTitle><Highlight>TRUST COINS</Highlight> in store</SummeryBoxTitle>
            <SummeryBoxItem>{trustcoins.coins} TC</SummeryBoxItem>
        </SummeryBox>
        <SummeryBox>
            <SummeryBoxTitle>Current Rate per USD$ 1</SummeryBoxTitle>
            <SummeryBoxItem>{coinrate} TC</SummeryBoxItem>
        </SummeryBox>
        <SummeryBox>
            <SummeryBoxTitle>How much I have</SummeryBoxTitle>
            <SummeryBoxItem>USD$ {trustcoin_to_usd(trustcoins.coins, coinrate)}</SummeryBoxItem>
        </SummeryBox>
      </SummeryContainer>
      <div className="amount_box">
        <HowMuchTitle>How much do you want to top up</HowMuchTitle>
        <Input type="text" placeholder='Enter top up amount in USD$' onChange={(e) => handleAmountChange(e)} value={amount} />
      </div>
      <div className="walletBox">
        <HowMuchTitle>Select wallet type</HowMuchTitle>
        <CryptoBtnContainer>
            <CryptoBtn status={btcState} onClick={() => handleWalletChange("btc")}>Bitcoin</CryptoBtn>
            <CryptoBtn status={ethState} onClick={() => handleWalletChange("eth")}>Ethereum</CryptoBtn>
            <CryptoBtn status={trnState} onClick={() => handleWalletChange("trn")}>Tron</CryptoBtn>
        </CryptoBtnContainer>
          {/* TH PROVIDE PROPS TO THIS COMPONENT */}
          <AddressRender btc={btcState} eth={ethState} trn={trnState} address={currentAddress} />
        <ButtonsBox>
            <NextBtn onClick={handleProceed}>Next</NextBtn>
        </ButtonsBox>
      </div>
    </div>
  )
}


  export const HowMuchTitle = styled.h3`
    margin: 30px 0 6px 0;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-size: 13px;
  `;
  export const SummeryBoxTitle = styled.h4`
    margin: 0;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-size: 13px;
  `;

  export const SummeryBoxItem = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #01050f;
    margin-top: 3px;
  `;


  export const MainWarning = styled.p`
      margin: 0 0 25px 0;
      font-family: Roboto, sans-serif;
      margin-top: 3px;
  `;
  export const MainTitle = styled.h3`
      margin: 0;
      text-transform: uppercase;
      font-family: Inter, sans-serif;
  `;
  export const CryptoBtnContainer = styled.div`
      display: flex;
      gap: 8px;
      align-items: center;
  `;

  export const CryptoBtn = styled.button`
      padding: 6px 12px;
      width: 100px;
      background-color: #fff;
      color: ${props=>props.status ? colors.accent : "#01050f"};
      border: 2px solid ${props=>props.status ? colors.accent : "transparent"};
      font-family: Roboto, sans-serif;
      cursor: pointer;
      transition: all .25s ease-in-out;
        :hover {
            border-color: ${colors.accent};
            color: ${colors.accent};
      }
  `;

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
export const NextBtn = styled.button`
    padding: 15px;
    width: 200px;
    border: 2px solid ${colors.accent};
    background-color: ${colors.accentShadow};
    color: #01050f;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const WalletAddressBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 6px;
    width: 100%;
    background-color: ${colors.accent};
    margin: 12px 0;
    box-sizing: border-box;
`;
export const WalletAddress = styled.p`
    margin: 0;
    color: #01050f;
    /* background-color: red; */
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px;
    border-radius: 6px;
    border: 2px solid #fff;
`;
export const SummeryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    @media (max-width: 645px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
`;

export const SummeryBox = styled.div`
    background-color: ${colors.accentShadow};
    padding: 12px;
    border-radius: 6px;
`;

export const Input = styled.input`
    padding: 12px;
    width: 100%;
    border: none;
    border-bottom: 3px solid ${colors.accent};
    outline: none;
`;

export default TopupRequest
