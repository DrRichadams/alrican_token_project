import React, {useState, useEffect} from 'react'
import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';
import UserBoxDelete from '../features/UserBoxDelete';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useSelector } from "react-redux";


const handleDeleteUser = () => {
  alert("User deleted successfully")
}

const AllAccounts = () => {
  const [my_users, set_my_users] = useState(null);
  const {isSuper} = useSelector(state => state.superUser);

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
        <UserBoxDelete 
            name={item.names} 
            email={item.email} 
            key={item.id} 
            id={item.id}
            refererId={item.refererId}
            btnTitle={isSuper ? "Delete":""} 
            onClick={handleDeleteUser} 
        />
      ))}
    </>
  )
}

export default AllAccounts
