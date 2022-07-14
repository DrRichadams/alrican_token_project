import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

import TrustBoxComp from "../comps/TrustBox";

import { TrustTitle, TrustBoxesContainer } from "../features/InvestmentPlanStyledComponents";

const InvestmentPlansPage = () => {
    return(
        <div>
            <TrustTitle>Your Trust Coins</TrustTitle>
            <TrustBoxesContainer>
                <TrustBoxComp 
                    img_url={"/icons/aa1.png"} 
                    amount={"0.001807 TC"} 
                    title={"Your Trust Coin Balance"} 
                    btn_text={"Top Up"} 
                    isBtn={true} 
                    onClick={() => alert("Worked")} />
                <TrustBoxComp 
                    img_url={"/icons/coin.png"} 
                    amount={"USD$ 2500"} 
                    title={"Your Trust Coin Value"} 
                    btn_text={"Request Withdraw"} 
                    isBtn={true} 
                    onClick={() => alert("Worked agaun")} />
                <TrustBoxComp 
                    img_url={"/icons/coin.png"} 
                    amount={"0.00"} 
                    title={"Air drops"} 
                    isBtn={false} 
                />
            </TrustBoxesContainer>
        </div>
    )
};


export default InvestmentPlansPage;