import React from 'react';
import WithdrawRequestBox from '../features/WithdrawRequestBox';
import { WITHDRAWAL_HISTORY } from '../../constants/DATA';
import NoRequestsError from './NoRequestsError';

const ApprovedRequests = () => {
  const approved_requests = WITHDRAWAL_HISTORY.filter(item=>item.status === "approved");
  if(approved_requests.length) {
    return (
      <>
        {
        approved_requests.map(item=>(
          <WithdrawRequestBox 
            key={item.id}
            name={item.name}
            email={item.email}
            from={item.from}
            amount={item.amount}
            onClick={()=>{}}
          />
        ))
      }
      </>
    )
  }

  if(!approved_requests.length) return <NoRequestsError type="approved" />
}

export default ApprovedRequests
