import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/constants/constants";

export const fetchUsers = createAsyncThunk("users/getUsers", async (name) => {
  let query;
  if (name) {
    query = `?term=${name}`;
  } else {
    query = "/";
  }
  try {
    const res = await axios(`${BASE_URL}${query}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    name: "",
    data: [],
    isLoading: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
