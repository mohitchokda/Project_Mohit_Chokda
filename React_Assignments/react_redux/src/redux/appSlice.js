// AppSlice.js
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState : {
        // Add a new state for description visibility
       isDescriptionVisible: false,
       // Like count for Like btn
       likeCount: 0 
    }, 
    reducers : {
        // Toggle description visibility
        toggleDescription: (state) => { 
            state.isDescriptionVisible = !state.isDescriptionVisible;
        },
        //Method to update Count
        setLikeCount: (state) =>{
            state.likeCount = state.likeCount +1;
        }
    }
});

export const { toggleDescription,setLikeCount } = appSlice.actions;
export default appSlice.reducer;

