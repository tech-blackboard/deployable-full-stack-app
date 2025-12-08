import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface AddCardProps {
    onClose: () => void;
    addCard: () => void;
    cardname: string;
    onCardNameChange: (value: string) => void
    listId: number;
    cardId: number;
    closeCard: boolean;
}

export default function AddCard({ onClose, addCard, cardname, onCardNameChange, listId, closeCard, cardId }: AddCardProps) {

    const [card, setcardName] = useState('')

    function onInputChage(event: React.ChangeEvent<HTMLInputElement>) {
        onCardNameChange(event.target.value)
        setcardName(event.target.value)

    }

    return (
        <div className="">
            <div className="flex flex-col mt-2 ">
                <InputComponent placeholder=" enter card name..." inputType="text" className="border text-blue-800 md:w-1/2 lg:w-full text-base h-9 " inputValue={card} name={cardname} inputOnChange={onInputChage} />
                <div className="flex flex-row md:flex-row  mt-1 md:gap-9">
                    <ButtonComponent name="Add card" className="text-base border-none h-9 w-full pb-3 pt-1 text-base hover:rounded-md " onClick={() => addCard(cardname, cardId)} buttonType={"button"} />
                    <span className="text-base text-gray-500 mt-1 cursor-pointer ml-20" onClick={() => closeCard(cardname, cardId)} >&times;</span>
                </div>
            </div>
        </div>
    )
}

