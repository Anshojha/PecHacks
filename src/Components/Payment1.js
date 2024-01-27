import React, { useState } from 'react';
import './Payment.css'
// import payImg from "../assets/pay.jpg"

const Payment = () => {
  // const [transactionDetails, setTransactionDetails] = useState([]);

  const handleGetDetails = () => {
    // Here you can write the logic to fetch the transaction details and update the state
    // setTransactionDetails([...]); // Update the transactionDetails state with fetched data
  }

  return (
    <div className="main">
      <div className='main2'>
        <h1>Token Amount</h1><br />
        <input className='payee1' type="text" />
        <h1>Date</h1><br />
        <input className='payee1' type="date" /><br />
        <button className='details' type="submit" onClick={handleGetDetails}>Get Details</button>
      </div>
      <div className='main3'>
        <h1>Transaction Details</h1>
        <div className='details1'>
          <div className='number'>S.No</div>
          <div className='date1'>Date</div>
          <div className='amount'>Token Amount</div>
          <div className='address'>Transaction Address</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;