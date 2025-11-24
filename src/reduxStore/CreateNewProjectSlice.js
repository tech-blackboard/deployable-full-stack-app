import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addProjects: [],
    projectData: [],
    lists: [],
}

const addProjectDetails = createSlice({
    name: 'newProject',
    initialState,
    reducers: {
        addProject: function (state, action) {
            state.addProjects.push(action.payload);
        },

        updateProject: (state, action) => {
            const { projectId, updatedData } = action.payload;

            state.addProjects = state.addProjects.map((p) =>
                p.projectId === projectId ? { ...p, ...updatedData } : p
            );
        },


        deleteProject: (state, action) => {
            const id = action.payload;
            state.addProjects = state.addProjects.filter((p) => p.projectId !== id);
        },


        setProjectData: (state, action) => {
            state.projectData = action.payload;
        },

        addSetProjectData: function (state, action) {
            state.projectData.push(action.payload[0] || action.payload);
        },

        clearSetProjectData: (state) => {
            state.projectData = [];
        },

        // Set or replace all lists
        setLists: function (state, action) {
            state.lists = action.payload;
        },

        // Add a card to a specific list
        setCardsToLists: function (state, action) {
            const { projectId, listId, card } = action.payload;

            // Find the list in the lists array
            const targetedList = state.lists.find((list: any) => list.listId === listId);

            if (!targetedList) {
                console.error(`List with id ${listId} not found`);
                return;
            }

            // Initialize cards array if it doesn't exist
            if (!targetedList.cards) {
                targetedList.cards = [];
            }

            // Add the card to the list
            targetedList.cards.push(card);
        },

        // Remove a card from a list
        removeCardFromList: function (state, action) {
            const { listId, cardId } = action.payload;

            const targetedList = state.lists.find((list: any) => list.listId === listId);

            if (!targetedList || !targetedList.cards) {
                return;
            }

            targetedList.cards = targetedList.cards.filter(
                (card: any) => card.cardId !== cardId
            );
        },
    },
});

export const {
    addProject,
    updateProject,
    deleteProject,
    setProjectData,
    addSetProjectData,
    clearSetProjectData,
    setLists,
    setCardsToLists,
    removeCardFromList
} = addProjectDetails.actions;

export default addProjectDetails.reducer;