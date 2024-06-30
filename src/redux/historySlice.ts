import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { History } from "../types";

interface historyState{
    history: History[]
}
const initialState: historyState={
    history: []
};
const historySlice = createSlice({
    name: "history",
    initialState,
    reducers:{
        setHistory: (state, action: PayloadAction<History[]>)=>{
            state.history = action.payload;
        }
    }
});
export const {setHistory} = historySlice.actions;
export default historySlice.reducer;