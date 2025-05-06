import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://68134aa6129f6313e210d264.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try{
        const response = await axios.get('/contacts');
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try{
        const response = await axios.post('/contacts', body);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.message);  
    }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) =>{
    try{
         await axios.delete(`/contacts/${id}`);
        return id;
    }catch(error){
        return thunkAPI.rejectWithValue(error.message);  
    }
});