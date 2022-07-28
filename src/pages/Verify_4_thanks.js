import React from 'react';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';
import { VerTitle, VerMessage1, MessageContainer } from '../features/VerifyStyledComponents';
import { WarningBox, WarningText } from '../features/VerifyStyledComponents';
import { RiErrorWarningLine } from "react-icons/ri";
import { colors } from '../constants/colors';
import styled from 'styled-components';

const Verify_4_thanks = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <Margins>
        <MessageContainer>
            <VerTitle>Thank you for choosing to invest with us</VerTitle>
            <VerMessage1>Currently awaiting account and payment verification.</VerMessage1>
        </MessageContainer>
      </Margins>
      <WarningBox>
        <RiErrorWarningLine size={30} color={colors.accent} />
        <WarningText>This shouln't take more than 2 working days</WarningText>
      </WarningBox>
    </SectionContainer>
  )
}

export const Margins = styled.div`
    margin: 20px 0;
`;

export default Verify_4_thanks
