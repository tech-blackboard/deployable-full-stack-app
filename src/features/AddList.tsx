import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface AddListProps{
    onClose:()=>void;
    addList:()=>void;
    listName:string;
    onListNameChange: (value:string)=>void;


}

export default function AddList({ onClose, addList, listName, onListNameChange }: AddListProps){

 
    function onInputChage(event: React.ChangeEvent<HTMLInputElement>) {
        onListNameChange(event.target.value)


    }
    return(
        <div className=" ">
            <div className="flex flex-col mt-2 ">
                <InputComponent placeholder="Enter list name" inputType="text" className="border-2 lg:w-72 " name={listName} inputOnChange={onInputChage} />
                <div className="flex flex-row   mt-2 gap-9">
                    <ButtonComponent name="Add List" className="text-xl p-1" onClick={addList}  />
                    <span className="text-4xl text-gray-500 mt-1 cursor-pointer" onClick={onClose}>&times;</span>
                </div>
            </div>
        </div>
    )
}

function onChangeAddListName(value: any) {
    throw new Error("Function not implemented.");
}
