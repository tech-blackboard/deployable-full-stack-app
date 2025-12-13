import { Archive, Search, SquareCheck } from 'lucide-react';
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
        <div className="w-full ">
            <div className="bg-blue-800 text-start w-full lg:w-full">
                <button className="text-xl text-white p-3 font-bold md:text-2xl" onClick={backToDashboard}>
                    ← Back to Dashboard
                </button>
            </div>

            <ProjectListView />

            <div className="flex flex-row flex-wrap mb-9 items-start gap-2 ml-2 px-9">
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
                            }}
                            className="flex flex-col text-left px-2 pb-2 p-2 md:ml-9 mt-9 shadow-md rounded-md text-base font-semibold w-full lg:w-1/5 md:w-1/2 bg-gradient-to-tl from-blue-300 to-blue-200"
                        >
                            <div className="flex flex-row justify-between">
                                <h1 className="text-red-900 text-base">{list.listName}</h1>
                                <button className="text-black-100 hover:text-blue-800" onClick={() => deleteList(list.listId)}>
                                    <svg className="w-6 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="4" cy="12" r="3"></circle>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <circle cx="20" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                            </div>

                            <div
                                className="cards-container mt-2"
                                onDragOver={handleCardDragOver}
                                onDrop={e => {
                                    e.stopPropagation();
                                    handleCardDrop(e, list.listId, -1);
                                }}
                            >
                               {/* // In ProjectViews.tsx, update the card rendering section (around line 200)
                                // Replace the card mapping with this to show checklist progress: */}

                                {list.cards &&
                                    list.cards.length > 0 &&
                                    list.cards.map((card: any, cardIndex: number) => {
                                        // Calculate checklist completion
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
                                                    handleCardDrop(e, list.listId, cardIndex);
                                                }}
                                                className="p-2 m-1 bg-blue-200 rounded-md shadow-md cursor-pointer"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <button
                                                        onClick={() => listDisplay(card, list.listId)}
                                                        className="text-left flex-1 text-base"
                                                    >
                                                        {card.cardname}
                                                    </button>

                                                    <button onClick={() => cardArchived(list.listId, card.cardId)}>
                                                        <Archive className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                {/* Display Checklist Progress Badge */}
                                                {totalItems > 0 && (
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm font-semibold ${completedItems === totalItems
                                                                ? 'bg-green-500 text-white'
                                                                : 'bg-gray-700 text-white'
                                                            }`}>
                                                            <SquareCheck className="w-4 h-4" />
                                                            {completedItems}/{totalItems}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                }
                                {cardVisible[list.listId] ? (
                                    <AddCard
                                        addCard={() => addCard(list.listId)}
                                        closeCard={() => addCardClose(list.listId)}
                                        cardname={cardName[list.listId] || ''}
                                        onCardNameChange={value => setCardName(prev => ({ ...prev, [list.listId]: value }))}
                                        listId={list.listId}
                                    />
                                ) : (
                                    <div className="flex flex-row mt-2">
                                        <button className="text-base" onClick={() => showAddCard(list.listId)}>
                                            &#43;
                                        </button>
                                        <h1 className="mt-1 text-gray-900 text-base ml-2">Add Card</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                <div className="flex flex-row md:flex-row gap-2 md:ml-11 p-2 mr-5 ml-5 mt-3 md:w-1/2 lg:w-1/5 rounded-xl bg-gradient-to-bl from-blue-300 to-blue-200">
                    {list ? (
                        <AddList onClose={addListClose} addList={addLists} listName={listName} onListNameChange={value => setListName(value)} />
                    ) : (
                        <>
                            <button className="text-2xl ml-3" onClick={() => setList(true)}>
                                &#43;
                            </button>
                            <h1 className="text-base pt-1 pb-1 ml-2">Add another list</h1>
                        </>
                    )}
                </div>
            </div>

            {isPopupOpen && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
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