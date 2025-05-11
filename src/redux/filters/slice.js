import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    phone: "",
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setNameFilter: (state, action) => {
            state.name = action.payload;
        },
        setPhoneFilter: (state, action) => {
            state.phone = action.payload;
        },

    },
})
export const filterReducer = filterSlice.reducer;
export const { setNameFilter, setPhoneFilter} = filterSlice.actions;