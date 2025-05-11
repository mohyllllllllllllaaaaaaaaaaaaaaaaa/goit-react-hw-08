import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector( [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) return [];
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  });