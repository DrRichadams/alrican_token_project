import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';


const Headers = () => {
const [headerText] = React.useState(["Email", "Wallet Address", "Amount", "Status", "Date"])
return(
<HistoryHeaders>
{headerText.map((item, index)=><Header key={index}>{item}</Header>)}
</HistoryHeaders>)}

const HistoryEntity = ({email, address, amount, status, date}) => {
  return(
    <HistoryBox>
      <HistoryItem>{email}</HistoryItem>
      <HistoryItem>{address}</HistoryItem>
      <HistoryItem>USD$ {amount}</HistoryItem>
      <HistoryItem>{status}</HistoryItem>
      <HistoryItem>{date}</HistoryItem>
    </HistoryBox>
  )
}

const TopUpHistory = () => {
  return (
    <TopupHistoryContainer>
      <Headers />
      <HistoryContainer>
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="proxyserver7798@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
        <HistoryEntity  email="jora@gmail" address="nasd-asbe-ernb-dfbe-seer" amount="2000" status="approved" date="29 July 2022" />
      </HistoryContainer>
    </TopupHistoryContainer>
  )
}


export const HistoryItem = styled.p`
  margin: 0;
  color: rgba(192,192,192,1);
  font-family: Roboto, sans-serif;
  font-weight: 300;
`;
export const HistoryBox = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5px;
  /* background-color: red; */
`;
export const HistoryContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow-y: scroll;
`;
export const Header = styled.div`
  /* background-color: red; */
  color: ${colors.accent};
  font-family: Inter, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
`;
export const HistoryHeaders = styled.div`
  /* background-color: red; */
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5px;
`;
export const TopupHistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default TopUpHistory
