import styled from "styled-components";
import { colors } from "../../constants/colors";

export const TrustTitle = styled.h3`
    margin: 0;
    margin-top: 50px;
    margin-bottom: 40px;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 30px;
    color: ${colors.accent};
`;

export const Img = styled.img`
    width: 100px;
    @media (max-width: 510px) {
        width: 70px;
    }
`;
export const TrustBoxesContainer = styled.div`
    /* overflow: scroll; */
    height: 80vh;
`;
export const TrustBox = styled.div`
    background-color: #0cf57528;
    padding: 15px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    box-shadow: 1px 1px 12px #01050f5e;
`;
export const TrustRight = styled.div`
    display: flex;
    align-items: center;
`;
export const TrustIconContainer = styled.div``;
export const TrustDetails = styled.div`
    margin-left: 18px;
`;
export const TrustAmount = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-family: Roboto, sans-serif;
    font-weight: 800;
    margin-bottom: 6px;
`;
export const TrustAmountTitle = styled.p`
    margin: 0;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 13px;
`;
export const TrustLeft = styled.div``;
export const BtnText = styled.p`
    margin: 0;
`;
export const TrustBtn = styled.button`
    background-color: transparent;
    /* border: 2px solid ${colors.accent}; */
    border: none;
    border-radius: 6px;
    color: ${colors.accent};
    padding: 10px 25px;
    min-width: 100px;
    /* width: 150px; */
    /* width: 250px; */
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: all 230ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    @media (max-width: 485px) {
        font-size: 10px;
        gap: 6px;
        min-width: 50px;
    }
    @media (max-width: 440px) {
        padding: 0;
    }
    :hover {
        padding: 10px 30px;
        color: blue;
        gap: 10px;
    }
`;