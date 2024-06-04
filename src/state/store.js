import { configureStore} from "@reduxjs/toolkit";
import currentProjectSlice from "/state/currentProjectSlice";
import currentSectionSlice from "/state/currentSectionSlice";
import allProjectsSlice from "/state/allProjectsSlice";

export const store = configureStore({
  reducer:{
    currentProject: currentProjectSlice.reducer,
    currentSection: currentSectionSlice,
    allProjects: allProjectsSlice.reducer,
  }
});
