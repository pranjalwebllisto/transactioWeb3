import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { TransactionProvider } from './context/TransactionContext';

import App from './App';

ReactDOM.render(
    <TransactionProvider>
        <Provider store={store}><App /></Provider></TransactionProvider>, document.getElementById('root'));
