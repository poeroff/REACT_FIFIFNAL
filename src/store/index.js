import { configureStore } from '@reduxjs/toolkit';
import Liveslice from "./Live"


const store = configureStore({
    reducer :  {Live : Liveslice.reducer}
   });


export default store;