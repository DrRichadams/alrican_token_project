import React, {useState, useEffect} from 'react';
import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config';

const UnpaidAccounts = () => {
  const [my_users, set_my_users] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "users"), where("hasProof", "==", false));
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

  return (
    <>
      {my_users && my_users.map(item=>(
        <UserBox key={item.id} name={item.names} email={item.email} btnTitle="" onClick={() => {}} />
      ))}
    </>
  )
}

export default UnpaidAccounts
