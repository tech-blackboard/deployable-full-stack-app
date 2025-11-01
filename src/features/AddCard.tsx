import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface AddCardProps{
    onClose:()=>void;
    addCard:()=>void;
    cardName:string;
    onCardNameChange: (value:string)=>void
    listId:number;
   
    closeCard:boolean;
}

export default function AddCard({ onClose, addCard, cardName, onCardNameChange, listId, closeCard }: AddCardProps){

    const [card, setcardName]=useState('')


    function onInputChage(event: React.ChangeEvent<HTMLInputElement>) {
        onCardNameChange(event.target.value)
        setcardName(event.target.value)

    }

    return(
        <div className=" ">
            <div className="flex flex-col mt-2 ">
                <InputComponent placeholder="Enter list name" inputType="text" className="border-2 lg:w-72 " inputValue={card} name={cardName} inputOnChange={onInputChage}/>
                <div className="flex flex-row   mt-2 gap-9">
                    <ButtonComponent name="Add card" className="text-xl p-1" onClick={() => addCard(listId, cardName)} />
                    <span className="text-4xl text-gray-500 mt-1 cursor-pointer" onClick={() => closeCard(listId, cardName)} >&times;</span>
                </div>
            </div>
        </div>
    )
}

