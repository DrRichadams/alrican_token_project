import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { colors } from '../../constants/colors';

const VerifySingleUser = () => {
    const location = useLocation();
  return (
    <div>
        Verifying use {location.state}
    </div>
  )
}

export default VerifySingleUser
