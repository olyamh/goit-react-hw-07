import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectContacts } from "./contactsSlice";

const initialState={
    name: ''
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.name=action.payload;
        }
    }
})
const selectFilter =(state)=> state.filters.name;
export const selectFilteredContacts = createSelector ([selectContacts, selectFilter], (contacts, name) =>{
    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
return filteredData;

})
export const filtersReducer = slice.reducer;
export const {setFilter} = slice.actions;