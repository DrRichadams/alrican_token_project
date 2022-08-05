import React from 'react';
import styled from 'styled-components';
import MainMenu from '../comps/MainMenu';
import { Outlet } from "react-router-dom";

const  AdminDash = () => {
  return (
    <AdminContainer>
      <MainMenu />
      <RightContents>
          <Outlet />
      </RightContents>
    </AdminContainer>
  )
}


export const RightContents = styled.div`
    padding: 35px;
    width: 100%;
`;
export const AdminContainer = styled.div`
    background-color: #1F2128;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
`;

export default AdminDash