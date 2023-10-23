import {createSlice} from "@reduxjs/toolkit";

const init = {product : [false,false,false,false,false,false,false,false,false,false,false,false,]}

const sideSlice = createSlice({
    name : "side",
    initialState : init,
    reducers :{
        click(state,actions){
            if(state.product[actions.payload]=== true){
                state.product[actions.payload]  = false
                return;
            }
            else{
                for(let i  = 0; i<state.product.length; i++){
                    state.product[i] = false;
                }
                console.log(actions.payload)
                state.product[actions.payload] = true;

            }
         
        }
    }
})

export const sideActions = sideSlice.actions;
export default sideSlice;