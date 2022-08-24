import { colors } from "../../constants/colors"
import styled from "styled-components";


export const WalletAddressBox = styled.div`
    
`;
export const CyptoSelectTitler = styled.p`
    margin: 30px 0 15px 0;
    font-family: Inter, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: ${colors.accent};
`;
export const CryptoBtnsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;
export const ReqBtn = styled.button`
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: none;
    background-color: ${colors.accent};
    color: #fff;
    cursor: pointer;
    transition: all .25s ease-in-out;
    margin-top: 25px;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    :hover {
        background-color: ${colors.accentShadow};
        color: #01050f;
    }
`;
export const CryptoBtn = styled.button`
    width: 100%;
    /* height: 100px; */
    padding: 12px;
    border: 2px solid ${colors.accent};
    border-radius: 6px;
    background-color: ${props => props.status ? colors.accent:"transparent"};
    color: ${props => props.status ? "#fff":colors.accent};
    cursor: pointer;
    transition: all .25s ease-in-out;
    :hover {
        background-color: ${props => props.status ? colors.accent:colors.accentShadow};
    }
`;
export const Labler = styled.p`
    margin: 0;
    margin-top: 20px;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    padding: 12px;
    width: 100%;
    border: none;
    border-bottom: 3px solid ${colors.accent};
    outline: none;
`;
export const AvailBalanceTitle = styled.h4`
    font-weight: 900;
    font-family: Roboto, sans-serif;
    margin: 0;
`;
export const Slash = styled.div`
    font-weight: 900;
    font-family: Roboto, sans-serif;
`;
export const BalanceLabel = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
`;
export const BalanceBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const Disclaimer = styled.p`
    color: ${colors.accent};
    margin: 0;
    margin: 8px 0 20px 0;
`;
export const MainTitle = styled.h3`
    text-transform: uppercase;
    color: ${colors.accent};
    margin: 0;
`;
export const WithdrawTC_container = styled.form`
    
`;