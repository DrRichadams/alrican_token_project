import React from 'react';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';
import { VerTitle, VerMessage1, MessageContainer } from '../features/VerifyStyledComponents';
import styled from 'styled-components';
import { WarningBox, WarningText } from '../features/VerifyStyledComponents';
import {RiErrorWarningLine} from "react-icons/ri";
import { colors } from '../constants/colors';

const Verify_3_proof = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <CustomeContainer>
        <MessageContainer>
            <VerTitle>Submit proof of payment</VerTitle>
            <VerMessage1>Take a screenshot of your transaction and submit it here</VerMessage1>
            <WarningBox>
              <RiErrorWarningLine size={30} color={colors.accent} />
              <WarningText>If you have not payed yet, please logout and login again to start over</WarningText>
            </WarningBox>
            <div className="select">
              <p>Select your screenshot from your computer storage</p>
              <input type="file" />
            </div>
        </MessageContainer>
        <SubmitProofBtn>Submit proof of payment</SubmitProofBtn>
      </CustomeContainer>
    </SectionContainer>
  )
}

export const SubmitProofBtn = styled.button`
    border: none;
    outline: none;
    background-color: ${colors.accent};
    padding: 12px;
    border-radius: 6px;
    margin-top: 25px;
    width: 230px;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
      background-color: #01050f;
    }
`;
export const CustomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
export const DragnDrop = styled.div`
    
`;

const MainContainer = styled.div`
    padding: 30px 200px;
    /* background-color: ${colors.primary}; */
    background-color: ${props => props.color};
    /* min-height: 100vh; */
    min-height: ${props=>props.size}vh;
    position: relative;
    @media (max-width: 1260px) {
        padding: 30px 100px;
    }
    /* @media (max-width: 1050px) {
        padding: 30px 100px;
    } */
    @media (max-width: 930px) {
        padding: 30px 50px;
    }
    @media (max-width: 430px) {
        padding: 30px 20px;
    }
`;

export default Verify_3_proof
