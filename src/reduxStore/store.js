
import { configureStore } from '@reduxjs/toolkit';
import addProjectReducer from './CreateNewProjectSlice';
import projectListViewReducer from './CreateNewProjectSlice';
import setProjectDataReducer from './CreateNewProjectSlice'
const store = configureStore({
    reducer:{
    newProject:addProjectReducer,
    // projectsList:projectListViewReducer,
    // newProject:setProjectDataReducer,
    }
});
export  default store;