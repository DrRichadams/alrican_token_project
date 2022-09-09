import React, {useState, useEffect} from 'react';
import { colors } from '../../constants/colors';
import styled from 'styled-components';
import { WITHDRAWAL_HISTORY } from '../../constants/DATA';
import WithdrawRequestBox from '../features/WithdrawRequestBox';
import NoRequestsError from './NoRequestsError';
import { UserAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase/config';
import { onSnapshot, doc, where, query, collection } from 'firebase/firestore';

const PendingRequests = () => {
  const [requests, setRequests] = useState(null);
  const {user} = UserAuth();

  useEffect(() => {
    const q = query(collection(db, "affiliateRequests"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const my_requests = [];
      querySnapshot.forEach((doc) => {
        my_requests.push(doc.data());
      });
      let filtered = my_requests.filter(item => item.isEligible == false && item.canRequest == true)
      setRequests(filtered);
      // console.log("my_requests", filtered);
    });

    return () => {
      unsubscribe();
  }
  }, [user])

  const pending_requests = WITHDRAWAL_HISTORY.filter(item=>item.status==='pending');
  // const pending_requests = WITHDRAWAL_HISTORY;
  if(requests) {
    if(requests.length) {
      return (
        <>
          {
            requests.map(item=>(
              <WithdrawRequestBox 
                key={item.id}
                name={item.names}
                email={item.email}
                from={item.type}
                amount={item.amount}
                onClick={()=>{}}
              />
            ))
          }
        </>
      )
    }
    if(!requests.length) return <NoRequestsError type="pending" />}
  }

export default PendingRequests
