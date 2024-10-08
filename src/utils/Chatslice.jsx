import {createSlice} from "@reduxjs/toolkit";

const Chatslice = createSlice({
    name:"chat",
    initialState:{
        message:[],
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message.splice(100,1);
            state.message.push(action.payload);
        } 
    }
})
export const {setMessage} = Chatslice.actions;
export default Chatslice.reducer; 
