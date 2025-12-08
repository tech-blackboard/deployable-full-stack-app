// import './ProjectView.css';
import { Archive, Search } from 'lucide-react';
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
import { toast } from 'react-toastify';
import DisplayProject from './DisplayProjects';

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

   const [archivecardVisible, setArchiveCardVisible] = useState<number[]>([]);
  const lists = useSelector((state: any) => state.newProject.lists);
  console.log("lists useselector from projectview ", lists)

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

  function cardArchived(listId: number, cardId:number){

    const archivecardVisibles = cardsByList[listId].find(card => card.id === cardId)// here we have to see the archived cards here.
    console.log("cardsByList", cardsByList)
    setArchiveCardVisible(prev => ({ ...prev, archivecardVisibles }))
    console.log("setArchiveCardVisible", archivecardVisibles)

    setCardsByList(prev =>{  const updated = (prev[listId] || []).filter(card => card.id !== cardId)// here we are archiving the cards .
      return {...prev, [listId]:updated }});
    toast.success("Card archived successfully!");
    
   
    
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
 <DisplayProject />
      {/* <DisplayProject/> */}

      {/* Add List Section
      <div className=" flex flex-row md:flex-row gap-2  md:ml-11 border-gold-200  p-2 mr-5  ml-5 mt-3 md:w-1/2 lg:w-1/5 rounded-xl  bg-gradient-to-bl from-blue-300 to-blue-200   ">
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
      </div>  */}

      {/* Lists Display Section */}
      <div className="flex flex-row  flex-wrap mb-9  items-start  gap-2  ml-2 px-9">
     {addList.length > 0 &&addList.map((list, index) => ( 
          <div key={list.id} className="flex flex-col  text-left px-2 pb-2 p-2 px-2 md:ml-9 mt-9 shadow-md rounded-md text-base font-semibold hover:text-xl  w-full lg:w-1/5 md:w-1/2 cursor-pointer hover:border-none  bg-gradient-to-tl from-blue-300 to-blue-200">
            {/* List Title */}
            <div className='flex flex-row justify-between   '>
           <h1 className="text-red-900 text-base  ">{list.name}</h1>

              <button className="text-black-100 hover:text-blue-800  " >
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
               <div key={c.id} className='   flex flex-row  gap-9 p-1'>
                  
                  
            <><button className='text-base  mt-2 rounded-md w-full lg:w-11/12 md:w-1/3  bg-blue-200 shadow-md hover:rounded-md p-3' onClick={() => listDisplay(c.cardName)}>{c.cardName}</button>
                 </> <button className='top-0 right-0' onClick={() => cardArchived(list.id, c.id)}> <Archive className='w-2 h-2 mr-2 mt-2'/></button>
                </div>
             ))}   

             {/* {
              listed.cards.map((card, cardId) => <div key={cardId}>
                <p>{card.cardname}</p></div>)
             } */}

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
              <div className="flex flex-row">
                <button
                  className="text-base "
                  onClick={() => showAddCard(list.id)}

                >
                  &#43;
                </button>
                  <h1 className="mt-1 text-gray-900 text-base  ">Add Card</h1>
              </div>
            )}
          </div>
        ))}


     
     
      {/* <DevComponent heading="Hello" para="Developer" buttonNames="hi"  buttonName="Click" className="text-xl text-red-500  " bg="bg-orange-200 px-9 rounded-xl py-1 gap-7" /> */}

      {/* Add List Section */}
      <div className=" flex flex-row md:flex-row gap-2  md:ml-11   p-2 mr-5  ml-5 mt-3 md:w-1/2 lg:w-1/5 rounded-xl  bg-gradient-to-bl from-blue-300 to-blue-200   ">
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
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <CardViewDisplay onClose={handleClose} cardName={selectedList} onCardNameChange={(value) => setselectedList(value)} />
            
        </div>
        
      )}
   
    </div>
   

  );
}
