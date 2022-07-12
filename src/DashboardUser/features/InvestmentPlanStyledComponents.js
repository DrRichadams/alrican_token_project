import styled from "styled-components";
import { colors } from "../../constants/colors";

export const UpgradeBtn = styled.button`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    padding: 6px 8px;
    background-color: ${colors.accent};
    color: #fff;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
    transition: all 200ms ease-in-out;
    :hover{
        background-color: #fff;
        color: ${colors.accent};
    }
`;
export const RecoNameFee = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Recommendation = styled.div`
    flex: 1;
    background-color: ${colors.accentShadow};
    padding: 12px;
    border-radius: 6px;
    /* transform-origin: bottom; */
    transition: all 300ms ease;
    :hover {
        transform: scale(0.9);
    }
`;
export const ActualRecommendations = styled.div`
    display: flex;
    gap: 20px;
    margin: 16px 0;
`;
export const Recommendations = styled.div`
    margin-top: 30px;
`;
export const RecommendStory = styled.div`
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
`;
export const RecommendTitle = styled.div`
    margin: 0;
    font-weight: 900;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
`;
export const PackageTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ActualBalance = styled.p`
    margin: 0;
    color: #01050f;
    font-weight: 900;
    font-size: 20px;
    font-family: Roboto;
    margin-top: 2px;
`;
export const AvailableBalance = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-size: 14px;
`;
export const PackageCost = styled.p`
    margin: 0;
    color: #01050f;
    font-weight: 900;
    font-size: ${props=> props.size ? props.size:20}px;
    font-family: Roboto;
    margin-top: 2px;
`;
export const PackageType = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-size: 14px;
`;
export const ValuesSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BarTitle = styled.h4`
    text-transform: uppercase;
    color: #01050f;
    font-size: 20px;
    font-family: Oswald, sans-serif;
    font-weight: 900;
    margin: 0;
`;
export const RequestBtn = styled.div`
    cursor: pointer;
    transition: all 250ms ease-in;
    text-transform: uppercase;
    border: 2px solid ${colors.accent};
    color: ${colors.accent};
    border-radius: 6px;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 500;
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const TitleBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const CurrentPlan = styled.div`
    width: 100%;
    min-height: 35vh;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 6px 12px rgba(36,40,80,0.3), 0px -6px 12px rgba(36,40,80,0.3);
    padding: 15px;
`;