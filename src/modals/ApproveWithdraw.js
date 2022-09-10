import React, {useState} from 'react';
import styled from 'styled-components';
import { IoWarning } from "react-icons/io5"
import { AiFillCloseCircle } from "react-icons/ai"
import { colors } from '../constants/colors';

const ApproveWithdraw = () => {
    const [warning, setWarning] = useState(false)
  return (
    <ApproveWithdrawContainer>
      <WarningBox isWarning={warning}>
        <WarningTitles>
            <IoWarning size={35} color="orange" />
            <WaringTitle>Warning</WaringTitle> 
        </WarningTitles>
        <Warning_n_Btn>
            <WarningPara>User cannot withdraw an amount larger than their available balance</WarningPara>
            <MainCloseBtn><AiFillCloseCircle size={30} onClick={() => setWarning(false)} /></MainCloseBtn>
        </Warning_n_Btn>
        
      </WarningBox>
      <ContentsBox isWarning={warning}>
        <Naming_n_Controls>
            <NamingBox>
                <Naming>Richard</Naming>
                <Naming>proxyserver7798@gmail.com</Naming>
            </NamingBox>

            <ControlBtns>
                <RejetBtn>Reject request</RejetBtn>
                <AcceptBtn onClick={() => setWarning(true)}>Approve request</AcceptBtn>
                <MainCloseBtn><AiFillCloseCircle size={30} onClick={() => setWarning(false)} /></MainCloseBtn>
            </ControlBtns>
        </Naming_n_Controls>

        <section>
            <AmountsTitle>Amounts</AmountsTitle>
            <div>
                <AmountsItem>
                    <AmountValues>Available balance</AmountValues>
                    <AmountValues>USD$ 200</AmountValues>
                </AmountsItem>
                <AmountsItem>
                    <AmountValues>Requested balance</AmountValues>
                    <AmountValues>USD$ 500</AmountValues>
                </AmountsItem>
            </div>
        </section>

        <WithdrawType>
            <TypeTitle>Withdrawing from |</TypeTitle>
            <TypeTitle>ALRICAN TOKENS</TypeTitle>
        </WithdrawType>
      </ContentsBox>
    </ApproveWithdrawContainer>
  )
}



export const AcceptBtn = styled.button`
    border: none;
    background-color: ${colors.accent};
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    padding: 8px 12px;
    border-radius: 6px;
    :hover {
        background-color: ${colors.accentShadow};
        color: ${colors.accent};
        scale: .95;
    }
`;
export const RejetBtn = styled.button`
    border: none;
    background-color: transparent;
    color: ${colors.accent};
    font-family: Roboto, sans-serif;
    font-size: 13px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        color: red;
        scale: .9;
    }
`;
export const ControlBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const MainCloseBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all .3s ease-in-out;
    color: orange;
    /* background-color: blue; */
    margin: 0;
    padding: 0;
    :hover{
        color: orangered;
        transform: scale(.85);
    }
`;
export const TypeTitle = styled.p`
    margin: 0;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    color: ${colors.accent};
`;
export const WithdrawType = styled.div`
    background-color: ${colors.accentShadow};
    box-sizing: border-box;
    margin-top: 30px;
    padding: 15px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AmountsItem = styled.div`
    font-family: Roboto, sans-serif;
    margin-top: 50px;
    position: relative;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ::after {
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 98%;
        height: 1px;
        background-color: grey;
        position: absolute;
        border-radius: 6px;
    }
`;
export const AmountValues = styled.p`
    font-family: Roboto, sans-serif;
    
`;
export const AmountsTitle = styled.h3`
    font-family: Inter, sans-serif;
    margin-top: 50px;
`;
export const NamingBox = styled.div`
    
`;
export const Naming_n_Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-bottom: 15px;
    ::after {
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 98%;
        height: 2px;
        background-color: grey;
        position: absolute;
        border-radius: 6px;
    }
`;
export const Naming = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    /* color: ${colors.accent}; */
    color: #01050f;
    font-size: 14px;
    font-weight: 500;
`;
export const WarningPara = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    /* color: ${colors.accent}; */
    color: orangered;
    font-size: 14px;
`;
export const WaringTitle = styled.h3`
    margin: 0;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    color: orange;
    font-weight: 500;
    font-size: 16px;
`;
export const Warning_n_Btn = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const WarningTitles = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
export const WarningBox = styled.div`
    background-color: #fff;
    height: 50px;
    width: 60vw;
    /* width: 80vw; */
    border-radius: 6px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px 25px;
    /* transition: all .3s ease-in-out; */
    transition: all .4s cubic-bezier(1, 0.23, 0, 0.81);
    transform: translateY(${props => props.isWarning ? '0':'31px'});
`;
export const ContentsBox = styled.div`
    background-color: #fff;
    height: 80vh;
    width: 60vw;
    border-radius: 6px;
    box-shadow: -2px -2px 8px rgba(0,0,0,.5);
    transition: all .4s cubic-bezier(1, 0.23, 0, 0.81);
    transform: translateY(${props => props.isWarning ? '0':'-31px'});
    box-sizing: border-box;
    padding: 25px;
`;
export const ApproveWithdrawContainer = styled.div`
    background-color: rgba(0,0,0,.8);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default ApproveWithdraw
