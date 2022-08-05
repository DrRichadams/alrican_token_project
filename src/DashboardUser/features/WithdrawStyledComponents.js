import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Tees = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    margin-top: 20px;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    :hover {
        color: ${colors.accent}
    }
`;

export const BtnText = styled.p`
    margin: 0;
`;

export const RequestBtn = styled.button`
    background-color: ${colors.accent};
    color: ${colors.secondary};
    /* border: 2px solid ${colors.accent}; */
    border: none;
    border-radius: 0 4px 4px 0;
    padding: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 250ms ease-in-out;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    :hover {
        background-color: ${colors.primary};
        color: ${colors.secondary};
    }
`;
export const TrustLabel = styled.span`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    color: ${colors.accent};
`;

export const AvailableCoinsTitle = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colors.primary};
`;

export const TrustBalance = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: ${colors.primary};
    pointer-events: none;
`;

export const EquivalentBalance = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: ${colors.primary};
    pointer-events: none;
`;


export const AmountsWithdraw = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
    padding: 0 12px;
`;

export const PlaceWithdrawBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    /* background-color: red; */
    border: 2px solid ${colors.accent};
    border-radius: 6px;
    /* padding: 0 12px; */
`;

export const MainTitle = styled.h3`
    text-transform: uppercase;
    font-size: 25px;
    font-family: Inter, sans-serif;
    font-weight: 900;
    margin: 0;
`;

export const SecondTitle = styled.p`
    margin: 15px 0 35px 0;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
    color: ${colors.accent};
`;

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MiddleBar = styled.div`
    font-size: 40px;
    background-color: red;
    width: 2px;
    height: 50px;
`;

export const AvailableTrustCoins = styled.div`
    background-color: ${colors.accentShadow};
    border-radius: 6px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const ChooseAmountBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
`;

export const FinalAmount = styled.p`
    font-family: Inter, sans-serif;
    color: ${colors.accent};
    font-weight: 600;
    font-size: 23px;
    margin: 8px 0;
`;

export const AmountInput = styled.input`
    padding: 15px;
    outline-color: ${colors.accent};
    border: 1px solid ${colors.accent};
    border-radius: 4px;
    text-align: center;
    letter-spacing: 1px;
    margin: 0 25px;
`;

export const MathBtns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    /* margin: 0 10px; */
    cursor: pointer;
    color: ${colors.accent};
    transition: all 250ms ease-in-out;
    background-color: ${colors.accentShadow};
    border-radius: 50%;
    :hover {
        color: ${colors.primary};
    }
`;

export const IncrementBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WithdrawContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;