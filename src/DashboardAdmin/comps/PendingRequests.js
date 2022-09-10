import React, {useState, useEffect} from 'react';
import { colors } from '../../constants/colors';
import styled from 'styled-components';
import WithdrawRequestBox from '../features/WithdrawRequestBox';
import NoRequestsError from './NoRequestsError';
import { UserAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase/config';
import { onSnapshot, doc, where, query, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { openApproveWithdrawModal } from '../../store/actions/modalAction';

const PendingRequests = () => {
  const [requests, setRequests] = useState(null);
  const {user} = UserAuth();
  const dispatch = useDispatch();

  const handleRequest = (id, balance, names, email, type) => {
    let payload = { id, balance, names, email, type }
    dispatch(openApproveWithdrawModal(payload))
  }

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
                onClick={()=> handleRequest(
                  item.id, 
                  item.amount, 
                  item.names, 
                  item.email,
                  item.type
                )}
              />
            ))
          }
        </>
      )
    }
    if(!requests.length) return <NoRequestsError type="pending" />}
  }

export default PendingRequests
