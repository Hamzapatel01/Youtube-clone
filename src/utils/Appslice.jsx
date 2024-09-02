import {createSlice} from "@reduxjs/toolkit";

const Appslice = createSlice({
    name:"app",
    initialState:{
        open:false, 
        video:[],
        category:"All",
        searchSuggestion:[],
    },
    reducers:{
        // action
        toggleSidebar:(state)=>{
            state.open = !state.open;
        },
        setHomeVideo:(state,action)=>{
            state.video = action.payload;
        },
        setCategory:(state,action)=>{
            state.category = action.payload;
        },
        setSearchSuggestion:(state,action)=>{
            state.searchSuggestion = action.payload;
        }
         
    } 
});
export const {toggleSidebar,setHomeVideo,setCategory,setSearchSuggestion} = Appslice.actions;
export default Appslice.reducer;
