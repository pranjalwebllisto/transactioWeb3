import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, transactionAddress } from '../utils/constants';

export const TransactionContext = React.createContext();


const { ethereum } = window;
function getEthereumContract() {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(transactionAddress, contractAbi, signer);

  return transactionContract
}

export const TransactionProvider = ({ children }) => {
  const [account , setAccount] = useState('')
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) alert('please install metamask');
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setAccount(setAccount(accounts[0]))
    console.log(accounts);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return <TransactionContext.Provider value={{ getEthereumContract , ethereum , account   }}>{children}</TransactionContext.Provider>;
};
