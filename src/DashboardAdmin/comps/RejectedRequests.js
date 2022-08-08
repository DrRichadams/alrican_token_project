import React from 'react';
import { WITHDRAWAL_HISTORY } from '../../constants/DATA';
import WithdrawRequestBox from '../features/WithdrawRequestBox';
import NoRequestsError from './NoRequestsError';

const RejectedRequests = () => {
  const rejected_requests = WITHDRAWAL_HISTORY.filter(item=>item.status==="rejected")
  if(rejected_requests.length) {
    return (
      <>
        {
        rejected_requests.map(item=>(
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

  if(!rejected_requests.length) return <NoRequestsError type="rejected"/>
}

export default RejectedRequests
