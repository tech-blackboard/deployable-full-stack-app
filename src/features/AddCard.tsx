import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface AddCardProps {
    onClose: () => void;
    addCard: () => void;
    cardName: string;
    onCardNameChange: (value: string) => void
    listId: number;
    cardId: number;
    closeCard: boolean;
}

export default function AddCard({ onClose, addCard, cardName, onCardNameChange, listId, closeCard, cardId }: AddCardProps) {

    const [card, setcardName] = useState('')

    function onInputChage(event: React.ChangeEvent<HTMLInputElement>) {
        onCardNameChange(event.target.value)
        setcardName(event.target.value)

    }

    return (
        <div className="">
            <div className="flex flex-col mt-2 px-5">
                <InputComponent placeholder=" Enter card name..." inputType="text" className="border-2 text-blue-800 font-light md:w-1/2 lg:w-full" inputValue={card} name={cardName} inputOnChange={onInputChage} />
                <div className="flex flex-row md:flex-row  mt-1 md:gap-9">
                    <ButtonComponent name="Add card" className="text-xl border-none" onClick={() => addCard(listId, cardName, cardId)} />
                    <span className="text-4xl text-gray-500 mt-1 cursor-pointer ml-9 " onClick={() => closeCard(cardName, cardId)} >&times;</span>
                </div>
            </div>
        </div>
    )
}

