import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import historyReducer from "./historySlice";

export const store = configureStore({
    reducer:{
        movie: movieReducer,
        history: historyReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;