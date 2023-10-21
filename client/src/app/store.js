import { configureStore } from "@reduxjs/toolkit";
import mainPageSliced from "./store/mainPageSliced";
import oneUserSliced from "./store/oneUserSliced";

export const store = configureStore({
  reducer: {
    users: mainPageSliced,
    oneUser: oneUserSliced,
  },
});
