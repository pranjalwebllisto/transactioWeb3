import { createSlice } from "@reduxjs/toolkit";

export const metamaskSlice = createSlice(
    {
        name: 'metamask',
        initialState: { accountNumber: '', balance: '', isMetamaskConnected: false },
        reducers: {
            connectMetamask: (state, action) => {
                return { ...state, isMetamaskConnected: action.payload }
            },
            updateAccount: (state, action) => {
                return { ...state, accountNumber: action.payload }
            },
            updateBalance: (state, action) => {
                return { ...state, balance: action.payload }
            }
        }
    }
)

export const { connectMetamask, updateAccount, updateBalance } = metamaskSlice.actions
export default metamaskSlice.reducer;