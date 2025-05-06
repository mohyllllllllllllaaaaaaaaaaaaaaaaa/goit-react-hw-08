import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};
export const selectNameFilter = state => state.filter.name;
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
})
export const filterReducer = filterSlice.reducer;
export const {changeFilter} = filterSlice.actions;