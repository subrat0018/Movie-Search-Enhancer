import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types";
interface MovieState {
    movie: Movie | null;
}
const initialState: MovieState = {
    movie: null
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        setMovie: (state, action: PayloadAction<Movie>)=>{
            state.movie=action.payload;
        }
    }
})

export const {setMovie} = movieSlice.actions;
export default movieSlice.reducer