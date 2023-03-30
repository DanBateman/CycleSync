import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { compareSync } from "bcryptjs";

const initialState = {
  token: "",
  user: null,
  loading: false,
};

export const loginThunk = createAsyncThunk("auth/login", async (user) => {
  const response = await api.post("/user/login", user); // returns user object and token
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.token = action.payload;
      });
  },
});

export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
