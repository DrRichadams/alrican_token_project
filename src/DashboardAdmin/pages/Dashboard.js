import React from 'react';
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';


const Dashboard = () => {
  return (
    <div>
        <PageTitles name="Richard" location="Dashboard" />
        Users and values in their different accounts
    </div>
  )
}

export default Dashboard
