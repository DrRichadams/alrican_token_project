import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { 
    SettingsBox,
    SignupDetails,
    Title,
    SignupInputBox,
    InputPrefix,
    Input,
    UpdateBtn,
 } from '../features/AffiliatesFeeStyledComponents';

const LongInput = ({title, prefix, placeholder, onChange, onClick, btnText, value}) => {
  return (
    <SettingsBox>
        <SignupDetails>
        <Title>{title}</Title>
        <SignupInputBox>
            <InputPrefix>{prefix}</InputPrefix>
            <Input type="text" placeholder={placeholder} onChange={(e) => onChange(e)} value={value} />
        </SignupInputBox>
        </SignupDetails>
        <div>
        <UpdateBtn onClick={() => onClick()}>{btnText}</UpdateBtn>
        </div>
    </SettingsBox>
  )
}

export default LongInput
