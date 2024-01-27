import React, { useState } from 'react';
import './Payment.css'

const Paye = () => {
  const [transactionDetails, setTransactionDetails] = useState([]);

  const handleGetDetails = () => {
    alert("Payment Successfull!!")
  }

  return (
    <div className="main">
      <div className='main2'>
        <h1>Token Amount</h1><br />
        <input className='payee1' type="text" />
        <h1>Date</h1><br />
        <input className='payee1' type="date" /><br />
        <button className='details'  type="submit" onClick={handleGetDetails}>Pay Your Rent</button>
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

export default Paye;