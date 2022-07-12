import React from "react";
import styled from "styled-components";
import {colors} from "../../constants/colors";
import { investment_packages } from "../../constants/DATA";

const InvestmentsPage = () => {
    return(
        <div>
            <InvestmentsTitle>Available Investments Plans</InvestmentsTitle>
            <PlanContainer>
                {
                    investment_packages.map(item => (
                        <PlanBox>
                            <PlanName>{item.package_name}</PlanName>
                            <PlanStory>{item.story}</PlanStory>
                            <PlanFee>USD$ {item.fee}</PlanFee>
                            <PlanBtn>Invest now</PlanBtn>
                        </PlanBox>
                    ))
                }
            </PlanContainer>
        </div>
    )
}

export const PlanBox = styled.div`
    background-color: #f5f5f5;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0 6px 24px rgba(0,0,0,00.2);
`;
export const PlanContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`;
export const PlanBtn = styled.button`
    background-color: ${colors.accent};
    color: #fff;
    border: 2px solid ${colors.accent};
    margin: 0 0 20px 0;
    padding: 8px 15px;
    width: 100%;
    max-width: 130px;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
    border-radius: 3px;
    cursor: pointer;
    transition: all 200ms cubic-bezier(1, 1.01, 0.18, 0.6);
    :hover{
        background-color: transparent;
        color: ${colors.accent};
    }
`;
export const PlanFee = styled.p`
    color: ${colors.accent};
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 18px;
    margin: 0 0 20px 0;
`;
export const PlanStory = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 300;
    text-align: center;
    margin: 0 0 20px 0;
`;
export const PlanName = styled.div`
    font-family: Inter, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 25px;
    color: #01050f;
    margin: 0 0 20px 0;
`;
export const InvestmentsTitle = styled.h3`
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
    font-weight: 900;
    font-size: 25px;
    color: #01050f;
    text-align: center;
`;

export default InvestmentsPage