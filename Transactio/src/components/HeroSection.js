import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './HeroSection.css';
import { Button } from './Button';
import { getWeb3 } from '../components/pages/Services/connectWallet'
import Web3 from 'web3';
import Web3Modal from "web3modal";
import { connectMetamask, updateAccount } from '../features/metamaskSlice';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {

  const dispatch = useDispatch()


  const account = useSelector(state => state.metamask.accountNumber)
  const metamaskConnected = useSelector(state => state.metamask.isMetamaskConnected)

  const balance = useSelector(state => state.metamask.balance)
  const getweb = async () => {
    const web = await getWeb3();
    console.log(web)
  }

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      const data = await window.ethereum.request({ method: "eth_requestAccounts" })
      console.log(data)
      if (data) {

        dispatch(updateAccount(data[0]))
        dispatch(connectMetamask(true))

      }
    }
    else {
      alert("install metamask extension!")
    }
  }

  const handleDisconnectWallet = async () => {


    dispatch(updateAccount(''))
    dispatch(connectMetamask(false))

  }
  const checkIsConnected = async () => {
    const acc = await window.ethereum.request({ method: 'eth_accounts' })
    console.log("already connected ", acc)
    return acc
  }

  useEffect(() => {
    async function callCheckIsConnected() {
      const isConnected = await checkIsConnected()
      console.log("is connected method", isConnected)
      if (isConnected.length > 0)
        dispatch(connectMetamask(true))
      else
        dispatch(connectMetamask(false))
    }
    callCheckIsConnected()
    console.log("calling getweb")
    getweb();
  }, [])




  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                {console.log(metamaskConnected)}
                {!metamaskConnected && <Button buttonSize='btn--wide' buttonColor='blue' onClick={handleConnectWallet}>
                  {buttonLabel}
                </Button>}
                {metamaskConnected && <Button buttonSize='btn--wide' buttonColor='red' onClick={handleDisconnectWallet}>
                  wallet connected
                </Button>}

              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
