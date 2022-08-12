import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { UserAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';

const TsAndCsForAffiliates = () => {

  const {user, teesforaffiliates, addTeesFirebase} = UserAuth();

  const [terms_conditions, setterms_conditions] = useState(``);
  const [allowediting, setallowediting] = useState(true);
  const [allowsubmit, setallowsubmit] = useState(false);

  const handleChange = (e) => {
    setallowsubmit(true)
    setterms_conditions(e.target.value)
  }

  const handleSubmit = () => {
    setallowsubmit(false)
    addTeesFirebase("foraffiliates", terms_conditions);
  }

  useEffect(() => {
    setterms_conditions(teesforaffiliates)
      user && setallowediting(false)
  } , [teesforaffiliates])

  return (
    <TsAndCsForAffiliatesContainer>
      <TextArea rows="4" cols="50" onChange={(e) => handleChange(e)} value={terms_conditions} disabled={allowediting} />
      <SaveTeesBtn onClick={handleSubmit} allowSubmit={allowsubmit}>Update</SaveTeesBtn>
    </TsAndCsForAffiliatesContainer>
  )
}



export const TsAndCsForAffiliatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const SaveTeesBtn = styled.button`
    display: ${props=>props.allowSubmit ? "block":"none"};
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
    padding: 12px;
    box-sizing: border-box;
`;

export default TsAndCsForAffiliates
