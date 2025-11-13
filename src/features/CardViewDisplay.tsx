import { Megaphone, Image, Tags, Clock, SquareCheck, Plus, SmilePlus, FileText, Check } from "lucide-react";
import { useState } from "react";
import AddToCard from "./AddToCard";
import CheckListPopUp from "./CheckListPopUp";
import Members from "./Members";
import ButtonComponent from "./ButtonComponent";
import CheckListAddComponent from "./CheckListAddComponent";
import TooltipComponent from "./TooltipComponent";

interface CardViewDisplayProps {
    cardName: string;
    onClose: () => void;
    onCardNameChange: (value: string) => void;
}

export default function CardViewDisplay({ cardName, onClose, onCardNameChange }: CardViewDisplayProps) {
    const buttonStyle = ` flex  md:flex-nowrap  md:justify-evenly w-32  font-semibold text-xl border rounded-xl md:mb-9  md:w-1/2 lg:w-1/3 bg-blue-300 p-2 hover:rounded-xl hover:shadow-md hover:bg-blue-300`;

    const [desinput, setDesinput] = useState("");
    const [finalDesinputs, setFinalDesinputs] = useState("");
    const [finalDesinputsarray, setFinalDesinputsArray] = useState<string[]>([]);

    const [add, setAdd] = useState(false);
    const [checkList, setCheckList] = useState(false);
    const [member, setMember] = useState(false);
    const [descreptionAddButton, setDescreptionAddButton] = useState(false);
    const [descreptionBox, setDescriptionBox] = useState(false);
    const [checklistItems, setChecklistItems] = useState<string[]>([]); //  stores checklist items to show under description
    const [checked, setClick] = useState(false);
    const [checklistName, setCheckListName] = useState('')

    function checkListNames(e: React.ChangeEvent<HTMLInputElement>) {
        setCheckListName(e.target.value)

    }

    function inputFunction(e: React.ChangeEvent<HTMLSelectElement>) {
        onCardNameChange(e.target.value);
    }

    function AddFunction() {
        setAdd(true);
    }
    function AddOnClose() {
        setAdd(false);
    }

    function ChecklistFunction() {
        setCheckList(true);
    }

    function ChecklistCloseFunction() {
        setCheckList(false);
    }

    function memberFunction() {
        setMember(true);
    }

    function memberCloseFunction() {
        setMember(false);
    }

    function DescreptionButton() {
        setDescreptionAddButton(true);
        setDescriptionBox(false);
    }

    function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setDesinput(e.target.value);
    }

    function handleDescriptionButton() {
        setFinalDesinputs(desinput);
        setFinalDesinputsArray([desinput]);
        setDescriptionBox(true);
        setDescreptionAddButton(false);
    }

    function handleDescriptionCancel() {
        setDescriptionBox(true);
        setDescreptionAddButton(false);
    }

    function paraToDescription() {
        setDescriptionBox(false);
        setDescreptionAddButton(true);
    }

    function descriptionEdit() {
        setDescriptionBox(false);
        setDescreptionAddButton(true);
    }

    // When Add clicked in CheckedList popup
    function handleAddCheckList(name: string) {
        setChecklistItems([...checklistItems, name]); // add new checklist
        setCheckList(false); // close popup
        console.log("console.log() is a command used by developers (especially in JavaScript) to find bugs or check what’s happening inside the program. ")
        setAdd(false)
    }

    function cliked(){
        setClick(!checked)
    }
    return (
        <div className="mb-11 border-2 border-blue-400 rounded-xl shadow-xl w-full mx-auto mt-9 pt-3 md:w-1/2 lg:w-2/3 pb-9 bg-blue-100 h-[100%] overflow-x-auto">
            {/* Header */}
            <div className="flex flex-row justify-between px-9" onChange={inputFunction}>
                <select className="text-blue-800 font-bold mb-2 text-xl rounded-md bg-blue-100 shadow-md">
                    <option>{cardName}</option>
                    <option>To-Do</option>
                    <option>In-Progress</option>
                    <option>Complete</option>
                </select>

                <div className="flex flex-row md:gap-11 gap-2 md:w-full ml-16 md:ml-80  ">
                    <button>
                        <Megaphone className="size-9" />
                    </button>
                    <div className="mt-4 border h-6 border-gray-500"></div>
                    <button>
                        <Image className="size-8" />
                    </button>
                    <button className="text-black-100 hover:text-blue-800 text-6xl">
                        <svg className="w-6 h-5 size-9" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="4" cy="12" r="3"></circle>
                            <circle cx="12" cy="12" r="3"></circle>
                            <circle cx="20" cy="12" r="3"></circle>
                        </svg>
                    </button>

                    <button className="text-5xl mb-2" onClick={onClose}>&times;</button>
                </div>
            </div>

            {/* Title */}
            <div>
                <div className="flex items-center gap-3 cursor-pointer mb-9 mt-3 ml-11" onClick={cliked}>
                    
                    <div className={` w-5 h-5 rounded-full border-2 border-blue-700 flex items-center justify-center transition-all duration-200 ${checked ? "bg-blue-700" : "bg-transparent"}`}>
                        <TooltipComponent text="completed" position="top">
                        {checked && <Check className="text-white w-3 h-3" strokeWidth={3} />}
                        </TooltipComponent>

                    </div>

                    <h1 className="font-semibold text-2xl text-blue-800">{cardName}</h1>
                </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-row justify-evenly flex-wrap gap-2 md:flex-nowrap md:flex-row md:gap-3 md:px-20 md:justify-around mb-9 ">
                <button className={buttonStyle} onClick={AddFunction}> <Plus /> Add  </button>
                <button className={buttonStyle}> <Tags /> Labels </button>
                <button className={buttonStyle}>  <Clock /> Dates</button>
                <button className={buttonStyle} onClick={ChecklistFunction}> <SquareCheck /> Checklist </button>
                <button className={buttonStyle} onClick={memberFunction}> <SmilePlus /> Members </button>
            </div>

            {/* Description Section */}
            <div className="flex flex-row px-9 mb-2">
                <div>
                    <FileText />
                </div>
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-xl font-semibold">Description</h1>
                    <ButtonComponent
                        name="Edit"
                        className="border-2 bg-gray-200 ml-11 rounded-md p-0"
                        onClick={descriptionEdit} />
                </div>
            </div>

            {!descreptionBox ? (
                <div className="px-9" onClick={DescreptionButton}>
                    <textarea
                        value={desinput}
                        placeholder="Add a detailed description..."
                        className="border-2 border-gray-900 w-full p-8 rounded-xl"
                        onChange={handleDescription}
                    />
                </div>
            ) : (
                finalDesinputsarray.map((input, index) => (
                    <div key={index}>
                        <div onClick={paraToDescription}>{input}</div>
                    </div>
                ))
            )}

            {descreptionAddButton && (
                <div className="flex flex-row gap-2 text-left ml-9 mt-3">
                    <ButtonComponent name="Save" onClick={handleDescriptionButton} />
                    <ButtonComponent name="Cancel" className="bg-gray-300" onClick={handleDescriptionCancel} />
                </div>
            )}

            {/*AddToCard Popup */}
            { add && (
                <div className="fixed inset-0  flex items-center md:ml-72 bg-black bg-opacity-40 z-50">
                    <div className="bg-blue-200 rounded-xl shadow-lg px-6">
                        <AddToCard onClose={AddOnClose} onAddCheckList={handleAddCheckList} />
                    </div>
                </div>
            )}

            {/*  Checklist Popup */}
            {checkList && (
                <div className="fixed inset-0 flex  items-center md:justify-center bg-opacity-40 bg-gray-900">
                    <div className="bg-blue-100 mt-72 ml-9 px-2 md:mt-[33%] md:ml-72 md:w-1/2 lg:w-1/3 mb-44 border-2 border-blue-600 rounded-xl shadow-xl">
                        <CheckListPopUp onClose={ChecklistCloseFunction} onAddCheckList={handleAddCheckList} />
                    </div>
                </div>
            )}

            {/* Members Popup */}
            {member && (
                <div className="fixed inset-0 flex mt-44 ml-96 items-center justify-center bg-opacity-40">
                    <div className="bg-white rounded-xl shadow-lg w-full md:w-1/2 lg:w-1/3">
                        <Members onClose={memberCloseFunction} />
                    </div>
                </div>
            )}

            {/*  Render checklist items BELOW the description */}
            {checklistItems.length > 0 && 
(
                <div className="mt-6 px-9">
                    <h2 className="text-lg font-semibold mb-2">Checklist</h2>
                    {checklistItems.map((item, index) => (
                        <div key={index} className="mb-3">
                            <CheckListAddComponent name={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

