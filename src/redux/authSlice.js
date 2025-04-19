import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
  },
  selectors: {
    selectUser: (state) => state.user,
    selectToken: (state) => state.token,
    selectLogged: (state) => state.isLoggedIn,
  }
});

export const { selectUser, selectToken, selectLogged} = authSlice.selectors;