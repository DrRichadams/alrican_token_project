import styled from "styled-components";
import { colors } from "../../constants/colors";


export const MonthlyEarningBtn = styled.button`
    border: 2px solid ${colors.accent};
    padding: 6px 8px;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
    font-size: 12px;
    border-radius: 6px;
    background-color: transparent;
    color: ${colors.accent};
    cursor: pointer;
    transition: all 200ms cubic-bezier(0.55, 0.09, 0.67, 0.51);
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const MonthlyEarningTitlesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ImgIcon = styled.img`
    width: 100%;
`;
export const MonthlyAmountTitle = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 13px;
`;
export const MonthlyAmount = styled.h3`
    margin: 0;
    font-family: Roboto, sans-serif;
    color: ${colors.accent};
`;
export const MonthlyBoxBadge = styled.div`
    position: absolute;
    margin: 0;
    left: 50%;
    transform: translateX(-50%);
    top: -18px;
    background-color: ${colors.accent};
    padding: 6px 20px;
    border-radius: 20px;
    color: #fff;
    width: 100%;
    max-width: 80px;
    text-align: center;
`;
export const MonthlyBoxFillRight = styled.div`
    
`;
export const MonthlyBoxFillLeft = styled.div`
    
`;
export const MonthlyBoxFill = styled.div`
    display: grid;
    grid-template-columns: 1fr 80px;
    /* justify-items: center; */
    align-items: center;
    background-color: #f5f5f5;
    margin: 10px;
    padding: 8px;
    border-radius: 8px;
`;
export const MothlyBoxOutline = styled.div`
    border: 2px solid ${colors.accent};
    position: relative;
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
`;
export const MonthlyBoxesContainer = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
`;
export const MonthlyEarningTitle = styled.h3`
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
    font-size: 25px;
    color: #01050f;
`;
export const MonthlyContainer = styled.div`
    margin-top: 80px;
`;
export const ImgEarn = styled.img`
    width: 100%;
`;
export const DividentsIcon = styled.div`
    /* background-color: red;
    padding: 20px; */
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #fff;
    padding: 12px;
    border-radius: 50%;
    box-shadow: 0 6px 24px rgba(0,0,0,0.2), 0 -6px 24px rgba(0,0,0,0.2);
`;
export const CurrentInvestmentRightBtn = styled.button`
    padding: 8px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
    border: none;
    background-color: transparent;
    color: ${colors.accent};
    transition: all 200ms ease-in-out;
    :hover{
        padding: 8px 16px;
        color: orangered;
    }
`;
export const CurrentInvestmentTitle = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 900;
    color: #01050f;
    text-transform: uppercase;
`;
export const CurrentInvestmentPlan = styled.h3`
    margin: 0;
    font-family: Oswald, sans-serif;
    font-size: 25px;
    font-weight: 900;
    color: ${colors.accent};
`;
export const CurrentInvestmentLeftSect = styled.div`
    
`;
export const CurrentInvestmentContainer = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 6px;
`;