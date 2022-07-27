import React from 'react';
import { SectionContainer } from '../features/SectionContainer';
import MinMenuBar from '../features/MinMenuBar';

const Verify_2_payment = () => {
  return (
    <SectionContainer>
      <MinMenuBar />
      <div className="messages">
          <h1 className="title1">Paying with Bitcoin</h1>
          <p>
            Scan the QR code or use the wallet address below
          </p>

          <div className="payment_options">
            <div className="qr_code_picture"></div>
            <div className="wallet_address">
              <p>Wallet Address</p>
              <div className="wallet_address_box">
                <p>1192-2252-7634-8835</p>
                <button>Copy</button>
              </div>
            </div>
          </div>

          <div className="buttons">
            <button className="continue">Continue</button>
          </div>

          <div className="warning">
            <p>Make sure you have proof of payment before you continue.</p>
          </div>
      </div>
    </SectionContainer>
  )
}

export default Verify_2_payment
