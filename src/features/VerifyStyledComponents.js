import styled from "styled-components";
import { colors } from "../constants/colors";

export const WalletsContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  @media (max-width: 830px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
export const WalletBox = styled.div`
  box-sizing: border-box;
  background-color: rgba(192,192,192,.4);
  min-height: 250px;
  height: 100%;
  border-radius: 6px;
  padding: 12px;
`;
export const WarningText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 0.8rem;
  font-size: 600;
  margin: 0;
  color: #01050f;
  text-transform: uppercase;
  text-align: center;
`;
export const WarningBox = styled.div`
  background-color: ${colors.accentShadow};
  padding: 6px 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const VerMessage2 = styled.p`
    font-family: Roboto, sans-serif;
    /* font-size: 1.2rem; */
    font-weight: 500;
    color: #01050f;
    margin: 0;
    text-align: center;

`;
export const VerMessage1 = styled.h3`
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #01050f;
    margin: 0;
    text-align: center;

`;
export const VerTitle = styled.h3`
    font-family: Inter, sans-serif;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${colors.accent};
    margin: 0;
    text-align: center;

`;
export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;