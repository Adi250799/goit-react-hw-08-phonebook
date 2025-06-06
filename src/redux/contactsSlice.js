import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./asyncActions";

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};
  
export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
          // FetchContacts
          .addCase(fetchContacts.pending, handlePending)
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(fetchContacts.rejected, handleRejected)
          
          // AddContacts
          .addCase(addContact.pending, handlePending)
          .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
          })
          .addCase(addContact.rejected, handleRejected)
          
          // DeleteContacts
          .addCase(deleteContact.pending, handlePending)
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(contact => contact.id !== action.payload);
          })
          .addCase(deleteContact.rejected, handleRejected);
      },
});

// export const { addNewContact, deleteContact } = contactsSlice.actions;