
import { Megaphone, Image, Tags, Clock, SquareCheck, Plus, SmilePlus, FileText } from "lucide-react";
import { useState, type SetStateAction } from "react";
import AddToCard from "./AddToCard";
import CheckedList from "./CheckedList";
import Members from "./Members";
import ButtonComponent from "./ButtonComponent";

interface CardViewDisplayProps {
    cardName: string;
    onClose: () => void;
    onCardNameChange: (value: string) => void;
}
export default function CardViewDisplay({ cardName, onClose, onCardNameChange }: CardViewDisplayProps) {
    const buttonStyle = ` flex flex-row justify-evenly font-semibold text-xl border rounded-xl mb-9 w-full md:w-1/2 lg:w-1/3  bg-blue-300 mb-9 p-2 hover:rounded-xl hover:shadow-md hover:bg-blue-300`;

    const [cardNames, setCardName] = useState('');
    const [desinput, setDesinput] = useState('');// this useState for onChange values when we change values it can update so if in this useState function assigned in the button function it can also change so we can take another useState for final value.

    const [finalDesinputs, setFinalDesinputs] = useState("");// this  useState for final description value it can call in button function.Used to store the final saved description(s).
    const [finalDesinputsarray, setFinalDesinputsArray] = useState<any[]>([]);// this  useState for final description value it can call in button function.You keep multiple descriptions in finalDesinputsarray.


    const [add, setAdd] = useState(false)
    const [checkList, setCheckList] = useState(false)
    const [member, setMember] = useState(false)
    const [descreptionAddButton, setDescreptionAddButton] = useState(false);
    const [descreptionBox, setDescriptionBox] = useState(false);
    


    function inputFunction(e) {
        setCardName(e.target.value)
        onCardNameChange(e.target.value)


    }

    function AddFunction() {
        setAdd(true)

    }
    function AddOnClose() {
        setAdd(false)

    }
    function ChecklistFunction() {
        setCheckList(true)

    }

    function ChecklistCloseFunction() {
        setCheckList(false)

    }
    function memberFunction() {
        setMember(true)

    }

    function memberCloseFunction() {
        setMember(false)


    }

    function DescreptionButton() {
        setDescreptionAddButton(true)
        setDescriptionBox(false)
    }
    function handleDescription(e) {
        setDesinput(e.target.value)
        console.log("handleDescription", desinput)
    

    }
    function handleDescriptionButton() {

        const finalDesinputs = desinput
        console.log("button", finalDesinputs)
        //  setFinalDesinputs(finalDesinputs) //it can handle the values it can replay the values when you enter a  new value .
        setFinalDesinputsArray([...finalDesinputsarray, finalDesinputs])
        setDescriptionBox(true)
        setDescreptionAddButton(!true)
        // setDescreptButton(true)
    }

    function paraButton() {
        setDescriptionBox(false)
        setDescreptionAddButton(true)
        console.log("paraButton", descreptionBox)
    }

    return (
        <div className=" mb-11 border-2 border-blue-400 rounded-xl shadow-xl w-full mx-auto py-auto mt-9 pt-3 md:w-1/2 lg:w-2/3  pb-9 bg-blue-100  ">

            <div className="  flex flex-row  justify-between px-9 " onChange={inputFunction} >
                <select className="text-blue-800 font-bold mb-2 text-xl rounded-md bg-blue-100 shadow-md">
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

            <div>
                <div className="flex flex-row gap-3 ">
                    <div className="rounded-[50%] p-2 h-2 mt-4  border-2 border-blue-700  ml-14"></div>
                    <h1 className="text-left   mt-2 mb-7 font-semibold text-2xl ">{cardName}</h1>

                </div>
            </div>


            <div className="flex flex-row  gap-3 px-20 justify-around ">

                <button className={buttonStyle} onClick={AddFunction}><Plus className=" " />Add</button>
                <button className={buttonStyle}><Tags />Labels</button>
                <button className={buttonStyle}><Clock />Dates</button>
                <button className={buttonStyle} onClick={ChecklistFunction}><SquareCheck />Checklist</button>
                <br>
                </br>

                <button className={buttonStyle} onClick={memberFunction}><SmilePlus />Members</button>
            </div>


            <div className="flex flex-row gap-3 px-9 mb-2 ">
                <div>
                    <FileText />
                </div>
                <div >

                    <h1 className="text-xl  font-semibold " > Description</h1>
                </div>

            </div>



            {// !description \Condition	What it shows
                // !descreption → true (no description)	A <textarea> for adding one
                //     !descreption → false (description exists)	A list of saved descriptions using .map()
                !descreptionBox ? <div className="px-9" onClick={DescreptionButton}>

                    <textarea
                        placeholder="Add a detailed description..."
                        className="border-2 border-gray-900 w-full p-8 rounded-xl"
                        onChange={handleDescription}
                    />
                </div>
                    : finalDesinputsarray.map((input) => <div key={input} >
                        <p onClick={paraButton} >{input}</p>
                    </div>)

            }



            {
                descreptionAddButton && (<div className="text-left ml-9 mt-3" >

                    <ButtonComponent name="Add" onClick={handleDescriptionButton} />

                </div>)
            }



            {add && (
                <div className="fixed inset-0 flex items-center ml-72 bg-black bg-opacity-40 z-50">
                    <div className="bg-blue-200 rounded-xl shadow-lg px-6   ">
                        <AddToCard onClose={AddOnClose} />
                    </div>
                </div>
            )}
            {checkList && (
                <div className="fixed inset-0  flex items-center justify-center bg-opacity-40 bg-gray-900">
                    <div className=" bg-blue-100  mt-[33%] ml-72  md:w-1/2 lg:w-1/3 mb-44  border-2 border-blue-600 rounded-xl shadow-xl ">
                        <CheckedList onClose={ChecklistCloseFunction} />
                    </div>
                </div>
            )}

            {member && (
                <div className="fixed inset-0 flex mt-44 ml-96 items-center justify-center bg- bg-opacity-40 ">
                    <div className="bg-white rounded-xl shadow-lg  w-full md:w-1/2 lg:w-1/3 ">
                        <Members onClose={memberCloseFunction} />
                    </div>
                </div>
            )}
        </div>





    )
}