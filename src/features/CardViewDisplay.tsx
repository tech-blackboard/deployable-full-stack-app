
import { Megaphone, Image, Tags, Clock, SquareCheck, Plus, SmilePlus, FileText } from "lucide-react";
import { useState, type SetStateAction } from "react";
import AddToCard from "./AddToCard";
import CheckedList from "./CheckedList";

interface CardViewDisplayProps {
    cardName: string;
    onClose:()=>void;
    onCardNameChange:(value:string)=>void;
}
export default function CardViewDisplay({ cardName, onClose, onCardNameChange }: CardViewDisplayProps) {
    const buttonStyle = ` flex flex-row justify-evenly font-semibold text-xl border rounded-xl mb-9 w-full md:w-1/2 lg:w-1/3  bg-blue-300 mb-9 p-2 hover:rounded-xl hover:shadow-md hover:bg-blue-300`;

    const [cardNams, setCardName] = useState('')

    const [add,setAdd]=useState(false)
    const [CheckList, setCheckList]=useState(false)

    function inputFunction(e) {
        setCardName(e.target.value)
        onCardNameChange(e.target.value)

    }

    function AddFunction(){
        setAdd(!false)

    }
    function AddOnClose() {
        setAdd(false)

    }
    function ChecklistFunction(){
        setCheckList(!false)

    }

    function ChecklistCloseFunction() {
        setCheckList(false)

    }
    return (
        <div className=" mb-11 border-2 border-blue-400 rounded-xl shadow-xl w-full mx-auto py-auto mt-9 pt-3 md:w-1/2 lg:w-1/2  pb-9 bg-blue-100  ">
           
            <div className="  flex flex-row  justify-between px-9 " onChange={inputFunction} >
                <select className="text-blue-800 font-bold mb-2 text-xl">
                    <option  >{cardName}</option>
                    
                    <option > To-Do</option>
                        <option>In-Progress</option>
                        <option>Complete</option>
                    </select>
  
                    <div className=" flex flex-row gap-11">
                        <button>
                            <Megaphone className="size-9" />
                        </button>
                        <div className=" mt-4 border h-6 border-gray-500"></div>
                        <button>
                            <Image className="size-8" />
                        </button>
                        <button className="text-black-100 hover:text-blue-800 text-6xl">
                            <svg className="w-6 h-5  size-9" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="4" cy="12" r="3"></circle>
                                <circle cx="12" cy="12" r="3"></circle>
                                <circle cx="20" cy="12" r="3"></circle>
                            </svg>
                        </button>

                    <button className="text-5xl mb-2" onClick={onClose} >&times;</button>

                    </div>
                </div>

            <h1 className="text-left ml-20 mb-5">{cardName}</h1>

            <div className="flex flex-row  gap-3 px-20 justify-around ">
                
                <button className={buttonStyle} onClick={AddFunction}><Plus className=" " />Add</button>     
                <button className={buttonStyle}><Tags />Labels</button>
                <button className={buttonStyle}><Clock />Dates</button>
                <button className={buttonStyle} onClick={ChecklistFunction}><SquareCheck />Checklist</button>
                <br>
                </br>
              
                <button className={buttonStyle}><SmilePlus />Members</button>
            </div>
            {
                CheckList && (<div className=" inset-0  bg-black bg-opacity-10 mx-20">
                    <CheckedList onClose={ChecklistCloseFunction} /></div>)
            }  

            <div className="flex flex-row gap-3 px-9 mb-2 ">
                <div>
                    <FileText />
                </div>
                <div><h1 className="text-xl  font-semibold"> Description</h1></div>
               
            </div>
            <div className="px-9  ">
                <input placeholder="Add a detailed description..." className="border-2 border-gray-900 w-full p-8 rounded-xl " />

            </div>

           {
                add && (<div className="inset-0 flex items-center justify-center bg-black bg-opacity-10 mb-72 mt-11 ">
                    <AddToCard onClose={AddOnClose }/></div>)
               } 
           
            </div>



  

    )
}