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
       updateProject:function(state,action){
           const { index, updatedProjects } = action.payload;
           if (state.addProjects[index]){
               state.addProjects[index] = updatedProjects;
           }
         
       },

       deleteProject:function(state,action){
           const  projectIndex  =(action.payload)
      if(projectIndex >= 0 && (projectIndex < state.addProjects.length)){
               state.addProjects.splice(projectIndex,1);//splice(start,deletecount)

      }

       },
    }
});

export const { addProject, addProjectCards, cancelProject, updateProject, deleteProject }=addProjectDetails.actions;
export default addProjectDetails.reducer