import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/constants/constants";

export const fetchOneUser = createAsyncThunk(
  "oneUser/getOneUser",
  async (name) => {
    try {
      const res = await axios(`${BASE_URL}?term=${name}`);
      return res.data[0];
    } catch (err) {
      console.log(err);
    }
  }
);

const oneUserSlice = createSlice({
  name: "oneUser",
  initialState: {
    data: [],
    visible: false,
    selectedUser: "",
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOneUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSelectedUser, setVisible } = oneUserSlice.actions;

export default oneUserSlice.reducer;
