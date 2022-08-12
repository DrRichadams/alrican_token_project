import React, {useState} from 'react';
import styled from 'styled-components';
import { UserAuth } from '../../contexts/AuthContext';
import { AiOutlineSafety } from "react-icons/ai";
import { colors } from '../../constants/colors';
import { 
  CurrentDetails,
  CircleContainer,
  FeeValue,
  FeeLabel,
  SettingsContainer,
 } from '../features/AffiliatesFeeStyledComponents';
 import LongInput from './LongInput';
 import AffiliatesCircle from './AffiliatesCircle';

const AffiliatesFee = () => {

  const [fee, setfee] = useState('');
  const [percentage, setpercentage] = useState('');

  const {affiliatespercentage, signupfee, addAffiliatesPercentageFirebase, addSignUpFeeFirebase} = UserAuth();

  const handleFeeChange = (e) => {
    if(!isNaN(e.target.value)) {
      setfee(e.target.value)
    }
  }
  const handleSubmitFee = () => {
    addSignUpFeeFirebase(fee);
    setfee('');
  }
  const handlePercentageChange = (e) => {
    if(!isNaN(e.target.value)) {
      setpercentage(e.target.value)
    }
  }
  const handleSubmitPercentage = () => {
    addAffiliatesPercentageFirebase(percentage);
    setpercentage('')
  }

  return (
    <div>
      <CurrentDetails>
        <AffiliatesCircle fee={`USD$ ${signupfee}`} label="Signup fee"/>
        <AffiliatesCircle fee={`${affiliatespercentage}%`} label="Affiliates %"/>
      </CurrentDetails>

      <SettingsContainer>
        <LongInput 
          title="Set signup fee" 
          prefix="USD$" 
          placeholder="New fee in USD$" 
          btnText={fee.length > 0 ? "Update":""} 
          onChange={(e) => handleFeeChange(e)}
          onClick={handleSubmitFee}
          value={fee}
        />
        <LongInput 
          title="Set affiliates %" 
          prefix="%" 
          placeholder="New affiliates %" 
          btnText={percentage.length > 0 ? "Update":""} 
          onChange={(e) => handlePercentageChange(e)}
          onClick={handleSubmitPercentage}
          value={percentage} 
        />
      </SettingsContainer>
    </div>
  )
}

export default AffiliatesFee
