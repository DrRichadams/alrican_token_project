import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const TopupThanks = () => {
  return (
    <div>
      <MainTitle>Thank you for buying our coin</MainTitle>
      <Warning>Kindly submit your proof of payment below (e.g a screenshot)</Warning>
      <ImgBox>
        <Image src="https://firebasestorage.googleapis.com/v0/b/acm-crypto.appspot.com/o/proofs%2FCtCWUmewk4OLTW1scYkhV9ZcwFo1.png?alt=media&token=64ed2ea7-c056-4203-bf3a-c4ab43b514a8" alt="logo" />
      </ImgBox>
      <MyProof>
        <ProofHeader>
            <ProofTitle>
                <ProofLabel>My proof of payment</ProofLabel>
                <ProofItem>Select a proof screenshot from your system / gallery</ProofItem>
            </ProofTitle>
            <SubmitBtn>Submit</SubmitBtn>
        </ProofHeader>
        <input type="file" />
      </MyProof>
    </div>
  )
}


export const Image = styled.img`
    width: 100%;
`;
export const ImgBox = styled.div`
    max-width: 300px;
`;
export const ProofItem = styled.p`
    margin: 0 0 12px 0;
    font-family: Roboto, sans-serif;
`;
export const ProofLabel = styled.h3`
    margin: 0;
    font-family: Roboto, sans-serif;
`;
export const Warning = styled.p`
    margin: 4px 0 20px 0;
    font-family: Roboto, sans-serif;
`;
export const MainTitle = styled.h3`
    margin: 0;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
`;
export const SubmitBtn = styled.button`
    border: none;
    padding: 12px;
    border-radius: 6px;
    width: 100px;
    cursor: pointer;
    background-color: #fff;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    transition: all .25s ease-in-out;
    :hover{
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const ProofTitle = styled.div`
    
`;
export const ProofHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const MyProof = styled.div`
    background-color: rgba(255, 100, 50, .1);
    padding: 12px;
    border-radius: 6px;
`;

export default TopupThanks
