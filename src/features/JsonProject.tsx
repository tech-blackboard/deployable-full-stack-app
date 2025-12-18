// src/Components/ProjectViews.jsx

import { Archive, Search, SquareCheck, MoreVertical, Plus } from 'lucide-react';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useNavigate, useParams } from 'react-router-dom';
import DisplayProject from './DisplayProjects';
import { useDispatch, useSelector } from 'react-redux';
import ProjectListView from './ProjectListView';
import AddList from './AddList';
import { useState } from 'react';
import AddCard from './AddCard';
import DevComponent from './DevComponent';
import CardViewDisplay from './CardViewDisplay';
import Members from './Members';
import CheckListAddComponent from './CheckListAddComponent';
import { toast } from 'react-toastify';
import { setCardsToLists, setItemsToCards, setLists } from '../reduxStore/CreateNewProjectSlice';
import createLists, { deleteListApi } from '../api/list.api';
import createCard, { deleteCardApi, updateCardListApi } from '../api/card.api';

export default function ProjectViews() {
    const [list, setList] = useState(false);
    const [listName, setListName] = useState('');
    const [cardName, setCardName] = useState<{ [key: number]: string }>({});
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<any>(null);
    const [cardVisible, setCardVisible] = useState<{ [key: number]: boolean }>({});
    const [draggedCard, setDraggedCard] = useState<{ cardId: number; fromListId: number; fromIndex: number } | null>(null);
    const [draggedList, setDraggedList] = useState<{ listId: number; fromIndex: number } | null>(null);

    const { id } = useParams();
    const lists = useSelector((state: any) => state.newProject.lists);
    const projectData = useSelector((state: any) => state.newProject.addProjects);

    const currentProjectIndex = 0;
    const projectIndex = Number(id);
    const project = projectData[projectIndex];
    const selectedProject = projectData.find((p: any) => p.projectId == id);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function backToDashboard() {
        navigate('/DashBoard');
    }

    async function addLists(event: { preventDefault: () => void }) {
        event.preventDefault();
        try {
            const res = await createLists(listName, project.projectId);
            const updatedLists = [...lists, res.data];
            dispatch(setLists(updatedLists));
            setListName('');
            setList(false);
            toast.success('List added successfully!');
        } catch (err) {
            toast.error('list not added!..');
        }
    }

    async function addCard(listId: number) {
        const cardname = cardName[listId]?.trim();
        if (!cardname) {
            toast.error('Card name cannot be empty!');
            return;
        }

        try {
            const res = await createCard(cardname, listId);
            const createdCard = res.data;

            const cardToDispatch = {
                cardId: createdCard.cardId,
                cardname: createdCard.cardName ?? createdCard.cardname ?? cardname
            };

            dispatch(
                setCardsToLists({
                    projectId: currentProjectIndex,
                    listId: listId,
                    card: cardToDispatch,
                }),
            );


            setCardName(prev => ({ ...prev, [listId]: '' }));
            setCardVisible(prev => ({ ...prev, [listId]: false }));

            toast.success('Card added successfully!');
        } catch (err) {
            toast.error('Failed to create card!');
            console.error(err);
        }
    }

    async function deleteList(listId: number) {
        try {
            await deleteListApi(listId);
            const deleted = lists.filter((l: any) => l.listId !== listId);
            dispatch(setLists(deleted));
            toast.success('LIST is deleted successfully..');
        } catch (err) {
            toast.error('Failed to delete list');
        }
    }

    function addListClose() {
        setList(false);
        setListName('');
    }

    function addCardClose(listId: number) {
        setCardVisible(prev => ({ ...prev, [listId]: false }));
        setCardName(prev => ({ ...prev, [listId]: '' }));
    }

    function showAddCard(listId: number) {
        setCardVisible(prev => ({ ...prev, [listId]: true }));
    }

    function listDisplay(card: any, listId: number) {
        console.log("Opening card:", card, "from list:", listId);
        setSelectedCard({
            ...card,
            listId: listId,
            cardId: card.cardId,
            cardname: card.cardname
        });
        setPopupOpen(true);
    }


    function handleClose() {
        setPopupOpen(false);
        setSelectedCard(null);
    }

    function cardArchived(listId: number, cardId: number) {
        const updatedLists = lists.map((l: any) => {
            if (l.listId === listId) {
                return {
                    ...l,
                    cards: l.cards.filter((card: any) => card.cardId !== cardId),
                };
            }
            return l;
        });
        dispatch(setLists(updatedLists));
        toast.success('Card archived successfully!');
    }

    function handleListDragStart(e: React.DragEvent<HTMLDivElement>, listId: number, fromIndex: number) {
        e.dataTransfer.setData('drag-type', 'list');
        e.dataTransfer.setData('listId', String(listId));
        setDraggedList({ listId, fromIndex });
    }

    function handleListDragEnd() {
        setDraggedList(null);
    }

    function handleListDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    function handleListDrop(e: React.DragEvent<HTMLDivElement>, toIndex: number) {
        e.preventDefault();

        const listIdFromTransfer = Number(e.dataTransfer.getData('listId'));

        if (!draggedList) return;
        const { fromIndex } = draggedList;

        if (fromIndex === toIndex) {
            setDraggedList(null);
            return;
        }

        const updatedLists = [...lists];
        const [movedList] = updatedLists.splice(fromIndex, 1);
        updatedLists.splice(toIndex, 0, movedList);

        dispatch(setLists(updatedLists));
        setDraggedList(null);
    }

    function handleCardDragStart(e: React.DragEvent<HTMLDivElement>, cardId: number, fromListId: number, fromIndex: number) {
        e.dataTransfer.setData('drag-type', 'card');
        e.dataTransfer.setData('cardId', String(cardId));
        setDraggedCard({ cardId, fromListId, fromIndex });
    }

    function handleCardDragEnd() {
        setDraggedCard(null);
    }

    function handleCardDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    async function handleCardDrop(e: React.DragEvent<HTMLDivElement>, toListId: number, toIndex: number = -1) {
        e.preventDefault();
        e.stopPropagation();

        const cardIdFromTransfer = Number(e.dataTransfer.getData('cardId'));
        const dragged = draggedCard || (cardIdFromTransfer ? { cardId: cardIdFromTransfer, fromListId: -1, fromIndex: -1 } : null);
        if (!dragged) return;

        let { cardId, fromListId, fromIndex } = dragged;

        if (fromListId === -1) {
            const found = lists.find((l: any) => l.cards?.some((c: any) => c.cardId === cardId));
            if (!found) return;
            fromListId = found.listId;
            fromIndex = found.cards.findIndex((c: any) => c.cardId === cardId);
        }

        if (fromListId === toListId && (toIndex === -1 ? lists.find(l => l.listId === toListId)?.cards.length === fromIndex : toIndex === fromIndex)) {
            setDraggedCard(null);
            return;
        }

        const newLists = JSON.parse(JSON.stringify(lists));

        const sourceList = newLists.find((l: any) => l.listId === fromListId);
        const targetList = newLists.find((l: any) => l.listId === toListId);
        if (!sourceList || !targetList) {
            setDraggedCard(null);
            return;
        }

        const movedCard = sourceList.cards[fromIndex];
        if (!movedCard) {
            setDraggedCard(null);
            return;
        }

        sourceList.cards.splice(fromIndex, 1);

        if (toIndex === -1) {
            targetList.cards.push(movedCard);
        } else {
            let insertIndex = toIndex;
            if (fromListId === toListId && fromIndex < toIndex) {
                insertIndex = toIndex - 1;
            }
            targetList.cards.splice(insertIndex, 0, movedCard);
        }

        dispatch(setLists(newLists));
        setDraggedCard(null);

        try {
            await updateCardListApi(cardId, toListId);
            toast.success('Card moved successfully!');
        } catch (err) {
            dispatch(setLists(lists));
            toast.error('Failed to move card!');
        }
    }

    return (
        <div className="w-full bg-cyan-50 min-h-screen ">
            {/* 1. Project Header - Adjusted color and padding */}
            <div className=" bg-gradient-to-r from-cyan-700 to-cyan-500 border-b border-gray-400 text-start w-full shadow-sm">
                <button
                    className=" text-xl py-1 text-white  px-4   font-bold hover:bg-cyan-700 transition duration-150 rounded-md"
                    onClick={backToDashboard}
                >
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-cyan-700  transition duration-150 rounded-md  text-white px-4 py-2 rounded" onClick={backToDashboard}
                      
                    >
                        <svg
                            className="size-5 motion-safe:animate-bounce"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>

                     Back to Dashboard
                    </button>

                </button>
            </div>

            {/* 2. Project Info Bar (Assumed to be ProjectListView, keeping it as is) */}
            <ProjectListView />

            {/* 3. Kanban Board Container - Increased gap and adjusted vertical alignment */}
            <div
                className="flex flex-row flex-nowrap overflow-x-auto p-6 gap-6 items-start h-[calc(100vh-150px)]  bg-cyan-500 lg:w-11/12 rounded-xl ml-[4%] mt-5"
                style={{ scrollbarWidth: 'thin' }}
            >
                {lists &&
                    lists.length > 0 &&
                    lists.map((list: any, listIndex: number) => (
                        <div
                            key={list.listId}
                            draggable
                            onDragStart={e => handleListDragStart(e, list.listId, listIndex)}
                            onDragEnd={handleListDragEnd}
                            onDragOver={handleListDragOver}
                            onDrop={e => {
                                const type = e.dataTransfer.getData('drag-type');
                                if (type === 'list') {
                                    handleListDrop(e, listIndex);
                                }
                            }} className={`flex flex-col flex-shrink-0 text-left w-72 p-4 rounded-xl shadow-lg bg-gray-100 transition duration-200 
                                ${draggedList?.listId === list.listId ? ' border-2 border-cyan-500' : 'hover:shadow-2xl'}`} >
                            {/* List Header Style Adjustment */}
                            <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                <h1 className="text-base text-cyan-900  font-lato font-bold  truncate">{list.listName}</h1>
                                <button
                                    className="text-gray-500 hover:text-red-600 transition duration-150 p-1 rounded-full hover:bg-gray-200"
                                    onClick={() => deleteList(list.listId)}
                                    aria-label={`Delete list ${list.listName}`}
                                >
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Cards Container Style Adjustment */}
                            <div
                                className="cards-container flex flex-col  gap-3 overflow-y-auto max-h-[calc(100vh-320px)] pr-2"
                                onDragOver={handleCardDragOver}
                                onDrop={e => {
                                    e.stopPropagation();
                                    handleCardDrop(e, list.listId, -1); // Drop to the end of the list
                                }}
                            >

                                {list.cards &&
                                    list.cards.length > 0 &&
                                    list.cards.map((card: any, cardIndex: number) => {
                                        // Calculate checklist completion (logic remains untouched)
                                        const checklist = card.checklist || [];
                                        let totalItems = 0;
                                        let completedItems = 0;

                                        checklist.forEach((checklistItem: any) => {
                                            const items = checklistItem.items || [];
                                            totalItems += items.length;
                                            completedItems += items.filter((i: any) => i.checked).length;
                                        });

                                        return (
                                            <div
                                                key={card.cardId}
                                                draggable
                                                onDragStart={e => handleCardDragStart(e, card.cardId, list.listId, cardIndex)}
                                                onDragEnd={handleCardDragEnd}
                                                onDragOver={handleCardDragOver}
                                                onDrop={e => {
                                                    e.stopPropagation();
                                                    handleCardDrop(e, list.listId, cardIndex); // Drop between cards
                                                }}
                                             
                                                className={`p-3 bg-white rounded-lg shadow-sm cursor-pointer border-t-2 border-cyan-500 
                                                ${draggedCard?.cardId === card.cardId ? 'opacity-30 border-blue-600' : 'hover:shadow-md'} transition duration-150`}
                                            >
                                                {/* Card content container - removed ml-9 to align content to the left */}
                                                <div className="flex justify-between items-start">
                                                    <button
                                                        onClick={() => listDisplay(card, list.listId)}
                                                        className="text-left flex-1 text-base font-lato text-gray-900 pr-2"
                                                    >
                                                        {card.cardname}
                                                    </button>

                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); cardArchived(list.listId, card.cardId); }} className="text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-gray-100 transition duration-150"
                                                        aria-label="Archive card"
                                                    >
                                                        <Archive className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                {/* Display Checklist Progress Badge (Styling remains good, slightly adjusted margins) */}
                                                {totalItems > 0 && (
                                                    <div className="mt-3 flex items-center">
                                                        <div
                                                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${completedItems === totalItems
                                                                ? 'bg-green-600 text-white'
                                                                : 'bg-yellow-400 text-gray-900'
                                                                }`}
                                                        >
                                                            <SquareCheck className="w-3 h-3" />
                                                            {completedItems}/{totalItems}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                }

                                {/* Add Card Input Area (Positioned correctly at the bottom of the list) */}
                                {cardVisible[list.listId] ? (
                                    <AddCard
                                        addCard={() => addCard(list.listId)}
                                        closeCard={() => addCardClose(list.listId)}
                                        cardname={cardName[list.listId] || ''}
                                        onCardNameChange={value => setCardName(prev => ({ ...prev, [list.listId]: value }))}
                                        listId={list.listId}
                                    />
                                ) : (
                                    <div className="flex mt-3">
                                        <button
                                            className="flex items-center text-sm font-semibold text-gray-600 hover:text-cyan-600 hover:bg-gray-200 p-2 rounded-lg w-full transition duration-150"
                                            onClick={() => showAddCard(list.listId)}
                                        >
                                            <Plus className="w-4 h-4 mr-1" />
                                            Add a card
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                {/* Add New List Button/Form - Adjusted alignment and background */}
                <div className="flex-shrink-0 w-72 mt-0">
                    <div className="p-3 rounded-xl shadow-md bg-white">
                        {list ? (
                            <AddList
                                onClose={addListClose}
                                addList={addLists}
                                listName={listName}
                                onListNameChange={value => setListName(value)}
                            />
                        ) : (
                            <button
                                className="flex items-center text-sm font-semibold text-gray-700 hover:text-cyan-800 w-full p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-150"
                                onClick={() => setList(true)}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add another list
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Card View Popup (no changes needed) */}
            {isPopupOpen && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
                    <CardViewDisplay
                        onClose={handleClose}
                        cardName={selectedCard.cardname}
                        onCardNameChange={value => setSelectedCard({ ...selectedCard, cardname: value })}
                        listId={selectedCard.listId}
                        cardId={selectedCard.cardId}
                    />
                </div>
            )}
        </div>
    );
}