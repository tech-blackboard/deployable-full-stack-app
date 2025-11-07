


import { configureStore } from '@reduxjs/toolkit';
import addProjectReducer from './CreateNewProjectSlice';
import projectListViewReducer from './CreateNewProjectSlice';
const store = configureStore({
    reducer:{
    newProject:addProjectReducer,
    projectsList:projectListViewReducer,
    }
});
export  default store;