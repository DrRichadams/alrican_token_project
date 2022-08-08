import React from 'react';
import styled from 'styled-components';
import { WITHDRAWAL_HISTORY } from '../../constants/DATA';

const PendingRequests = () => {
  // const pending_requests = WITHDRAWAL_HISTORY.filter(item=>item.status==='pending');
  const pending_requests = WITHDRAWAL_HISTORY;
  return (
    <>
      {
        pending_requests.map(item=>(
          <RequestBox>
            <RequestItem>{item.name}</RequestItem>
            <RequestItem>{item.email}</RequestItem>
            <NatureOfRequest>
              <FromBox>
                <RequestItem>{item.from}</RequestItem>
                <RequestTitle>From</RequestTitle>
              </FromBox>
              <AmountBox>
                <RequestItem>{item.amount}</RequestItem>
                <RequestTitle>Amount</RequestTitle>
              </AmountBox>
            </NatureOfRequest>
          </RequestBox>
        ))
      }
    </>
  )
}


export const RequestTitle = styled.p`
  margin: 0;
`;
export const AmountBox = styled.div`
  
`;
export const FromBox = styled.div`
  
`;
export const NatureOfRequest = styled.div`
  
`;
export const RequestItem = styled.p`
  margin: 0;
`;
export const RequestBox = styled.div`
  background-color: #242731;
  /* height: 100px; */
  box-sizing: border-box;
  padding: 12px;
  border-radius: 6px;
  /* margin: 15px; */
  box-shadow: 3px 3px 12px rgba(0,0,0,0.3);
`;

export default PendingRequests
