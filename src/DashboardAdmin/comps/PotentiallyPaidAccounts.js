import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase/config';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { colors } from '../../constants/colors';
// import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';

const PotentiallyPaidAccounts = () => {
  const [my_users, set_my_users] = useState(null);
  const navigate = useNavigate();

  const handleVerify = (id, refererId, name, email, cell, address) => {
    navigate("/admin_dash/verify_single", {state: {
      id,
      refererId,
      name,
      email,
      cell,
      address,
    }})
  }

  useEffect(() => {
    const q = query(collection(db, "users"), where("hasProof", "==", true), where("isVerified", "==", false));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
          users.push(doc.data());
      });
      set_my_users(users);
    });

    return () => {
      unsubscribe();
  }
  }, [])

  // useEffect(() => {
  //   console.log("The users ", my_users)
  // }, [my_users])

  
  // const potentialUsers = USERS.filter(item=>item.hasDocs)
  return (
    <>
      {my_users && my_users.map(item=>(
        <UserBox name={item.names} email={item.email} btnTitle="Verify" onClick={() => {
          handleVerify(item.id, item.refererId, item.names, item.email, item.cell, item.address)
        }} key={item.id} />
      ))}
    </>
  )
}

export default PotentiallyPaidAccounts
