import React from 'react'

const Verify_3_proof = () => {
  return (
    <div>
      <div className="menuBar">
        <div className="logo">A.C.M</div>
        <button>logout</button>
      </div>
      <div className="messages">
          <h1 className="title1">Submit proof of payment</h1>
          <p>Take a screenshot of your transaction and submit it here</p>
      </div>
      <div className="submit_options">
        <div className="drag_n_drop">drag and drop</div>
        <div className="select">
          <p>Select your screenshot from your computer storage</p>
          <input type="file" />
        </div>
      </div>
      <button className="submit">Submit proof of payment</button>
    </div>
  )
}

export default Verify_3_proof
