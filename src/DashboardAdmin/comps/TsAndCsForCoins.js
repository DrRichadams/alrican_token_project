import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const TsAndCsForCoins = () => {
  const handleChange = (e) => {
    
  }
  return (
    <TsAndCsForCoinsContainer>
      <TextArea rows="4" cols="50" onChange={(e) => handleChange(e)} />
      <SaveTeesBtn>Update</SaveTeesBtn>
    </TsAndCsForCoinsContainer>
  )
}


export const TsAndCsForCoinsContainer = styled.div`
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
    /* min-width: 700px; */
    width: 100%;
    /* min-height: 300px; */
    height: 300px;
    border: none;
    border-radius: 6px;
    resize: none;
    padding: 8px;
`;

export default TsAndCsForCoins
