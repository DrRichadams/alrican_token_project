import React, { useState } from 'react';
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
    const [amountinput, setamountinput] = useState(0);
    const [availablecoins, setavailablecoins] = useState(0.0128);
    const [rate, setrate] = useState(1000)
    const handleChangeInput = (e) => {
        let val = e.target.value;
        if(!isNaN(val)) {
            setamountinput(e.target.value);
        }
    }
    const incrementAmount = () => {
        let amountValue = parseInt(amountinput)
        let increment = amountValue + 0.5
        setamountinput(amountinput + 1)
    };
    const decrementAmount = () => {
        if(amountinput>0){
            setamountinput(amountinput - 0.5)
        }
    };

    const convertCoins = (coins, rate) => (coins / 1) * rate
    const convertUSD = (usd, rate) => (usd * 1) / rate

  return (
    <WithdrawContainer>
      <Titles>
        <MainTitle>Make a withdraw request</MainTitle>
        <SecondTitle>on your <TrustLabel>TRUST COINS</TrustLabel></SecondTitle>
      </Titles>

      <AvailableTrustCoins>
        <AvailableCoinsTitle>Available <TrustLabel>TRUST COINS</TrustLabel></AvailableCoinsTitle>
        <MiddleBar></MiddleBar>
        <div className="right_balance">
            <TrustBalance>{availablecoins} TC</TrustBalance>
            <EquivalentBalance>USD$ {convertCoins(availablecoins, rate)}</EquivalentBalance>
        </div>
      </AvailableTrustCoins>

      <ChooseAmountBox>
        {/* <FinalAmount>USD$ 50.05</FinalAmount> */}
        <IncrementBox>
            {/* <MathBtns onClick={decrementAmount}><FaMinus size={20} /></MathBtns> */}
            <FinalAmount>USD$</FinalAmount>
            <AmountInput type="text" className="middle_input" value={amountinput} onChange={(e) => handleChangeInput(e)} />
            {/* <MathBtns onClick={incrementAmount}><FaPlus size={20} /></MathBtns> */}
        </IncrementBox>
      </ChooseAmountBox>

      {
        amountinput > 0 ?
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
      : <div></div>
      }

      <Tees>
        Ts & Cs APPLY
      </Tees>
    </WithdrawContainer>
  )
}

export default WithdrawTrustCoinsPage
