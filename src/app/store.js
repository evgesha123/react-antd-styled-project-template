import { configureStore } from '@reduxjs/toolkit';
import { interceptor } from '../services/Api/Api';



const reducer = {
};


const store = configureStore({
  reducer,
  devTools: true,
});

interceptor(store);

export default store;
