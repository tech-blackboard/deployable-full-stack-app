// import './ProjectView.css';
import { Archive } from 'lucide-react';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useNavigate } from 'react-router-dom';
import DisplayProject from './DisplayProjects';
import { useSelector } from 'react-redux';
import AddList from './AddList';
import { useState } from 'react';
import AddCard from './AddCard';
import CardViewDisplay from './CardViewDisplay';
import { toast } from 'react-toastify';

export default function ProjectView() {
  // alert("lists")

  const [list, setList] = useState(false);
  const [addList, setAddList] = useState<any[]>([]);
  const [cardsByList, setCardsByList] = useState<{ [key: number]: any[] }>({});
  const [listName, setListName] = useState('');
  const [cardName, setCardName] = useState<{ [key: number]: string }>({});
  const [cardVisible, setCardVisible] = useState<{ [key: number]: boolean }>({});
  const [archivecardVisible, setArchiveCardVisible] = useState<number[]>([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  const [draggedCard, setDraggedCard] = useState<{ cardId: number; fromListId: number } | null>(null);

  const navigate = useNavigate();
  const lists = useSelector((state: any) => state.newProject.lists);
  alert(lists)

 
  // Navigate back
  function backToDashboard() {
    navigate('/DashBoard');
  }

  // Add a new list
  function addLists() {
    const newList = { id: Date.now(), name: listName };
    setAddList([...addList, newList]);
    setListName('');
    setList(false);
  }

  // Add a new card to a list
  function addCardToList(listId: number, name: string) {
    const newCard = { id: Date.now(), cardName: name };
    setCardsByList(prev => ({
      ...prev,
      [listId]: [...(prev[listId] || []), newCard],
    }));
    setCardName(prev => ({ ...prev, [listId]: '' }));
    setCardVisible(prev => ({ ...prev, [listId]: false }));

  }

  function getCardsByListId(listId: number) {
    return cardsByList[listId] || [];
  }

  // Toggle add card form visibility
  function showAddCard(listId: number) {
    setCardVisible(prev => ({ ...prev, [listId]: true }));
  }
  function addCardClose(listId: number) {
    setCardVisible(prev => ({ ...prev, [listId]: false }));
  }

  // Archive a card
  function cardArchived(listId: number, cardId: number) {
    setCardsByList(prev => {
      const updated = (prev[listId] || []).filter(card => card.id !== cardId);
      return { ...prev, [listId]: updated };
    });
    toast.success("Card archived successfully!");
  }

  // Popup for card details
  function listDisplay(cardName: string) {
    setPopupOpen(true);
    setSelectedList(cardName);
  }
  function handleClose() {
    setPopupOpen(false);
  }

  // --- Drag and Drop handlers ---
  function onDragStart(e: React.DragEvent<HTMLDivElement>, cardId: number, fromListId: number) {
    setDraggedCard({ cardId, fromListId });
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>, toListId: number) {
    e.preventDefault();
    if (!draggedCard) return;

    const { cardId, fromListId } = draggedCard;

    if (fromListId === toListId) return; // optional: you can implement reordering

    // Remove card from source list
    const sourceCards = Array.from(cardsByList[fromListId] || []);
    const cardIndex = sourceCards.findIndex(c => c.id === cardId);
    const [movedCard] = sourceCards.splice(cardIndex, 1);

    // Add card to target list
    const targetCards = Array.from(cardsByList[toListId] || []);
    targetCards.push(movedCard);

    setCardsByList(prev => ({
      ...prev,
      [fromListId]: sourceCards,
      [toListId]: targetCards
    }));

    setDraggedCard(null);
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-blue-800 text-start w-full lg:w-full">
        <button
          className="text-xl text-white p-3 font-bold md:text-2xl"
          onClick={backToDashboard}
        >
          ← Back to Dashboard
        </button>
      </div>

      <DisplayProject />

      {/* Lists Container */}
      <div className="flex flex-row flex-wrap mb-9 items-start gap-2 ml-2 px-9">
        {addList.map(listItem => (
          <div
            key={listItem.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, listItem.id)}
            className="flex flex-col text-left px-2 pb-2 p-2 md:ml-9 mt-9 shadow-md rounded-md text-base font-semibold w-full lg:w-1/5 md:w-1/2 cursor-pointer bg-gradient-to-tl from-blue-300 to-blue-200"
          >
            {/* List Title */}
            <div className="flex justify-between">
              <h1 className="text-red-900 text-base">{listItem.name}</h1>
            </div>

            {/* Cards */}
            {getCardsByListId(listItem.id).map((card) => (
              <div
                key={card.id}
                draggable
                onDragStart={(e) => onDragStart(e, card.id, listItem.id)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onDrop(e, listItem.id)}
                className="p-2 m-1 bg-blue-200 rounded-md shadow-md cursor-pointer flex justify-between items-center"
              >
                <button onClick={() => listDisplay(card.cardName)}>{card.cardName}</button>
                <button onClick={() => cardArchived(listItem.id, card.id)}>
                  <Archive className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* Add Card */}
            {cardVisible[listItem.id] ? (
              <AddCard
                addCard={() => addCardToList(listItem.id, cardName[listItem.id] || '')}
                closeCard={() => addCardClose(listItem.id)}
                cardName={cardName[listItem.id] || ''}
                onCardNameChange={(value) =>
                  setCardName(prev => ({ ...prev, [listItem.id]: value }))
                }
                listId={listItem.id}
              />
            ) : (
              <div className="flex flex-row items-center gap-1 mt-2">
                <button className="text-base" onClick={() => showAddCard(listItem.id)}>&#43;</button>
                <span className="text-gray-900 text-base">Add Card</span>
              </div>
            )}
          </div>
        ))}

        {/* Add List Section */}
        <div className="flex flex-row md:flex-row  gap-2 md:ml-11 p-2 mr-5 ml-5 mt-3 md:w-1/2 lg:w-1/5 rounded-xl bg-gradient-to-bl from-blue-300 to-blue-200">
          {list ? (
            <AddList
              onClose={() => setList(false)}
              addList={addLists}
              listName={listName}
              onListNameChange={setListName}
            />
          ) : (
            <>
              <button className="text-2xl ml-3" onClick={() => setList(true)}>&#43;</button>
              <span className="text-base pt-1 pb-1 ml-2">Add another list</span>
            </>
          )}
        </div>
      </div>

      {/* Card Details Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <CardViewDisplay
            onClose={handleClose}
            cardName={selectedList}
            onCardNameChange={setSelectedList}
          />
        </div>
      )}
    </div>
  );//This component handles:Add lists dynamically.Add cards dynamically inside lists.Archive cards.Card detail popup.Native drag - and - drop between lists.Responsive layout using flex.
}
