import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { TransactionProvider } from './context/TransactionContext';

import App from './App';
let persistor = persistStore(store);
ReactDOM.render(
    <TransactionProvider>
        <Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider></TransactionProvider>, document.getElementById('root'));
