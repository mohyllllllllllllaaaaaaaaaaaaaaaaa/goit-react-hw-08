import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectPhoneFilter } from "../filters/selectors";


export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector( [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, nameFilter, phoneFilter) => {
    if (!Array.isArray(contacts)) return [];
    return contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(nameFilter.toLowerCase());
      const phoneMatch = contact.number.toLowerCase().includes(phoneFilter.toLowerCase());
      return nameMatch && phoneMatch;
    } );
  });