import React, {useState} from "react";
import styled from "styled-components";
import {colors} from "../../constants/colors";
import { WITHDRAWAL_HISTORY } from "../../constants/DATA";

const WithdrawalHistoryPage = () => {
    const [ selectedHistory, setSelectedHistory ] = useState({
        all: true,
        approved: false,
        pending: false,
        failed: false
    });

    const handleSelect = (type) => {
        if(type==="all") setSelectedHistory({ all: true, approved: false, pending: false, failed: false });
        if(type==="approved") setSelectedHistory({ all: false, approved: true, pending: false, failed: false });
        if(type==="pending") setSelectedHistory({ all: false, approved: false, pending: true, failed: false });
        if(type==="failed") setSelectedHistory({ all: false, approved: false, pending: false, failed: true });
        console.log(selectedHistory)
    }

    const trueItems = WITHDRAWAL_HISTORY.filter(item => {
        if(selectedHistory.all) return true
        if(selectedHistory.approved) return item.status === "approved"
        if(selectedHistory.pending) return item.status === "pending"
        if(selectedHistory.failed) return item.status === "rejected"
    })

    return(
        <HistoryContainer>
            <HistoryMainTitle>Your withdrawal history</HistoryMainTitle>
            <HistoryBtns>
                <HistoryBtn isTrue = {selectedHistory.all} onClick={handleSelect.bind(this, "all")}>All</HistoryBtn>
                <HistoryBtn isTrue = {selectedHistory.approved} onClick={handleSelect.bind(this, "approved")}>Approved</HistoryBtn>
                <HistoryBtn isTrue = {selectedHistory.pending} onClick={handleSelect.bind(this, "pending")}>Pending</HistoryBtn>
                <HistoryBtn isTrue = {selectedHistory.failed} onClick={handleSelect.bind(this, "failed")}>Failed</HistoryBtn>
            </HistoryBtns> 
            <HistoryDisplay>
                {trueItems.map((item, index) => (
                    <HistoryBox key={item.id}>
                        <FromBox><Title>{item.from}</Title><Label>From</Label></FromBox>
                        <AmountBox><Title>{item.amount}</Title><Label>Amount</Label></AmountBox>
                        <ReqDate><Title>{item.date_of_request}</Title><Label>Date of request</Label></ReqDate>
                        <ResDate><Title>{item.date_of_reception}</Title><Label>Date of reception</Label></ResDate>
                        <Status>
                            <StatusDescription>
                                <Title>{item.status}</Title><Label>Status</Label>
                            </StatusDescription>
                            <StatusIcon color={
                                item.status == "approved"
                                ? "rgba(0,255,0,0.5)"
                                : item.status == "pending"
                                ? "rgba(255,255,0,0.5)"
                                : "rgba(255,0,0,0.5)"
                            }></StatusIcon>
                        </Status>
                    </HistoryBox>
                ))}
            </HistoryDisplay>
        </HistoryContainer>
    )
}



export const StatusIcon = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props=>props.color};
    border-radius: 50%;
`;
export const StatusDescription = styled.div`
    
`;
export const Title = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-family: Roboto,sans-serif;
`;

export const Label = styled.h3`
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 13px;
    color: ${colors.accent};
`;

export const FromBox = styled.p`
    margin: 0;
`;
export const AmountBox = styled.p`
    margin: 0;
`;
export const ReqDate = styled.p`
    margin: 0;
`;
export const ResDate = styled.p`
    margin: 0;
`;
export const Status = styled.p`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HistoryBox = styled.div`
    background-color: #fff;
    margin-bottom: 15px;
    padding: 12px 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    :hover {
        box-shadow: 0 -6px 12px rgba(36,40,80,0.2);
        transform: scale(1.03);
    }
`;
export const HistoryDisplay = styled.div`
    margin-top: 50px;
`;
export const HistoryContainer = styled.div`

`;
export const HistoryMainTitle = styled.h3`
    font-family: Oswald, sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    /* color: #01050f90; */
    color: ${colors.accent};
    opacity: .7;
    text-align: center;
    margin: 20px 0 50px 0;
`;
export const HistoryBtns = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
`;
export const HistoryBtn = styled.button`
    text-decoration: none;
    border: 2px solid ${colors.accent};
    border-radius: 4px;
    outline: none;
    padding: 8px 12px;
    width: 100%;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 200ms ease-in-out;
    /* background-color: ${colors.accent}; */
    background-color: ${props=> props.isTrue ? colors.accent:"transparent"};
    /* background-color: transparent; */
    color: ${props=> !props.isTrue ? colors.accent:"#f5f5f5"};
    cursor: pointer;
    :hover{
        background-color: ${props=> !props.isTrue ? colors.accent:"transparent"};
        color: ${props=> props.isTrue ? colors.accent:"#f5f5f5"};
    }
`;

export default WithdrawalHistoryPage