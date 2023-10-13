import { createSlice } from "@reduxjs/toolkit"
const initialcounterState = { click1 : false, click2 : false, click3 : false, click4 : false }

const Liveslice = createSlice({
  name : "LiveRanking",
  initialState : initialcounterState,
  reducers:{
   Click1(state) {
    state.click1 = true
    state.click2 = false
    state.click3 = false
    state.click4 = false
   },
   Click2(state) {
    state.click1 = false
    state.click2 = true
    state.click3 = false
    state.click4 = false

   }, 
   Click3(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = true
    state.click4 = false

   },
   Click4(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = true

   },
  
   
  }
})
export const LiveActions = Liveslice.actions
export default Liveslice.reducer;
