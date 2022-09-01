import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  import { affiliatesCut } from "../features/formulars";

const Affiliates = () => {

    const {affiliates, user} = UserAuth();
    const navigate = useNavigate();

    const displayAffiliates = affiliates?.filter(item => {
        return item.isVerified && !item.isClaimed
    })

    // const total_affiliates = displayAffiliates.reduce((acc, cur) => {
    //     let myCur = cur.affiliatesFee - (cur.affiliatesFee * (parseInt(system_rates[0].percentage) / 100))
    //     return acc + (parseInt(cur.affiliatesFee) - (parseInt(cur.affiliatesFee) * (parseInt(cur.affiliatespercentage) / 100)))
    // }, 0)
    // // console.log("Affil cut ", affiliatesCut(displayAffiliates))

    // // let total_affiliates = 0;
    // // const all_affiliates = displayAffiliates && displayAffiliates.foreach(item => {
    // //     let tempSum = item.affiliatesFee - (item.affiliatesFee * (item.affiliatesPercentage / 100))
    // //     total_affiliates += tempSum;
    // // })


        // console.log("My array", displayAffiliates)
    // const my_affiliates_sum = displayAffiliates.reduce((acc, cur) => {
    //     return acc + (
    //         Number(cur.affiliatesFee) * (Number(cur.affiliatespercentage) / 100)
    //     )
    // }, 0)


    // console.log("My reduced", my_affiliates_sum)
    // console.log("My affiliates in affiliates", affiliates)
    // console.log("rates", system_rates)
    // console.log("sum of", sum_of_affiliates)
    // console.log(sum_of_affiliates)
    // // displayAffiliates && console.log("afCut", affiliatesCut(displayAffiliates))
    // displayAffiliates && console.log("afCut", affiliatesCut(displayAffiliates))

    return(
        <AffiliatesContainer>
            <CurrentInvestmentContainer>
                <CurrentInvestmentLeftSect> 
                    <CurrentInvestmentPlan>USD$ {displayAffiliates && affiliatesCut(displayAffiliates)}</CurrentInvestmentPlan>
                    <CurrentInvestmentTitle>Total affiliates earning</CurrentInvestmentTitle>
                </CurrentInvestmentLeftSect>

                {/* <CurrentInvestmentRightBtn onClick={() => navigate("affiliatesRerouter", {state: "alrican tokens"})}> */}
                <CurrentInvestmentRightBtn onClick={() => navigate("/user_dash/affiliatesRerouter")}>
                    <p>Withdraw</p>
                    <CgArrowLongRight size={30} />
                </CurrentInvestmentRightBtn>
            </CurrentInvestmentContainer>

            <AffiliateLinkContainer>
                <AffiliateLinkTitle>Your affiliate link</AffiliateLinkTitle>
                {/* <AffiliateLinkBox>localhost:3000/signup/{user.uid}</AffiliateLinkBox> */}
                <AffiliateLinkBox>https://sur-automation.herokuapp.com/signup/{user.uid}</AffiliateLinkBox>
                {/* <AffiliateLinkBtn>COPY</AffiliateLinkBtn> */}
            </AffiliateLinkContainer>
            <AffiliatesListContainer>
                {
                    affiliates && displayAffiliates.filter(sin => sin.isVerified).filter(claimed => !claimed.isClaimed).map((item, index) => (
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