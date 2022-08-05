import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import TrustBoxComp from "../comps/TrustBox";
import { TrustTitle, TrustBoxesContainer } from "../features/InvestmentPlanStyledComponents";

import { UserAuth } from "../../contexts/AuthContext";

const InvestmentPlansPage = () => {

    const navigate = useNavigate();

    const [coins, setcoins] = useState(null);
    const {trustcoins} = UserAuth();
    console.log("COINS FROM DASH", trustcoins)
    useEffect(() => {
        setcoins({...trustcoins})
    }, [trustcoins])

    const putToUSD = (coins, rate) => ((coins / 1) * rate).toFixed(2)

    if(coins){
        return(
            <div>
                <TrustTitle>Your Trust Coins</TrustTitle>
                <TrustBoxesContainer>
                    <TrustBoxComp 
                        img_url={"/icons/aa1.png"} 
                        amount={`${coins.coins} TC`} 
                        title={"Your Trust Coin Balance"} 
                        btn_text={"Top Up"} 
                        isBtn={true} 
                        onClick={() => alert("Worked")} />
                    <TrustBoxComp 
                        img_url={"/icons/coin.png"} 
                        amount={`USD$ ${putToUSD(coins.coins, 2000.123)}`} 
                        title={"Your Trust Coin Value"} 
                        btn_text={"Request Withdraw"} 
                        isBtn={true} 
                        onClick={() => navigate("withdrawCoins")} />
                    <TrustBoxComp 
                        img_url={"/icons/airNFT.png"} 
                        amount={`${coins.air_drops}`} 
                        title={"Air drops"} 
                        btn_text={"Top Up"} 
                        // isBtn={true} 
                        // onClick={() => alert("Worked already")}
                    />
                </TrustBoxesContainer>
            </div>
        )
    }
};


export default InvestmentPlansPage;