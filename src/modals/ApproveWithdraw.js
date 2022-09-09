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
            <AiFillCloseCircle size={30} color="orange" onClick={() => setWarning(false)} />
        </Warning_n_Btn>
        
      </WarningBox>
      <ContentsBox isWarning={warning}>
        <Naming_n_Controls>
            <NamingBox>
                <Naming>Richard</Naming>
                <Naming>proxyserver7798@gmail.com</Naming>
            </NamingBox>

            <div>
                <button>Reject request</button>
                <button onClick={() => setWarning(true)}>Approve request</button>
                <button><AiFillCloseCircle size={30} color="orange" onClick={() => setWarning(false)} /></button>
            </div>
        </Naming_n_Controls>

        <section>
            <AmountsTitle>Amounts</AmountsTitle>
            <div>
                <AmountsItem>
                    <p>Available balance</p>
                    <p>USD$ 200</p>
                </AmountsItem>
                <AmountsItem>
                    <p>Requested balance</p>
                    <p>USD$ 500</p>
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
    padding-bottom: 8px;
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
    padding: 8px 15px;
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
