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
 import { MdOutlineNearbyError } from "react-icons/md";
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

  import { UserAuth } from "../../contexts/AuthContext";

const Affiliates = () => {

    const {affiliates, user} = UserAuth();

    console.log("My affiliates in affiliates", affiliates)

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
                <AffiliateLinkBox>localhost:3000/signup/{user.uid}</AffiliateLinkBox>
                <AffiliateLinkBtn>COPY</AffiliateLinkBtn>
            </AffiliateLinkContainer>
            <AffiliatesListContainer>
                {
                    affiliates && affiliates.filter(sin => sin.isVerified).filter(claimed => !claimed.isClaimed).map((item, index) => (
                        <AffiliateBox key={index}>
                            <AffiliateDetails>
                                <AffiliateName>{item.names}</AffiliateName>
                                <AffiliateEmail>{item.email}</AffiliateEmail>
                            </AffiliateDetails>
                            <AffiliateIndex>
                                {index + 1 < 10 ? `0${index + 1}`: index + 1}
                            </AffiliateIndex> 
                        </AffiliateBox>
                    ))
                }
                {
                    !affiliates && 
                    <NoAffiliates>
                        <MdOutlineNearbyError size={50} />
                        <NoAffiliatesText>You don't have affiliates yet!!!</NoAffiliatesText>
                        <NoAffiliatesStory>Share your affiliate link with friends to get them to sign up.</NoAffiliatesStory>
                    </NoAffiliates>
                }
            </AffiliatesListContainer>
        </AffiliatesContainer>
    )
} 


export const NoAffiliatesText = styled.h3`
    margin: 0;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
    font-weight: 900;
    margin-top: 20px;
`;
export const NoAffiliatesStory = styled.p`
    margin: 0;
    margin-top: 15px;
    font-family: Roboto, sans-serif;
`;
export const NoAffiliates = styled.div`
    /* background-color: red; */
    height: 50vh;
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.accent};
`;

export default Affiliates;