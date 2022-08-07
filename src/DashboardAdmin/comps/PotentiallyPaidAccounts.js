import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { USERS } from '../../constants/DATA';
import UserBox from '../features/UserBox';

const PotentiallyPaidAccounts = () => {
  const potentialUsers = USERS.filter(item=>item.hasDocs)
  return (
    <>
      {potentialUsers.map(item=>(
        <UserBox name={item.name} email={item.email} btnTitle="Verify" onClick={() => {}} />
      ))}
    </>
  )
}

export default PotentiallyPaidAccounts
