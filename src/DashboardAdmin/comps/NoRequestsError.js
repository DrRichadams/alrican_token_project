import React from 'react';
import styled from 'styled-components';
import { AiOutlineAntDesign } from "react-icons/ai"
import { colors } from '../../constants/colors';

const NoRequestsError = ({type}) => {
  return (
    <NoRequestsErrorContainer>
      <AiOutlineAntDesign size={50} />
      <ErrorText>No {type} requests found!</ErrorText>
    </NoRequestsErrorContainer>
  )
}

export const ErrorText = styled.p`
    text-transform: uppercase;
    font-family: Inter, sans-serif;
`;
export const NoRequestsErrorContainer = styled.div`
    color: ${colors.accent};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default NoRequestsError
