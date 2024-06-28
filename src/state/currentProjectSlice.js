//import config from '@/json/config.json'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getJson} from '/service/getData.js'


export const getProject = createAsyncThunk(
  "project/getProject",
    async (project, thunkAPI) => {
      console.log("getProject: " + project)
      try {
        const response = await getJson(`/json/projects/${project}.json`)
        return response
      }
      catch (error) {
        //console.log("error: " + error.message)
        return thunkAPI.rejectWithValue({ error: error.message })
      }
    },
  );


const initialState = {
  project: null,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const currentProjectSlice = createSlice({
  name: 'project',
  project: Object || null,
  isLoading: Boolean,
  isSuccess: Boolean,
  message: String,
  initialState,

  reducers: {
    resetProject: (state) => {
        state.project = null;
    },

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProject.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.isSuccess = true;
      state.project = action.payload;
    })
    builder.addCase(getProject.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProject.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.payload.error;
    })
  },
});

export const { resetProject } = currentProjectSlice.actions;

export default currentProjectSlice;