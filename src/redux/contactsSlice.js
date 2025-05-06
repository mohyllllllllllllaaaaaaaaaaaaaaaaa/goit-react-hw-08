import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from './filtersSlice';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
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
      });
  },
});

export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector( [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) return [];
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  })


  export const contactReducer = contactsSlice.reducer;
  export const { setFilter } = contactsSlice.actions;

