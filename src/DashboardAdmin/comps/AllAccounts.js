import React from 'react'
import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';

const AllAccounts = () => {
  return (
    <>
      {USERS.map(item=>(
        <UserBox name={item.name} email={item.email} />
      ))}
    </>
  )
}

export default AllAccounts
