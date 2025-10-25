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
       addProjectCards:function(state,action) {
        state.addProjects((preProject)=>preProject([...preProject,state]));
    }
    }
})

export const{addProject,addProjectCards}=addProjectDetails.actions;
export default addProjectDetails.reducer