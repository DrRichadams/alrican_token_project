import React from "react";
import styled from "styled-components";

import { colors } from "../../constants/colors";
import { investment_packages } from "../../constants/DATA";
import { AFFILIATES } from "../../constants/DATA";

import { 
    UpgradeBtn,
    RecoNameFee,
    Recommendation,
    ActualRecommendations,
    Recommendations,
    RecommendStory,
    RecommendTitle,
    PackageTypeContainer,
    BalanceContainer,
    ActualBalance,
    AvailableBalance,
    PackageCost,
    PackageType,
    ValuesSection,
    BarTitle,
    RequestBtn,
    TitleBar,
    CurrentPlan,
 } from "../features/InvestmentPlanStyledComponents";

const InvestmentPlansPage = () => {
    return(
        <div>
            <CurrentPlan>
                <TitleBar className="title_bar">
                    <BarTitle>Your current package</BarTitle>
                    <RequestBtn>Request withdraw</RequestBtn>
                </TitleBar>
                <ValuesSection className="values_sect">
                    <PackageTypeContainer>
                        <PackageType>EMERALD</PackageType>
                        <PackageCost>USD$ 300</PackageCost>
                    </PackageTypeContainer>
                    <BalanceContainer>
                        <AvailableBalance>Available balance</AvailableBalance>
                        <ActualBalance>USD$ 400 000</ActualBalance>
                    </BalanceContainer>
                </ValuesSection>
                <Recommendations>
                    <RecommendTitle>Recommendations</RecommendTitle>
                    <RecommendStory>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi explicabo, commodi nam eius ipsum deserunt soluta ipsam aut. Consequuntur mollitia laboriosam non quos numquam accusantium iste culpa porro minima.
                    </RecommendStory>
                </Recommendations>
                <ActualRecommendations className="actual_recommendations">
                    {
                        investment_packages.filter(item => item.fee > 300).map(pack => (
                            <Recommendation>
                                <RecoNameFee>
                                    <h3>{pack.package_name}</h3>
                                    <PackageCost>USD${pack.fee}</PackageCost>
                                </RecoNameFee>
                                <UpgradeBtn>Upgrade</UpgradeBtn>
                            </Recommendation>
                        ))
                    }
                </ActualRecommendations>
            </CurrentPlan>
            <AffiliateSect>
                <AffiliatesSectBar>
                    <AffiliateSectTitle>Your affiliates listing</AffiliateSectTitle>
                    <AffiliateSectBtn>Affiliates earnings</AffiliateSectBtn>
                </AffiliatesSectBar>
                <AffiliatesListingContainer>
                    {
                        AFFILIATES.map(item => (
                            <AffiliateBox>
                                <AffiliateBoxTitle>{item.name} {item.surname}</AffiliateBoxTitle>
                                <AffiliateBoxEmail>{item.email}</AffiliateBoxEmail>
                                <AffiliateBoxAmount>
                                    <PackageCost size={15}> USD${item.amount}</PackageCost>
                                </AffiliateBoxAmount>
                            </AffiliateBox>
                        ))
                    }
                </AffiliatesListingContainer>
            </AffiliateSect>
        </div>
    )
};

export const AmountContainer = styled.div`
    text-align: left;
    /* width: 100%; */
`;
export const AffiliateBoxAmount = styled.p`
    /* text-align: right; */
    /* display: flex; */
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
    margin: 0;
`;
export const AffiliateBoxEmail = styled.p`
    font-family: Roboto, sans-serif;
    color: #01050f;
    font-weight: 900;
    pointer-events: none;
    margin: 0;
`;
export const AffiliateBoxTitle = styled.p`
    font-family: Roboto, sans-serif;
    color: #01050f;
    font-weight: 900;
    pointer-events: none;
    margin: 0;
`;
export const AffiliateBox = styled.div`
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 1fr 1fr 100px;
    /* pointer-events: none; */
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 6px;
    transition: all 200ms ease-in;
    cursor: crosshair;
    :hover {
        background-color: ${colors.accentShadow};
    }
`;
export const AffiliatesListingContainer = styled.div`

`;
export const AffiliateSectBtn = styled.button`
    border: 2px solid #01050f;
    border-radius: 6px;
    color: #01050f;
    padding: 8px 12px;
    background-color: transparent;
    transition: all 250ms ease-in-out;
    text-transform: uppercase;
    font-size: 12px;
    font-family: Inter, sans-serif;
    cursor: pointer;
    :hover {
        background-color: ${colors.accent};
        color: #f5f5f5;
        border-color: ${colors.accent};
    }
`;
export const AffiliateSectTitle = styled.h3`
    font-family: Inter, sans-serif;
    /* font-weight: 900; */
    text-transform: uppercase;
    color: ${colors.accent};
`;
export const AffiliatesSectBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const AffiliateSect = styled.div`
    margin-top: 80px;
`;

export default InvestmentPlansPage;