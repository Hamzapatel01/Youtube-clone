import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./Appslice";
import chatReducer from "./Chatslice";

const store = configureStore({
    reducer:{
        app:appReducer,
        chat:chatReducer
    }
})
export default store;
