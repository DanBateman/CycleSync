import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import { compareSync } from 'bcryptjs';

const initialState = {
  token: '',
  user: null,
  loggedIn: false,
  loading: 'idle',
  currentReqId: undefined,
  error: null,
};

export const loginThunk = createAsyncThunk('auth/login', async (user, { getState, requestId }) => {
  let response;
  const { currentReqId, loading } = getState().auth;
  if (loading !== 'pending' || requestId !== currentReqId) return;
  if (user.new == true) {
    // call sign up endpoint if email exists
    delete user['new'];
    response = await api.post('/user/signup', user);
  } else {
    response = await api.post('/user/login', user); // returns user object and token
  }
  console.log(response.data);
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loading = 'pending';
        state.currentReqId = action.meta.requestId;
        console.log(action);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { requestId: reqId } = action.meta;
        if (state.loading == 'pending' && state.currentReqId == reqId) {
          state.token = action.payload.token;
          state.user = action.payload.username;
          state.loggedIn = true;
          state.loading = 'idle';
          state.currentReqId = undefined;
        }
      })
      .addCase(loginThunk.rejected, (state, action) => {
        const { requestId: reqId } = action.meta;
        if (state.loading === 'pending' && state.currentReqId === reqId) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentReqId = undefined;
        }
      });
  },
});

export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
