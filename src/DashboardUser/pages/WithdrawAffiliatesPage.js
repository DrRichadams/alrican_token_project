import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import { affiliatesCut } from '../features/formulars';
import { 
  WithdrawTC_container, BalanceBox, BalanceLabel, Slash, AvailBalanceTitle,
  MainTitle, Disclaimer, Input, Labler, CryptoBtn, CryptoBtnsBox, ReqBtn,
  CyptoSelectTitler, WalletAddressBox,
 } from '../../DashboardAdmin/features/withdrawTrustCoinsPageStyledComps';


 const WalletTaker = ({btc, eth, trn, handleAddressChange, walletAddress}) => {
  if(btc || eth || trn) return(
    <WalletAddressBox>
      <Labler>Provide wallet address for the selected crypto</Labler>
      <Input 
        type="text" 
        placeholder='Enter wallet address for the crypto you selected' 
        required={true} 
        onChange={(e) => handleAddressChange(e)}
        value={walletAddress}
      />
    </WalletAddressBox>
  )
 }
 

const WithdrawAffiliatesPage = () => {
  const [btnState, setBtnState] = useState({btc: false, eth: false, trn: false});
  const [walletAddress, setwalletAddress] = useState('')
  const [walletType, setwalletType] = useState('')

  
  const {affiliates, user, addAffiliatesRequest} = UserAuth();
  const navigate = useNavigate();
  
  const displayAffiliates = affiliates.filter(item => {
    return item.isVerified && !item.isClaimed
  })
  
  let amount = affiliatesCut(displayAffiliates);

  const handleMode = (type) => {
    if(type === "btc") {
      setBtnState({btc: true, eth: false, trn: false});
      setwalletType("bitcoin");
    };
    if(type === "eth") {
      setBtnState({btc: false, eth: true, trn: false});
      setwalletType("ethereum");
    };
    if(type === "trn") {
      setBtnState({btc: false, eth: false, trn: true});
      setwalletType("tron");
    };
  } 

  const handleAddressChange = (e) => {
    setwalletAddress(e.target.value)
  }

  let creds = {
    id: 1,
    type: "trust_coin",
    wallet_type: walletType,
    wallet_address: walletAddress,
    amount: amount,
    isServed: "pending"
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(walletType.length != 0 && walletAddress.length != 0) {
      addAffiliatesRequest(user.uid, "affiliates", walletType, walletAddress, amount)
      navigate("/user_dash")
    }

    // navigate("/user_dash/confirm_withdraw", {
    //   state: {
    //     id: 1,
    //     type: "affiliates",
    //     wallet_type: walletType,
    //     wallet_address: walletAddress,
    //     amount: amount,
    //     isServed: "pending"
    //   }
    // })
  }

  return (
    <WithdrawTC_container onSubmit={(e) => handleSubmit(e)}>
      <MainTitle>Request for affiliates earning withdrawal</MainTitle>
      <p>When you request a withdrawal of affiliates earning, upon acceptance, you will be given all the available affiliate earnings</p>
      <Disclaimer>Please fill in this form correctly, failure to do so will result in your withdrawal request being denied</Disclaimer>
      <div className="availableBalanceBox">
        <AvailBalanceTitle>Available balance</AvailBalanceTitle>
        <BalanceBox>
          {/* <BalanceLabel>20 TC</BalanceLabel>
          <Slash>|</Slash> */}
          <BalanceLabel>USD$ {amount}</BalanceLabel>
        </BalanceBox>
      </div>

      {/* <div className="amountBox">
        <Labler>How much do you wish to withdraw (in USD$)</Labler>
        <Input 
            type="text" 
            placeholder='Amount to withdraw in USD$' 
            required={true} 
            value={amount} 
            onChange={(e) => handleAmountChange(e)} 
        />
      </div> */}

      <div className="cryptoSelect">
        <CyptoSelectTitler>Select your crypto</CyptoSelectTitler>
        <CryptoBtnsBox>
          <CryptoBtn status={btnState.btc} onClick={() => handleMode("btc")} type="reset">Bitcoin</CryptoBtn>
          <CryptoBtn status={btnState.eth} onClick={() => handleMode("eth")} type="reset">Ethereum</CryptoBtn>
          <CryptoBtn status={btnState.trn} onClick={() => handleMode("trn")} type="reset">Tron</CryptoBtn>
        </CryptoBtnsBox>
      </div>

      <WalletTaker 
        btc={btnState.btc}
        eth={btnState.eth}
        trn={btnState.trn}
        handleAddressChange={handleAddressChange}
        walletAddress={walletAddress}
      />

      <div className="buttonBox">
        <ReqBtn>Place withdraw request</ReqBtn>
      </div>
    </WithdrawTC_container>
  )
}

export default WithdrawAffiliatesPage
