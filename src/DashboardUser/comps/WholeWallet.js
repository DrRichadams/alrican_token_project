import React, {useState} from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const WholeWallet = ({active, type, proceedFunc, updateAddress, updateWalletType}) => {
    const [walletAddress, setwalletAddress] = useState('');
  
    const handleChange = (e) => {
      setwalletAddress(e.target.value)
    }
  
    const handleRequest = () => {
      updateAddress(walletAddress);
      updateWalletType(type);
      proceedFunc()
    }
    
    return(
      <WalletProvider display={active ? "flex":"none"}>
        <WalletInput>
          <ProviderLabel>Wallet address</ProviderLabel>
          <ProviderInput 
            type="text" 
            placeholder={`Enter your ${type} wallet address`} 
            value={walletAddress} 
            onChange={(e) => handleChange(e)} 
          />
        </WalletInput>
        {walletAddress.length > 0 &&<ProviderBtn onClick={handleRequest}>Request withdraw</ProviderBtn> }
      </WalletProvider> 
    )
  }


  export const ProviderBtn = styled.button`
  border: none;
  background-color: ${colors.accent};
  padding: 8px;
  box-sizing: border-box;
  border-radius: 6px;
  color: ${colors.secondary};
  cursor: pointer;
  transition: all .25s ease-in-out;
  :hover {
    background-color: ${colors.accentShadow};
    color: #01050f;
  }
`;

export const WalletInput = styled.div`
  width: 100%;
`;

  export const ProviderInput = styled.input`
  padding: 8px;
  width: 100%;
  border-radius: 6px;
  border: none;
  /* background-color: ${colors.accentShadow}; */
`;

export const ProviderLabel = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
`;

  export const WalletProvider = styled.div`
  /* display: ${props => props.active ? "flex":"none"}; */
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

  export default WholeWallet;