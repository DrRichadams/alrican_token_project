import React from 'react';
import { Navigate } from "react-router-dom";

const AdminRouter = ({routeto}) => {
  // return <Navigate to={"dashboard"} />
  return <Navigate to={routeto} />
}

export default AdminRouter
