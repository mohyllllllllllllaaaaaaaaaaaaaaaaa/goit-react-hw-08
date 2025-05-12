import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, changeContact } from './operations';
import { logoutThunk } from '../auth/operations';



const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
    number: "",
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.loading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        state.contacts.loading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(changeContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(changeContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts.items[index] = action.payload;
        }
      })
      .addCase(changeContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.contacts.items = [];
        state.contacts.loading = false;
        state.contacts.error = null;
      });
  },
});




  export const contactReducer = contactsSlice.reducer;
  export const { setFilter } = contactsSlice.actions;
