import config from '@/json/config.json'
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  currentSection: config.defaultSection,
};

const currentSectionSlice = createSlice({
  name: 'currentSection',
  currentSection: "",
  initialState,
  reducers: {
    updateSection: (state, action) => {
      state.currentSection = action.payload;
    },

  },
});
export const { updateSection } = currentSectionSlice.actions;
export default currentSectionSlice.reducer;