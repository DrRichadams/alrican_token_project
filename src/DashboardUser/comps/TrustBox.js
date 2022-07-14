import React from "react";
import { CgArrowLongRight } from "react-icons/cg"
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
                    <CgArrowLongRight size={30} />
                </TrustBtn>: ""}
            </TrustLeft>
        </TrustBox>
    )
}

export default TrustBoxComp;