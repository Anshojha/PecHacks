import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [tokenAmount, setTokenAmount] = useState('');
  const [date, setDate] = useState('');
  const [transactionDetails, setTransactionDetails] = useState([]);

  const handleGetDetails = () => {
    // Simulating fetching data from an API or blockchain
    // Replace this with your actual logic to fetch transaction details
    const fetchedDetails = [
      { sNo: 1, date: '2023-10-29', tokenAmount: '0.233eth', transactionAddress: '0xabc123' },
      // Add more transaction details as needed
    ];

    // Update state with fetched details
    setTransactionDetails(fetchedDetails);
  };

  return (
    <div className="main">
      <div className='main2'>
        <h1>Token Amount</h1><br />
        <input
          className='payee1'
          type="text"
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
        />
        <h1>Date</h1><br />
        <input
          className='payee1'
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /><br />
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
        {transactionDetails.map((transaction) => (
          <div className='details1' key={transaction.sNo}>
            <div className='number'>{transaction.sNo}</div>
            <div className='date1'>{transaction.date}</div>
            <div className='amount'>{transaction.tokenAmount}</div>
            <div className='address'>{transaction.transactionAddress}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;