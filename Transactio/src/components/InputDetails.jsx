import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
const InputDetails = ({ handleAddressTo, handleAmount, handleMesssage }) => {
  const value = useContext(TransactionContext);
  const [addressTo, setaddressTo] = useState('');
  const [amount, setamount] = useState(0);
  const [message, setmessage] = useState('');

  console.log('context value ', value.test);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <input placeholder='address to' name='addressTo' type='text' onChange={(e) => setaddressTo(e.target.value)} />
      </div>
      <div>
        <input
          placeholder='amount'
          name='amount'
          type='number'
          step={0.00001}
          onChange={(e) => setamount(e.target.value)}
        />
      </div>
      <div>
        <input placeholder='message' name='message' type='text' onChange={(e) => setmessage(e.target.value)} />
      </div>
      <div>
        <button onSubmit={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default InputDetails;
