import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addProjects: [],
    projectData: [],
    lists: [],
    addUsers: [],

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

        addUser: function (state, action) {
            state.addUsers.push(action.payload);
        },
        updateUsers: (state, action) => {
            const { userId, updatedUserData } = action.payload;

            state.addUsers = state.addUsers.map((p) =>
                p.userId === userId ? { ...p, ...updatedUserData } : p
            );
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

        addSetList: function (state, action) {
            state.lists.push(action.payload[0] || action.payload);
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

        // setItemsToCards: function (state, action) {
        //     const { listId, cardId,item } = action.payload;

        //     // Find the list in the lists array
        //     const targetedList = state.lists.find((list: any) => list.listId === listId);
        //     const targetedCard = state.targetedList.cards?.find((card: any) => card.cardId === cardId);

        //     // if (!targetedList) {
        //     //     console.error(`List with id ${listId} not found`);
        //     //     return;
        //     // }

        //     // Initialize cards array if it doesn't exist
        //     if (!targetedCard.items) {
        //         targetedCard.items = [];
        //     }

        //     // Add the card to the list
        //     const setItemsToCardss=targetedCard.items.push(item);
        //     console.log("setItemsToCardss from redux", setItemsToCardss)
        // },
        addChecklistItem: (state, action) => {
            const { listId, cardId, name } = action.payload;

            const list = state.lists.find((l) => l.listId === listId);
            if (!list) return;

            const card = list.cards.find((c) => c.cardId === cardId);
            if (!card) return;

            if (!card.checklist) card.checklist = [];

            card.checklist.push({
                itemId: Date.now(),  // unique
                name,
                checked: false,
            });

        },

        // Add this new reducer to your CreateNewProjectSlice.ts
        // Replace the buggy addAddItem reducer with this corrected version:

        // Add after removeChecklistItem reducer
        addChecklistSubItem: (state, action) => {
            const { listId, cardId, checklistItemId, name } = action.payload;

            const list = state.lists.find((l) => l.listId === listId);
            if (!list) return;

            const card = list.cards.find((c) => c.cardId === cardId);
            if (!card) return;

            const checklistItem = card.checklist?.find((i) => i.itemId === checklistItemId);
            if (!checklistItem) return;

            // Initialize items array if it doesn't exist
            if (!checklistItem.items) {
                checklistItem.items = [];
            }

            // Add the sub-item
            checklistItem.items.push({
                itemId: Date.now() + Math.random(),
                name,
                checked: false,
            });
        },

        toggleChecklistSubItem: (state, action) => {
            const { listId, cardId, checklistItemId, itemId } = action.payload;

            const list = state.lists.find((l) => l.listId === listId);
            if (!list) return;

            const card = list.cards.find((c) => c.cardId === cardId);
            if (!card) return;

            const checklistItem = card.checklist?.find((i) => i.itemId === checklistItemId);
            if (!checklistItem || !checklistItem.items) return;

            const subItem = checklistItem.items.find((i) => i.itemId === itemId);
            if (!subItem) return;

            subItem.checked = !subItem.checked;
        },

        removeChecklistSubItem: (state, action) => {
            const { listId, cardId, checklistItemId, itemId } = action.payload;

            const list = state.lists.find((l) => l.listId === listId);
            if (!list) return;

            const card = list.cards.find((c) => c.cardId === cardId);
            if (!card) return;

            const checklistItem = card.checklist?.find((i) => i.itemId === checklistItemId);
            if (!checklistItem || !checklistItem.items) return;

            checklistItem.items = checklistItem.items.filter((i) => i.itemId !== itemId);
        },

        toggleChecklistItem: (state, action) => {
            const { listId, cardId, itemId } = action.payload;

            const list = state.lists.find((l) => l.listId === listId);
            if (!list) return;

            const card = list.cards.find((c) => c.cardId === cardId);
            if (!card) return;

            const item = card.checklist.find((i) => i.itemId === itemId);
            if (!item) return;

            item.checked = !item.checked;

            const addItem = list.cards.checklist.find((i) => i.itemId === itemId);
            console.log("addItem from redux toggleChecklistItem ", addItem)

            const additem = addItem.checklist.find((i) => i.itemId === itemId);
            console.log("additem from redux toggleChecklistItem ", addItem)

            additem.checked = !additem.checked;

        },

        removeChecklistItem: (state, action) => {
            const { listId, cardId, itemId } = action.payload;

            const list = state.lists.find((l) => l.listId === listId);
            if (!list) return;

            const card = list.cards.find((c) => c.cardId === cardId);
            if (!card) return;

            card.checklist = card.checklist.filter((i) => i.itemId !== itemId);
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
    addUsers,
    addUser,
    updateProject,
    deleteProject,
    setProjectData,
    addSetProjectData,
    clearSetProjectData,
    setLists,
    addSetList,
    setCardsToLists,
    removeCardFromList, setItemsToCards, toggleChecklistItem, removeChecklistItem,
    addChecklistItem,
    addChecklistSubItem,
    toggleChecklistSubItem,
    removeChecklistSubItem,

} = addProjectDetails.actions;

export default addProjectDetails.reducer;