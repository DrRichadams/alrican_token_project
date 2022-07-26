import React from 'react'

const Verify_1_welcome = () => {
  return (
    <div>
      <div className="menuBar">
        <div className="logo">A.C.M</div>
        <button>logout</button>
      </div>
      <div className="messages">
          <h1 className="title1">Welcome Nadim.</h1>
          <h3>Thank you for joining our amazing family.</h3>
          <p>
            To continue and start using our services, pay a none-refundable fee of USD$ 50 to any one of the following crypto wallets.
          </p>
          <div className="warning">
            <p>Please, keep a record of the transaction, it will be required late for verification.</p>
          </div>
      </div>

      <div className="wallets">
          <div className="wallet_box">
            <div className="icon">O</div>
            <p className="name">Bitcoin</p>
          </div>
          <div className="wallet_box">
            <div className="icon">O</div>
            <p className="name">Ethereum</p>
          </div>
          <div className="wallet_box">
            <div className="icon">O</div>
            <p className="name">Dogie Coin</p>
          </div>
      </div>
    </div>
  )
}

export default Verify_1_welcome
