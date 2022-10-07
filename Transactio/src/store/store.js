import { configureStore } from '@reduxjs/toolkit'
import metamaskReducer from '../features/metamaskSlice'

export default configureStore(
    {
        reducer: {
            metamask: metamaskReducer
        },
    }
)