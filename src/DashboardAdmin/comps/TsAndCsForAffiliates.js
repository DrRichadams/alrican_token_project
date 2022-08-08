import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const TsAndCsForAffiliates = () => {
  return (
    <TsAndCsForAffiliatesContainer>
      <TextArea rows="4" cols="50" />
      <SaveTeesBtn>Update</SaveTeesBtn>
    </TsAndCsForAffiliatesContainer>
  )
}



export const TsAndCsForAffiliatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const SaveTeesBtn = styled.button`
    background-color: ${colors.accent};
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 12px;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover{
      background-color: ${colors.accentShadow};
      /* color: #01050f; */
    }
`;
export const TextArea = styled.textarea`
    min-width: 700px;
    min-height: 300px;
    border: none;
    border-radius: 6px;
    resize: none;
`;

export default TsAndCsForAffiliates
