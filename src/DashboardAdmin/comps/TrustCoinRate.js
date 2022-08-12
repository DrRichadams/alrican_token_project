import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { UserAuth } from '../../contexts/AuthContext';
import AffiliatesCircle from './AffiliatesCircle';
import LongInput from './LongInput';

const TrustCoinRate = () => {
  const [currentrate, setcurrentrate] = useState(null);
  const {coinrate, addCoinRateFirebase} = UserAuth();

  const handleInputChange = (e) => {
    if(!isNaN(e.target.value)) {
      setcurrentrate(e.target.value)
    }
  }
  const handleSubmitChange = () => {
    addCoinRateFirebase(currentrate);
    setcurrentrate('')
  }
  return (
    <div>
      <AffiliatesCircle fee={coinrate} label="Current rate in TC/USD$ 1"/>
      <Inputs>
        <LongInput 
            title="Set current rate" 
            prefix="TC" 
            placeholder="New rate in TC" 
            btnText={currentrate && currentrate.length > 0 ?  "Update":""} 
            onChange={(e) => handleInputChange(e)}
            onClick={handleSubmitChange}
            value={currentrate}
          />
      </Inputs>
    </div>
  )
}


export const Inputs = styled.div`
  margin-top: 20px;
`;

export default TrustCoinRate
