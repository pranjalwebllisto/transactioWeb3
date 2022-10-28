import React from 'react'
import Styles from './DisplayDetails.module.css'
const DisplayDetails = ({account , balance}) => {
  return (
      <div className={Styles.card}>
          <div className={Styles.header}>
              <div className={Styles.heading}>Account Details</div>
          </div>
          <div className={Styles.body}>
              <div className={Styles.details}>
              <div><span>Account: </span>{account}</div>
                  <div><span>Balance: </span>{balance}</div>
              </div>
              <button className={Styles.button}><div className={Styles.headingButton}>Send Transactions</div></button>
          </div>
          
    </div>
  )
}

export default DisplayDetails