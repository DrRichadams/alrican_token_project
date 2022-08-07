import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const PageTitles = ({name, location}) => {
  return (
    <TitlesContainer>
        <Greeting>Hi <Name>{name}</Name></Greeting>
        <WhereYouAre>{location}</WhereYouAre>
    </TitlesContainer>
  )
}

export const TitlesContainer = styled.div`
    margin-bottom: 15px;
`;
export const Name = styled.span`
    margin: 0;
    /* font-family: Roboto, sans-serif;
    color: rgba(192,192,192,0.9); */
    text-transform: capitalize;
`;
export const WhereYouAre = styled.h1`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 28px;
    color: rgba(192,192,192,0.9);
    text-transform: capitalize;
`;
export const Greeting = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-size: 15px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
`;

export default PageTitles
