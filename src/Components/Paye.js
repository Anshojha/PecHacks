import React, { useState } from 'react';
import './Payment.css';

const Paye = () => {
  const [tokenAmount, setTokenAmount] = useState('');
  const [date, setDate] = useState('');
  const [transactionDetails, setTransactionDetails] = useState([]);

  const generateRandomTransactionId = () => {
    return Math.floor(10000 + Math.random() * 90000); // Random 5-digit number
  };

  const handleGetDetails = () => {
    // Validate input before updating the state
    if (!tokenAmount || !date) {
      alert("Please fill in all fields.");
      return;
    }

    // Add the new transaction to the state with a random 5-digit ID
    const newTransaction = {
      sNo: transactionDetails.length + 1,
      Date: date,
      TokenAmount: tokenAmount,
      TransactionId: generateRandomTransactionId(),
    };

    setTransactionDetails([...transactionDetails, newTransaction]);

    // Clear input fields after submitting
    setTokenAmount('');
    setDate('');

    alert("Payment Successful!!");
  };

  return (
    <div className="main">
      <div className='main2'>
        <h1>Token Amount</h1><br />
        <input className='payee1' type="text" value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)} />
        <h1>Date</h1><br />
        <input className='payee1' type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
        <button className='details' type="submit" onClick={handleGetDetails}>Pay Your Rent</button>
      </div>
      <div className='main3'>
        <h1>Transaction Details</h1>
        <div className='details1'>
          <div className='number'>S.No</div>
          <div className='date1'>Date</div>
          <div className='amount'>Token Amount</div>
          <div className='id'>Transaction ID</div>
        </div>
        {transactionDetails.map((transaction, index) => (
          <div className='detailsTable' key={index + 1}>
            <div className='number'>{transaction.sNo}</div>
            <div className='date1'>{transaction.Date}</div>
            <div className='amount'>{transaction.TokenAmount}</div>
            <div className='id'>{transaction.TransactionId}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paye;
