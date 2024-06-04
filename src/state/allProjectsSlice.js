import config from '@/json/config.json'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getJson} from '/service/getData.js'

export const getAllProjects = createAsyncThunk(
  "allProjects/getAllProjects",
    async (project, thunkAPI) => {
      try {
        const response = await getJson(`/json/projects/projects.json`)
        console.log(response)
        return response
      }
      catch (error) {
        console.log("error: " + error.message)
        return thunkAPI.rejectWithValue({ error: error.message })
      }
    },
);



const initialState = {
  projectList: config.projects,
  projects: {name: "", type: ""},
  isSuccess: false,
  isLoading: false,
  message: "",
};

const allProjectsSlice = createSlice({
  name: 'allProjects',
  projectList: Array,
  projects: Object,
  isLoading: Boolean,
  isSuccess: Boolean,
  message: String,
  initialState,

  reducers: {
  },
  
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(getAllProjects.fulfilled, (state, action) => {
        // Add user to the state array
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      builder.addCase(getAllProjects.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(getAllProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.error;
      })
    },
});

export default allProjectsSlice;