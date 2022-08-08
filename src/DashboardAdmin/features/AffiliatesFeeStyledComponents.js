import styled from "styled-components";
import { colors } from "../../constants/colors";

export const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 20px;
    margin-top: 50px;
`;

export const UpdateBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.accent};
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .25s ease-in;
  :hover {
    color: red;
  }
`;
export const Title = styled.h3`
  color: #fff;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
`;
export const SignupDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const Input = styled.input`
  background-color: #fff;
  padding: 6px 8px;
  border-radius: 0 6px 6px 0;
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;
export const InputPrefix = styled.div`
  background-color: #fff;
  padding: 6px 8px;
  border-radius: 6px 0 0 6px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  /* border-right: 1px solid #242731; */
  width: 40px;
  text-align: right;
`;
export const SignupInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 12px 20px;
  border-radius: 6px; */
`;
export const SettingsBox = styled.div`
  background-color: #242731;
  /* margin-top: 50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-radius: 6px;
`;
export const FeeLabel = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  margin: 10px 0 8px 0;
`;
export const FeeValue = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
`;
export const CurrentDetails = styled.div`
  display: flex;
  gap: 20px;
`;
export const CircleContainer = styled.div`
  background-color: #242731;
  width: 140px;
  height: 140px;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 1px 1px 12px rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  text-align: center;
  color: ${colors.accent};
`;