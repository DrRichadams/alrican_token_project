import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { 
    CurrentInvestmentContainer,
    CurrentInvestmentLeftSect,
    CurrentInvestmentPlan,
    CurrentInvestmentTitle,
    CurrentInvestmentRightBtn
 } from "../features/DividentsStyledComponents";
 import { CgArrowLongRight } from "react-icons/cg";
 import { AFFILIATES } from "../../constants/DATA";

 import { 
    AffiliateBox,
    AffiliateIndex,
    AffiliateEmail,
    AffiliateName,
    AffiliateDetails,
    AffiliatesListContainer,
    AffiliateLinkTitle,
    AffiliateLinkBox,
    AffiliateLinkBtn,
    AffiliateLinkContainer,
    AffiliatesContainer,
  } from "../features/AffiliatesStyledComponents";

const Affiliates = () => {
    return(
        <AffiliatesContainer>
            <CurrentInvestmentContainer>
                <CurrentInvestmentLeftSect>
                    <CurrentInvestmentPlan>USD$ 20 000</CurrentInvestmentPlan>
                    <CurrentInvestmentTitle>Total affiliates earning</CurrentInvestmentTitle>
                </CurrentInvestmentLeftSect>

                <CurrentInvestmentRightBtn>
                    <p>Withdraw</p>
                    <CgArrowLongRight size={30} />
                </CurrentInvestmentRightBtn>
            </CurrentInvestmentContainer>

            <AffiliateLinkContainer>
                <AffiliateLinkTitle>Your affiliate link</AffiliateLinkTitle>
                <AffiliateLinkBox>  kmvs-saaw- aen-asnee-sbeas</AffiliateLinkBox>
                <AffiliateLinkBtn>COPY</AffiliateLinkBtn>
            </AffiliateLinkContainer>
            <AffiliatesListContainer>
                {
                    AFFILIATES.map((item, index) => (
                        <AffiliateBox>
                            <AffiliateDetails>
                                <AffiliateName>{item.name}</AffiliateName>
                                <AffiliateEmail>{item.email}</AffiliateEmail>
                            </AffiliateDetails>
                            <AffiliateIndex>
                                {index + 1 < 10 ? `0${index + 1}`: index + 1}
                            </AffiliateIndex>
                        </AffiliateBox>
                    ))
                }
            </AffiliatesListContainer>
        </AffiliatesContainer>
    )
}

export default Affiliates;