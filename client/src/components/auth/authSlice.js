import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  token: '',
  user: null,
  loggedIn: false,
  loading: 'idle',
  currentReqId: undefined,
  error: false,
};

export const loginThunk = createAsyncThunk('auth/login', async (user, { getState, requestId }) => {
  let response;
  const { currentReqId, loading } = getState().auth;
  if (loading !== 'pending' || requestId !== currentReqId) return;
  if (user.new === true) {
    // call sign up endpoint if email exists
    delete user['new'];
    response = await api.post('/user/signup', user);
  } else {
    response = await api.post('/user/login', user); // returns user object and token
  }
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      for (let key in state) {
        state[key] = initialState[key];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loading = 'pending';
        state.currentReqId = action.meta.requestId;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { requestId: reqId } = action.meta;
        if (state.loading === 'pending' && state.currentReqId === reqId) {
          state.token = action.payload.token;
          state.user = action.payload.username;
          state.loggedIn = true;
          state.loading = 'idle';
          state.currentReqId = undefined;
          state.error = false;
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
export const { setLoading, clearUser } = authSlice.actions;
export default authSlice.reducer;
