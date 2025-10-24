import { createSlice } from '@reduxjs/toolkit';

const initialState={
    addProjects:[],
}

const addProjectDetails=createSlice({
    name:'newProject',
    initialState,
    reducers:{
        addProject:function(state,action){
            state.addProjects.push(action.payload)

        },
        addProjectCount:function(state,action){
        state.value= state.value+1
        console.log("state.value",state.value)
        }
    }
})

export const{addProject,addProjectCount}=addProjectDetails.actions;
export default addProjectDetails.reducer