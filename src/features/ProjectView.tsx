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
import { useState, type SetStateAction } from 'react';
import AddCard from './AddCard';
import DevComponent from './DevComponent';
import CardViewDisplay from './CardViewDisplay';
import Members from './Members';
import CheckListAddComponent from './CheckListAddComponent';

export default function ProjectView() {
  const [list, setList] = useState(false);
  const [addList, setAddList] = useState<any[]>([]);
  const [cardsByList, setCardsByList] = useState<{[key:number]:any[]}>({});
  const [listName, setListName] = useState('');
  const [cardName, setCardName] = useState<{ [key: number]: string }>({});
  const [isPopupOpen,setPopupOpen] = useState(false);
  const [selectedList, setselectedList] = useState('');


  const [cardVisible, setCardVisible] = useState<{
    length: number; [key: number]: boolean }>({
      length: 0
    });

  // const [cardVisible, setCardVisible] = useState<number[]>([]);

  const navigate = useNavigate();

  function backToDashboard() {
    navigate('/DashBoard');
  }

  function addLists() {
    const newList = { id: Date.now(), name: listName };
    setAddList([...addList, newList]);
    console.log('addList', addList);
    console.log('listName', listName);
    console.log('newList', newList);
    setListName('');
      }

  function addCard(listId: number, cardName: string) {
    console.log('cardName:', cardName);
    console.log('listId:', listId);
    const newCard = { id: Date.now(), cardName };
    console.log("newCard", newCard)
    setCardsByList(prev => ({ ...prev, [listId]: [...(prev[listId] || []), newCard],}));  
      setCardName('');

  }

  function getCardsByListId(listId: number) {
    return cardsByList[listId]|| []

  }

  function addListClose() {
    setList(false);

  }
  // function addListCloses() {
  //   setList(!false);

  // }

  function addCardClose(listId: number) {
    setCardVisible(prev => ({ ...prev, [listId]: false, }))
    console.log("card closed for list id", listId)


  }
  function showAddCard(listId: number) {
    setCardVisible(prev => ({ ...prev, [listId]: true, }))
  }


  function listDisplay(cardName:string){
    console.log("listDisplay cardName", cardName)
   const pop= setPopupOpen(true)
    console.log("setPopupOpen ", pop)
    setselectedList(cardName)
    console.log("listDisplay selectedList", selectedList)

    console.log("button ")
  }
  function handleClose(){
    const popclose=setPopupOpen(false)
    console.log("setPopupOpen ", popclose)
  }
  // function addCardClose(listId:number) {
  //   setCardVisible(prev => prev.filter(id => id != listId))
  //   console.log("card closed for list id", listId)
  //   // setAddCardVisible(false);

  // }
  // function showAddCard(listId: number) {
  //   setCardVisible(prev=>[...prev,listId])

  // }


  return (
    <div className='w-full '>
      {/* Header */}

      <div className="bg-blue-800  text-start w-full  lg:w-full">
        <button
          className="text-xl text-white p-3 font-bold md:text-2xl"
          onClick={backToDashboard}
        >
          ← Back to Dashboard
        </button>
      </div>

      <ProjectListView />

      {/* Add List Section */}
      <div className="   flex flex-row md:flex-row gap-2 border-2 md:ml-11 border-gold-200  p-3 mr-5  ml-5 mt-3 md:w-1/2 lg:w-1/4 rounded-xl  bg-gradient-to-bl from-blue-300 to-blue-200   ">
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
              className="text-4xl "
              onClick={() => setList(true)}
            >
              &#43;
            </button>
            <h1 className="text-xl pt-2">Add another list</h1>
          </>
        )}
      </div>

      {/* Lists Display Section */}
      <div className="flex flex-row    flex-wrap   mb-9  items-start mb-2  gap-2  ml-6 ">
        {addList.length > 0 && addList.map((list, index) => (
          <div key={list.id} className="flex flex-col  text-left  lg:w-80 pb-2 ml- md:ml-9 mt-9 px-9 shadow-md rounded-xl text-xl font-semibold hover:text-xl cursor-pointer hover:border-none  bg-gradient-to-tl from-blue-300 to-blue-200">
            {/* List Title */}
            <div className='flex flex-row justify-between   '>
              <h1 className="text-red-900 font-bold mr-11">{list.name}</h1>

              <button className="text-black-100 hover:text-blue-800 mt-2 " >
                <svg className="w-6 h-5  " fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="4" cy="12" r="3"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <circle cx="20" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            {/* Cards under this List */}
            {
              getCardsByListId(list.id).map((c) => (
                <div key={c.id} className=' px-5  '  >
                  <button className='text-blue-700 font-semibold px-9 border  py-3  mb-3 mt-3  shadow-md rounded-md w-full md:w-1/2 lg:w-full border-blue-400 ' onClick={() => listDisplay(c.cardName)}>{c.cardName}</button>
                
               
                </div>
              ))}

            {/* Add Card Section */}
            {/* {cardVisible.includes(list.id) ? ( */}
            {cardVisible[list.id] ? (
              <AddCard
                addCard={() => addCard(list.id, cardName[list.id])}
                closeCard={() => addCardClose(list.id)}
                cardName={cardName[list.id] || ''}
                onCardNameChange={(value) =>
                  setCardName(prev => ({ ...prev, [list.id]: value }))
                }
                listId={list.id}
              />

            ) : (
              <div className="flex flex-row   md:px-0  md:mr-0  ">
                <button
                  className="text-2xl "
                  onClick={() => showAddCard(list.id)}

                >
                  &#43;
                </button>
                <h1 className="mt-1 text-gray-900">Add Card</h1>
              </div>
            )}
          </div>
        ))}



      </div>
      {/* <DevComponent heading="Hello" para="Developer" buttonNames="hi"  buttonName="Click" className="text-xl text-red-500  " bg="bg-orange-200 px-9 rounded-xl py-1 gap-7" /> */}



      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 overflow-x-auto">
          <CardViewDisplay onClose={handleClose} cardName={selectedList} onCardNameChange={(value) => setselectedList(value)} />
            
        </div>
        
      )}
   
    </div>


  );
}
