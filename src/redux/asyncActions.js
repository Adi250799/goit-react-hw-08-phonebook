import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'https://connections-api.goit.global/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    const token = axios.defaults.headers.common.Authorization;
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    const token = axios.defaults.headers.common.Authorization;
    try {
      const response = await axios.post(API_URL, newContact, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    const token = axios.defaults.headers.common.Authorization;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return id; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);