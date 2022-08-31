import React from "react";
import { CgArrowLongRight } from "react-icons/cg"
import styled from "styled-components";
import { 
    TrustTitle,
    Img,
    TrustBoxesContainer,
    TrustBox,
    TrustRight,
    TrustIconContainer,
    TrustDetails,
    TrustAmount,
    TrustAmountTitle,
    TrustLeft,
    BtnText,
    TrustBtn,
 } from "../features/InvestmentPlanStyledComponents";

const TrustBoxComp = ({ img_url, amount, title, btn_text, isBtn, onClick }) => {
    return(
        <TrustBox>
            <TrustRight>
                <TrustIconContainer>
                    <Img src={process.env.PUBLIC_URL + img_url} alt="" />
                </TrustIconContainer>
                <TrustDetails>
                    <TrustAmount>{amount}</TrustAmount>
                    <TrustAmountTitle>{title}</TrustAmountTitle>
                </TrustDetails>
            </TrustRight>
            <TrustLeft>
                {isBtn ? <TrustBtn onClick={onClick}>
                    <BtnText>{btn_text}</BtnText>
                    <Hider><CgArrowLongRight size={30} /></Hider>
                </TrustBtn>: ""}
            </TrustLeft>
        </TrustBox>
    )
}

export const Hider = styled.span`
    @media (max-width: 440px) {
        display: none;
    }
`;

export default TrustBoxComp;