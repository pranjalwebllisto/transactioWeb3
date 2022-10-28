import { configureStore, combineReducers } from '@reduxjs/toolkit'
import metamaskReducer from '../features/metamaskSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['metamaskReducer']
}

const rootReducer = combineReducers({
    metamask: metamaskReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    //devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export default store;
//export const persistor = persistStore(store)

// export default configureStore(
//     {
//         reducer: {
//             metamask: metamaskReducer
//         },
//     }
// )