// import './ProjectView.css';
import { Search } from 'lucide-react';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useNavigate } from 'react-router-dom';
import DisplayProject from './DisplayProjects';
import { useSelector } from 'react-redux';
import ProjectListView from './ProjectListView';
import AddList from './AddList';
import { useState } from 'react';
import AddCard from './AddCard';

export default function ProjectView() {
  const [list, setList] = useState(false);
  const [addList, setAddList] = useState<any[]>([]);
  const [card, setCard] = useState<any[]>([]);
  const [listName, setListName] = useState('');
  const [cardName, setCardName] = useState('');
  const [isCardVisible, setAddCardVisible] = useState(false);

    const [isCardClose,setCardClose]=useState(false)
  const navigate = useNavigate();

  function backToDashboard() {
    navigate('/DashBoard');
  }

  function addLists() {
    const newList = { id: Date.now(), name: listName };
    setAddList([...addList, newList]);
    console.log('addList', addList);
    console.log('listName', listName);
    setListName('');
  }

  function addCard(listId: number, cardName: string) {
    console.log('cardName:', cardName);
    console.log('listId:', listId);
    const newCard = { id: Date.now(), cardName, listId };
    setCard([...card, newCard]);
    setCardName('');
  }

  function getCardsByListId(listId: number) {
    return card.filter((c) => c.listId === listId);
  }

  function addListClose() {
    setList(false);
  }

    function addCardClose(listId) {
        const newCard = { id: Date.now(), cardName, listId };

        setAddCardVisible((false));
    }
    function getCardsClose(listId: number) {
        return card.filter((c) => c.listId === listId);
    }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between bg-blue-800 w-full">
        <button
          className="text-2xl text-white p-3 font-bold md:text-2xl"
          onClick={backToDashboard}
        >
          ← Back to Dashboard
        </button>
      </div>

      <ProjectListView />

      {/* Add List Section */}
      <div className="flex flex-row gap-2 border-2 p-3 w-full md:w-1/2 lg:w-1/5 rounded-xl">
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
              className="text-4xl"
              onClick={() => setList(true)}
            >
              &#43;
            </button>
            <h1 className="text-xl pt-2">Add another list</h1>
          </>
        )}
      </div>

      {/* Lists Display Section */}
      <div className="flex flex-row gap-2 p-3">
        {addList.map((list, index) => (
          <div
            key={index}
            className="flex flex-col text-left ml-9 py-3 w-96 mt-9 px-5 shadow-md rounded-xl text-xl font-semibold hover:text-xl cursor-pointer hover:border-none"
          >
            {/* List Title */}
            <div>
              <h1>{list.name}</h1>
            </div>

            {/* Cards under this List */}
                {getCardsByListId(list.id).length > 0 &&
              getCardsByListId(list.id).map((c, cardIndex) => (
                <div key={cardIndex}>
                  <p>{c.cardName}</p>
                </div>
              ))}

            {/* Add Card Section */}
                {isCardVisible ? (
               <AddCard
                addCard={addCard}
                closeCard={addCardClose}
                cardName={cardName}
                onCardNameChange={(value) => setCardName(value)}
                        
                listId={list.id}
              />
            ) : (
              <div className="flex flex-row">
                <button
                  className="text-2xl"
                  onClick={() => setAddCardVisible(true)}

                >
                  &#43;
                </button>
                <h1 className="mt-1">Add Card</h1>
              </div>
            )}
          </div>
        ))}
             
          </div>
    
      </div>

      
 
  );
}
