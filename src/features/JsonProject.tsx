import { Archive, Search } from 'lucide-react';
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
import { setCardsToLists, setLists } from '../reduxStore/CreateNewProjectSlice';
import createLists, { deleteListApi } from '../api/list.api';
import createCard, { deleteCardApi } from '../api/card.api';



export default function ProjectView() {
    const [list, setList] = useState(false);
    const [listName, setListName] = useState('');
    const [cardName, setCardName] = useState<{ [key: number]: string }>({});
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<any>(null);
    const [cardVisible, setCardVisible] = useState<{ [key: number]: boolean }>({});
    const { id } = useParams();
    // Get lists from Redux - assuming you have a current project
    const lists = useSelector((state: any) => state.newProject.lists);
    console.log("lists useselector", lists)

    // const projectData = useSelector((state: any) => state.newProject.projectData); 
    // const { id } = useParams();
    const currentProjectIndex = 0; // You might want to track this differently
    const projectData = useSelector((state: any) => state.newProject.addProjects);
    console.log("projectData", projectData);
    console.log("projectData", projectData.projectId);


    const projectIndex = Number(id)// when we want to create a list in selected project. we can use the ids of projects by using useParams.
    console.log("projectIndex", projectIndex)
    const project = projectData[projectIndex]
    console.log("project projectIndex", project)

    // console.log("project projectId", project.projectId)

    const selectedProject = projectData.find(p => p.projectId == id);
    console.log("selectedProject", selectedProject)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function backToDashboard() {
        navigate('/DashBoard');
    }
    async function addLists(event: { preventDefault: () => void; }) {
        event.preventDefault();
        try {
            const res = await createLists(listName, project.projectId)
            console.log("res list", res)
            console.log("res list", res.data)
            // const updatedLists = [...lists, res.data];
            // console.log("list updated", updatedLists)

            const updatedLists = [...lists, res.data];
            dispatch(setLists(updatedLists));
            setListName('');
            setList(false);
            toast.success("List added successfully!");
        }
        catch (err) {
            toast.error("list feild")
        }

    }
    // function addLists(listId: number, listname: string) {
    //     const newList = { listId, listname, cards: [] };
    //     const updatedLists = [...lists, newList];
    //     dispatch(setLists(updatedLists));
    //     setListName('');
    //     setList(false);
    //     toast.success("List added successfully!");
    // }

    async function addCard(listId: number) {
        const cardname = cardName[listId];
        if (!cardname || !cardname.trim()) {
            toast.error("Card name cannot be empty!");
            return;
        }

        const newCard = {
            cardId: Date.now(), // Generate unique ID
            cardname: cardname.trim()
        };

        // Dispatch with correct structure
        const cards = dispatch(setCardsToLists({
            projectId: currentProjectIndex,
            listId: listId,
            card: newCard
        }));
        try {
            const res = await createCard(cardname, listId)
            console.log("res from cards", res)

        }
        catch (err) {
            toast.error("failed to create cards")
        }
        console.log("cards", cards)
        // Clear card name and hide form
        setCardName(prev => ({ ...prev, [listId]: '' }));
        setCardVisible(prev => ({ ...prev, [listId]: false }));
        toast.success("Card added successfully!");
    }

    // async function deleteList(listId:number){
    //     await deleteListApi()
    //     console.log("from delete")
    // };


    // async function deleteCard(cardId: number) {
    //     try {
    //         await deleteCardApi(cardId);

    //         const updated = lists.map((list: any) => ({
    //             ...list,
    //             cards: list.cards.filter((c: any) => c.cardId !== cardId)
    //         }));

    //         dispatch(setLists(updated));

    //         toast.success("Card deleted");
    //     } catch (err) {
    //         toast.error("Error deleting card");
    //     }


    async function deleteList(listId: number) {
        await deleteListApi(listId)
        console.log("from delete")
        const deleted = lists.filter((l: any) => l.listId !== listId)
        console.log("deleted", deleted)
        dispatch(setLists(deleted))
        toast.success("LIST is deleted successfully..")

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

    function listDisplay(card: any) {
        setPopupOpen(true);
        setSelectedCard(card);
    }

    function handleClose() {
        setPopupOpen(false);
        setSelectedCard(null);
    }

    function cardArchived(listId: number, cardId: number) {
        // Find the list and remove the card
        const updatedLists = lists.map((list: any) => {
            if (list.listId === listId) {
                return {
                    ...list,
                    cards: list.cards.filter((card: any) => card.cardId !== cardId)
                };
            }
            return list;
        });
        dispatch(setLists(updatedLists));
        toast.success("Card archived successfully!");
    }

    return (
        <div className='w-full '>
            {/* Header */}
            <div className="bg-blue-800 text-start w-full lg:w-full">
                <button
                    className="text-xl text-white p-3 font-bold md:text-2xl"
                    onClick={backToDashboard}
                >
                    ← Back to Dashboard
                </button>
            </div>

            <ProjectListView />

            {/* Lists Display Section */}
            <div className="flex flex-row flex-wrap mb-9 items-start gap-2 ml-2 px-9">
                {lists && lists.length > 0 && lists.map((list: any) => (
                    <div
                        key={list.listId}
                        className="flex flex-col text-left px-2 pb-2 p-2 px-2 md:ml-9 mt-9 shadow-md rounded-md text-base font-semibold hover:text-xl w-full lg:w-1/5 md:w-1/2 cursor-pointer hover:border-none bg-gradient-to-tl from-blue-300 to-blue-200"
                    >
                        {/* List Title */}
                        <div className='flex flex-row justify-between' >
                            <h1 className="text-red-900 text-base">{list.listName}</h1>
                            <button className="text-black-100 hover:text-blue-800" onClick={() => deleteList(list.listId)}>
                                <svg className="w-6 h-5" fill="currentColor" viewBox="0 0 24 24" >
                                    <circle cx="4" cy="12" r="3"></circle>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <circle cx="20" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </div>

                        {/* Cards under this List */}
                        {list.cards && list.cards.length > 0 && list.cards.map((card: any) => (
                            <div key={card.cardId} className='flex flex-row gap-2 p-1 items-center' onClick={() => deleteCard(card.cardId)}>
                                <button
                                    className='text-base mt-2 rounded-md flex-1 bg-blue-200 shadow-md hover:rounded-md p-3 text-left'
                                    onClick={() => listDisplay(card)}
                                >
                                    {card.cardname}
                                </button>
                                <button
                                    className='mt-2'
                                    onClick={() => cardArchived(list.listId, card.cardId)}
                                >
                                    <Archive className='w-5 h-5' />
                                </button>
                            </div>
                        ))}

                        {/* Add Card Section */}
                        {cardVisible[list.listId] ? (
                            <AddCard
                                addCard={() => addCard(list.listId)}
                                closeCard={() => addCardClose(list.listId)}
                                cardname={cardName[list.listId] || ''}
                                onCardNameChange={(value) =>
                                    setCardName(prev => ({ ...prev, [list.listId]: value }))
                                }
                                listId={list.listId}
                            />

                        ) : (
                            <div className="flex flex-row mt-2">
                                <button
                                    className="text-base"
                                    onClick={() => showAddCard(list.listId)}
                                >
                                    &#43;
                                </button>
                                <h1 className="mt-1 text-gray-900 text-base ml-2">Add Card</h1>
                            </div>
                        )}
                    </div>
                ))}

                {/* Add List Section */}
                <div className="flex flex-row md:flex-row gap-2 md:ml-11 p-2 mr-5 ml-5 mt-3 md:w-1/2 lg:w-1/5 rounded-xl bg-gradient-to-bl from-blue-300 to-blue-200">
                    {list ? (
                        <AddList
                            onClose={addListClose}
                            addList={addLists}
                            listName={listName}
                            onListNameChange={(value) => setListName(value)}
                        />
                    ) : (
                        <>
                            <button
                                className="text-2xl ml-3"
                                onClick={() => setList(true)}
                            >
                                &#43;
                            </button>
                            <h1 className="text-base pt-1 pb-1 ml-2">Add another list</h1>
                        </>
                    )}
                </div>
            </div>

            {/* Card Detail Popup */}
            {isPopupOpen && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <CardViewDisplay
                        onClose={handleClose}
                        cardName={selectedCard.cardname}
                        onCardNameChange={(value) => setSelectedCard({ ...selectedCard, cardname: value })}
                    />
                </div>
            )}
        </div>
    );
}

