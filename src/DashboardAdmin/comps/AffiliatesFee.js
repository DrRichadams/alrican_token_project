import React from 'react';
import styled from 'styled-components';
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
  return (
    <div>
      <CurrentDetails>
        <AffiliatesCircle fee="USD$ 50" label="Signup fee"/>
        <AffiliatesCircle fee="10%" label="Affiliates %"/>
      </CurrentDetails>

      <SettingsContainer>
        <LongInput 
          title="Set signup fee" 
          prefix="USD$" 
          placeholder="New fee in USD$" 
          btnText="Update" 
        />
        <LongInput 
          title="Set affiliates %" 
          prefix="%" 
          placeholder="New affiliates %" 
          btnText="Update" 
        />
      </SettingsContainer>
    </div>
  )
}

export default AffiliatesFee
