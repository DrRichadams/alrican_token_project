import React, {useState, useEffect} from 'react';
import { colors } from '../../constants/colors';
import styled from 'styled-components';
import { WITHDRAWAL_HISTORY } from '../../constants/DATA';
import WithdrawRequestBox from '../features/WithdrawRequestBox';
import NoRequestsError from './NoRequestsError';
import { UserAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase/config';
import { onSnapshot, doc, where, query } from 'firebase/firestore';

const PendingRequests = () => {
  const {user} = UserAuth();

  // useEffect(() => {
  //   const q = query(collection(db, "KYC"), where("id", "==", `${user?.uid}`));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const myKYC = [];
  //     querySnapshot.forEach((doc) => {
  //       myKYC.push(doc.data());
  //     });
  //     // set_hasKYC(myKYC[0]?.hasKYC);
  //     console.log("My KYCyo", myKYC);
  //   });

  //   return () => {
  //     unsubscribe();
  // }
  // }, [user])

  const pending_requests = WITHDRAWAL_HISTORY.filter(item=>item.status==='pending');
  // const pending_requests = WITHDRAWAL_HISTORY;
  if(pending_requests.length) {
    return (
      <>
        {
          pending_requests.map(item=>(
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
  if(!pending_requests.length) return <NoRequestsError type="pending" />}

export default PendingRequests
