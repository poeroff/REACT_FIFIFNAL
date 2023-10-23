import { configureStore } from '@reduxjs/toolkit';
import sideSlice from './side-action';


const store = configureStore({
    reducer :  {side : sideSlice.reducer},
   });


export default store;