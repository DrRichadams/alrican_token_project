import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { FaLongArrowAltRight } from "react-icons/fa"
import { CgArrowLongRight } from "react-icons/cg"
import MoneyIcon from "../../resources/aa1.png"

import { 
    CurrentInvestmentRightBtn,
    CurrentInvestmentTitle,
    CurrentInvestmentPlan,
    CurrentInvestmentLeftSect,
    CurrentInvestmentContainer,
    MonthlyEarningTitlesContainer,
    ImgIcon,
    MonthlyEarningBtn,
    MonthlyAmountTitle,
    MonthlyAmount,
    MonthlyBoxBadge,
    MonthlyBoxFillRight,
    MonthlyBoxFillLeft,
    MonthlyBoxFill,
    MothlyBoxOutline,
    MonthlyBoxesContainer,
    MonthlyEarningTitle,
    MonthlyContainer,
    ImgEarn,
    DividentsIcon,
 } from "../features/DividentsStyledComponents";
 import MoneyPic from "../../resources/compansation.PNG";
 import { MONTHLY_EARNING } from "../../constants/DATA";

const Dividents = () => {
    return(
        <div>
            <CurrentInvestmentContainer>
                <CurrentInvestmentLeftSect>
                    <CurrentInvestmentPlan>SILVER</CurrentInvestmentPlan>
                    <CurrentInvestmentTitle>Current Investment Plan</CurrentInvestmentTitle>
                </CurrentInvestmentLeftSect>

                <CurrentInvestmentRightBtn>
                    <p>UPGRADE</p>
                    <CgArrowLongRight size={30} />
                </CurrentInvestmentRightBtn>
            </CurrentInvestmentContainer>

            <CurrentInvestmentContainer>
                <CurrentInvestmentLeftSect>
                    <CurrentInvestmentPlan>USD$ 10000</CurrentInvestmentPlan>
                    <CurrentInvestmentTitle>Total dividents earned</CurrentInvestmentTitle>
                </CurrentInvestmentLeftSect>

                <DividentsIcon>
                    <ImgEarn src={MoneyPic} alt="" />
                </DividentsIcon>
            </CurrentInvestmentContainer>
            <MonthlyContainer>
                <MonthlyEarningTitlesContainer>
                    <MonthlyEarningTitle>Your monthly earning</MonthlyEarningTitle>
                    <MonthlyEarningBtn>Request Withdraw</MonthlyEarningBtn>
                </MonthlyEarningTitlesContainer>
                <MonthlyBoxesContainer>
                    {
                        MONTHLY_EARNING.map(item => (
                            <MothlyBoxOutline>
                                <MonthlyBoxBadge>{item.month}</MonthlyBoxBadge>
                                <MonthlyBoxFill>
                                    <MonthlyBoxFillLeft>
                                        <MonthlyAmount>USD$ {item.earn}</MonthlyAmount>
                                        <MonthlyAmountTitle>Monthly Earning</MonthlyAmountTitle>
                                    </MonthlyBoxFillLeft>
                                    <MonthlyBoxFillRight>
                                        <ImgIcon src={MoneyIcon} alt="" />
                                    </MonthlyBoxFillRight>
                                </MonthlyBoxFill>
                            </MothlyBoxOutline>
                        ))
                    }
                </MonthlyBoxesContainer>
            </MonthlyContainer>
        </div>
    )
}

export default Dividents;