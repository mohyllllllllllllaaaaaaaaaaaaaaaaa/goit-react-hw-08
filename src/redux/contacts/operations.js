import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";



export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try{
        const response = await goitAPI.get('/contacts');
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try{
        const response = await goitAPI.post('/contacts', body);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.message);  
    }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) =>{
    try{
         await goitAPI.delete(`/contacts/${id}`);
        return id;
    }catch(error){
        return thunkAPI.rejectWithValue(error.message);  
    }
});
export const changeContact = createAsyncThunk('contacts/changeContact', async (contactData, { rejectWithValue }) => {
    try {
        const response = await goitAPI.patch(`/contacts/${contactData.id}`, {
            name: contactData.name,
            number: contactData.number,
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response  ? error.response.data : error.message);
    }
});
