import React from 'react';
import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';

const UnpaidAccounts = () => {
  const unpaidUsers = USERS.filter(item=>!item.hasDocs)
  return (
    <>
      {unpaidUsers.map(item=>(
        <UserBox name={item.name} email={item.email} btnTitle="Delete" onClick={() => {}} />
      ))}
    </>
  )
}

export default UnpaidAccounts
