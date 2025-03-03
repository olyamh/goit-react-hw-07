import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState ={
    items: [],
    isLoading: false,
    isError: false

}

const slice = createSlice({
    name: 'contacts',
    initialState, 
  
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) =>{
            state.items = action.payload;
            state.isLoading = false
            })
        .addCase(fetchContacts.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(fetchContacts.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = action.payload;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item=> item.id !== action.payload);
        })
        .addCase(addContact.fulfilled, (state, action) =>{
            state.items.push(action.payload)
        })

     } , 

});

export const selectContacts = (state) => state.contacts.items;

export const selectLoading  = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.isError;

export const contactsReducer = slice.reducer;
