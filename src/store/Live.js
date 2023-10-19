import { createSlice } from "@reduxjs/toolkit"
const initialcounterState = { click1 : true, click2 : false, click3 : false, click4 : false , click5 : false , click6 : false , click7 : false, click8: false ,click9: false ,click10: false ,click11: false,click12: false,click13: false}

const Liveslice = createSlice({
  name : "LiveRanking",
  initialState : initialcounterState,
  reducers:{
   changehandelr1(state) {
    state.click1 = true
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr2(state) {
    state.click1 = false
    state.click2 = true
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   }, 
   changehandelr3(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = true
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false
   },
   changehandelr4(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = true
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr5(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = true
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr6(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = true
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr7(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = true
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr8(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = true
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr9(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = true
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr10(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = true
    state.click11 = false
    state.click12 = false
    state.click13 = false

   },
   changehandelr11(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = true
    state.click12 = false
    state.click13 = false

   },
   changehandelr12(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = false
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = true
    state.click13 = false

   },
   changehandelr13(state) {
    state.click1 = false
    state.click2 = false
    state.click3 = false
    state.click4 = true
    state.click5 = false
    state.click6 = false
    state.click7 = false
    state.click8 = false
    state.click9 = false
    state.click10 = false
    state.click11 = false
    state.click12 = false
    state.click13 = true

   }

  
   
  }
})
export const LiveActions = Liveslice.actions
export default Liveslice.reducer;
