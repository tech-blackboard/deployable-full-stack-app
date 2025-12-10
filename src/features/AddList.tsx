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
        <div className="  ">
            <div className="flex flex-col mb-0">
                <InputComponent placeholder=" enter list name" inputType="text" className=" text-base text-blue-700 mt-1 lg:w-full md:mr-20 mb-1" name={listName} inputOnChange={onInputChage} />
                <div className="flex flex-row gap-9 ">
                    
                    <ButtonComponent name=" AddList" className="text-base border-none h-9 w-full pb-3 pt-1 text-base hover:rounded-md   " onClick={addList} buttonType={"button"}  />
                    <span className="text-3xl text-blue-500 cursor-pointer ml-20  " onClick={onClose}>&times;</span>
                </div>
            </div>
        </div>
    )
}

function onChangeAddListName(value: any) {
    throw new Error("Function not implemented.");
}
