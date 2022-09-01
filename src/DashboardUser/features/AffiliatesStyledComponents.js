import styled from "styled-components";
import { colors } from "../../constants/colors";

export const AffiliateBox = styled.div`
    background-color: #fff;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
`;
export const AffiliateIndex = styled.p`
    color: #aaa;
    opacity: .6;
    font-family: Inter, sans-serif;
    font-size: 35px;
    font-weight: 900;
    margin: 0;
`;
export const AffiliateEmail = styled.p`
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #aaa;
`;
export const AffiliateName = styled.h3`
    margin: 0;
    text-transform: uppercase;
    font-family: Roboto,sans-serif;
    font-weight: 900;
    color: ${colors.accent};
    opacity: .6;
    margin-bottom: 5px;
`;
export const AffiliateDetails = styled.div`

`;
export const AffiliatesListContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 100%;
    /* background-color: blue; */
    @media (max-width: 590px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 445px) {
        grid-template-columns: 1fr;
    }
`;

export const AffiliateLinkTitle = styled.h3`
    margin: 0;
    background-color: #fff;
    padding: 8px 12px;
    font-family: Inter;
    font-size: 14px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 0 0 6px;
`;
export const AffiliateLinkBox = styled.p`
    margin: 0;
    box-sizing: border-box;
    /* max-width: 200px; */
    word-wrap: break-word;
    background-color: #fff;
    color: blue;
    text-decoration: underline;
    /* flex: 1; */
    padding: 8px 12px;
    width: 95%;
    /* min-width: 100%;
    min-height: 30px; */
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
    /* width: 100%; */
    @media (max-width: 580px) {
        /* width: 80%; */
    }
`;
export const AffiliateLinkBtn = styled.div`
    background-color: ${colors.accent};
    color: #fff;
    padding: 8px 15px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    :hover {
        opacity: .7;
    }
`;
export const AffiliateLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /* align-items: center; */
    gap: 20px;
    width: 100%;
    @media (max-width: 1275px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const AffiliatesContainer = styled.div`
    /* background-color: red; */
    min-height: 100vh;
`;