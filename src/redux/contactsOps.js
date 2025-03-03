// https://67c35ceb1851890165aee0cd.mockapi.io

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://67c35ceb1851890165aee0cd.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try{
        const response = await axios.get(`/contacts`);
        return response.data
        
    }catch (error){
        console.log(error);
        return thunkAPI.rejectWithValue(error.message)
    }
}
 );

 export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
     await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }
 });


 export const addContact = createAsyncThunk('contacts/addContacts', async(body, thunkAPI) =>{
    try {
      const {data} =  await axios.post(`/contacts/`, body);
           return data;
       } catch (error){
           return thunkAPI.rejectWithValue(error.message);
       }
 })

//  export const filterContacts = createAsyncThunk('filter/filter')