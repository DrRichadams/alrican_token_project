import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

import { 
    Tees,
    BtnText,
    RequestBtn,
    TrustLabel,
    AvailableCoinsTitle,
    TrustBalance,
    EquivalentBalance,
    AmountsWithdraw,
    PlaceWithdrawBox,
    MainTitle,
    SecondTitle,
    Titles,
    MiddleBar,
    AvailableTrustCoins,
    ChooseAmountBox,
    FinalAmount,
    AmountInput,
    MathBtns,
    IncrementBox,
    WithdrawContainer,
 } from '../features/WithdrawStyledComponents';

const WithdrawTrustCoinsPage = () => {
  return (
    <WithdrawContainer>
      <Titles>
        <MainTitle>Make a withdraw request</MainTitle>
        <SecondTitle>on your <TrustLabel>AFFILIATES</TrustLabel></SecondTitle>
      </Titles>

      <AvailableTrustCoins>
        <AvailableCoinsTitle>Available <TrustLabel>Balance</TrustLabel></AvailableCoinsTitle>
        <MiddleBar></MiddleBar>
        <div className="right_balance">
            <TrustBalance>0.01285 TC</TrustBalance>
            <EquivalentBalance>USD$ 200.28</EquivalentBalance>
        </div>
      </AvailableTrustCoins>

      <ChooseAmountBox>
        <FinalAmount>USD$ 50.05</FinalAmount>
        <IncrementBox>
            <MathBtns><FaMinus size={20} /></MathBtns>
            <AmountInput type="text" className="middle_input" />
            <MathBtns><FaPlus size={20} /></MathBtns>
        </IncrementBox>
      </ChooseAmountBox>

      <PlaceWithdrawBox>
        <AmountsWithdraw className="left_place_withdraw">
            <TrustBalance>0.0001 TC</TrustBalance>
            <EquivalentBalance>USD$ 50.05</EquivalentBalance>
        </AmountsWithdraw>
        <div className="right_place_withdraw">
            <RequestBtn>
                <BtnText>Request Withdraw</BtnText>
            </RequestBtn>
        </div>
      </PlaceWithdrawBox>

      <Tees>
        Ts & Cs APPLY
      </Tees>
    </WithdrawContainer>
  )
}

export default WithdrawTrustCoinsPage
