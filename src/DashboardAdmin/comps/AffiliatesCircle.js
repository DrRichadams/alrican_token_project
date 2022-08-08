import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";
import { 
    CircleContainer,
    FeeValue,
    FeeLabel,
 } from '../features/AffiliatesFeeStyledComponents';

const AffiliatesCircle = ({fee, label}) => {
  return (
    <CircleContainer >
        <FeeValue>{fee}</FeeValue>
        <FeeLabel>{label}</FeeLabel>
        <AiOutlineSafety size={35} />
    </CircleContainer>
  )
}

export default AffiliatesCircle
