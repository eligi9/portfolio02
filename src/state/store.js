import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "/state/projectSlice";

export const store = configureStore({
  reducer:{
    project: projectSlice.reducer
  }
});
