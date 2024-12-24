import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Configuring and creating the Redux store
const store = configureStore({
    reducer: rootReducer,
});

export default store;
