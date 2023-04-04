import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { compareSync } from "bcryptjs";

const initialState = {
  token: "",
  user: null,
  loading: "idle",
  currentReqId: undefined,
  error: null,
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
      .addCase(loginThunk.pending, (state, action) => {
        state.loading = "pending";
        state.currentReqId = action.meta.requestId;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action);
        const { reqId } = action.meta;
        if (state.loading === "pending" && state.currentReqId === reqId) {
          state.token = action.payload;
          state.loading = "idle";
          state.currentReqId = undefined;
        }
      })
      .addCase(loginThunk.rejected, (state, action) => {
        const { reqId } = action.meta;
        if (state.loading === "pending" && state.currentReqId === reqId) {
          state.loading = "idle";
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
