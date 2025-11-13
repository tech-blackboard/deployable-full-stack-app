import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addProjects: [],
    projectData: [],
    lists:[],
}

const addProjectDetails = createSlice({
    name: 'newProject',

    initialState,
    reducers: {
        addProject: function (state, action) {
            state.addProjects.push(action.payload)

        },
        updateProject: function (state, action) {
            const { index, updatedProjects } = action.payload;
            if (state.addProjects[index]) {
                state.addProjects[index] = updatedProjects;
            }

        },

        deleteProject: function (state, action) {
            const projectIndex = (action.payload)
            if (projectIndex >= 0 && (projectIndex < state.addProjects.length)) {
                state.addProjects.splice(projectIndex, 1);//splice(start,deletecount)

            }

        },


        setProjectData: (state, action) => {
            state.projectData = action.payload;

        },
        addSetProjectData: function (state, action) {
            state.projectData.push(action.payload[0] || action.payload)// returns the object inside the array .action.payload[0] ...=> the actual project object

        },
        clearSetProjectData: (state) => {
            state.projectData = [];
        },

         setLists:function(state,action){
             state.lists=(action.payload)
         }

    },
});

export const { addProject, addProjectCards, cancelProject, updateProject, deleteProject, setProjectData, addSetProjectData, clearUsers, setLists } = addProjectDetails.actions;
export default addProjectDetails.reducer