import React from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import {colors} from "../../constants/colors";
import PageTitles from '../features/PageTitles';
import PageMenus from '../features/PageMenus';

const Terms_Conditions = () => {
  return (
    <div>
      <PageTitles name="Richard" location="Set Terms and Conditions" />
      <PageMenus place="tees" />
      <Outlet />
    </div>
  )
}

export default Terms_Conditions
