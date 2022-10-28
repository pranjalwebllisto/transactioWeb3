import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import DisplayAnimation from '../components/animation/Animation';
import transactionSVG from "../components/animatedSVG/transaction.json"
import Styles from './InputDetails.module.css'
import { ethers } from 'ethers';
import { TransactionContext } from '../context/TransactionContext';
const InputDetails = () => {
  const account = useSelector(state => state.metamask?.accountNumber)
  console.log("the account is ",account)
  const { getEthereumContract , ethereum } = useContext(TransactionContext);
  
  const [loading, setIsLoading] = useState(false);
  const [form , setForm] = useState({addressTo:'',amount:0,message:''})
 

  const handleChange = (e) => {
   
    
    setForm((prevState) =>({...prevState, [e.target.name]:e.target.value}))
  };
  async function sendTransaction(addressTo,amount , message) {
    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: account,
        to: addressTo,
        gas: '0x5208',
        value:ethers.utils.parseEther(amount)._hex
      }]
    })
    const transactionContract = getEthereumContract();
    console.log("inside transactioncontract function")
    const transactionHash = await transactionContract.addToBlockchain(addressTo, ethers.utils.parseEther(amount), message)
    setIsLoading(true)
    await transactionHash.wait()
    console.log("success")
    setIsLoading(false)
    const transactionCount = await transactionContract.getTransactionCount()
    console.log("transactionCount" , transactionCount)
  }
  const handleSubmit = (e) => {
  
    e.preventDefault()
    const { addressTo, amount, message } = form
    debugger;
    sendTransaction(addressTo, amount,message)
    
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.animation}>
                <DisplayAnimation
                  animation={transactionSVG}
                  animationName={"transactionSVG"}
                ></DisplayAnimation></div>
      <div className={Styles.headingContainer}><h2 className={Styles.heading}>Send Transactions</h2></div>
     
      <div className={Styles.form}>
      <div>
        <input placeholder='address to' name='addressTo' type='text' onChange={handleChange} />
      </div>
      
      <div>
        <input
          placeholder='amount'
          name='amount'
          type='number'
          step={0.00001}
          onChange={handleChange}
        />
      </div>
      <div>
        <input placeholder='message' name='message' type='text' onChange={handleChange} />
      </div>
      <div>
        <button className={Styles.button} onClick={handleSubmit}>Send</button>
      </div>
      </div>
    </div>
  );
};

export default InputDetails;
