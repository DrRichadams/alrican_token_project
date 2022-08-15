import React, {useState, useEffect} from 'react'
import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config';

const AllAccounts = () => {
  const [my_users, set_my_users] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "users"), where("hasProof", "==", true), where("isVerified", "==", true));
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

  useEffect(() => {
    console.log("The users ", my_users)
  }, [my_users])

  return (
    <>
      {my_users && my_users.map(item=>(
        <UserBox name={item.names} email={item.email} />
      ))}
    </>
  )
}

export default AllAccounts
