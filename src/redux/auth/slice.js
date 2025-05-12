import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";
 
const initialState = {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

   const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
builder
.addCase(registerThunk.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  
})
.addCase(loginThunk.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
})
.addCase(refreshThunk.fulfilled, (state, action) => {
  state.isLoggedIn = true;
  state.user =action.payload;
  state.isRefreshing = false;
})
.addCase(refreshThunk.pending, (state) => {
  state.isRefreshing = true;
})
.addCase(refreshThunk.rejected, (state) => {
  state.isRefreshing = false;
})
.addCase(logoutThunk.fulfilled, () =>  initialState);
}
 });
 
  export const authReducer = slice.reducer;