import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { useDispatch } from "react-redux";
import { addChecklistSubItem, toggleChecklistSubItem, removeChecklistItem } from "../reduxStore/CreateNewProjectSlice";

interface CheckListAddComponentProps {
    name: string;
    itemId: number;
    checked: boolean;
    listId: number;
    cardId: number;
    items?: Array<{ itemId: number; name: string; checked: boolean }>;
}

export default function CheckListAddComponent({
    name,
    itemId,
    checked,
    listId,
    cardId,
    items = []
}: CheckListAddComponentProps) {
    const [addItemName, setAddItemName] = useState("");
    const [addItem, setAddItems] = useState(false);

    const dispatch = useDispatch();

    const total = items.length;
    const completed = items.filter((i) => i.checked).length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;

    function addItemInputOnchange(e: React.ChangeEvent<HTMLInputElement>) {
        setAddItemName(e.target.value);
    }

    function addItemsHandler() {
        setAddItems(true);
    }

    function addItemInput() {
        if (addItemName.trim()) {
            dispatch(addChecklistSubItem({
                listId,
                cardId,
                checklistItemId: itemId,
                name: addItemName
            }));
            setAddItemName("");
            setAddItems(false);
        }
    }

    function checkBoxChecked(subItemId: number) {
        dispatch(toggleChecklistSubItem({
            listId,
            cardId,
            checklistItemId: itemId,
            itemId: subItemId
        }));
    }

    function cancelAddItems() {
        setAddItems(false);
        setAddItemName("");
    }

    function deleteChecklist() {
        dispatch(removeChecklistItem({ listId, cardId, itemId }));
    }

    return (
        <div className="border-2 w-full md:w-1/2 lg:w-11/12 mx-auto px-11 p-2 border-blue-200 rounded-md bg-gray-500 text-white">
            <div className="mx-auto mt-3">
                <div className="flex flex-row gap-3">
                    <input
                        type="checkbox"
                        className="w-4"
                      
                    />
                    <p className="font-bold text-xl text-white">{name}</p>
                    <button
                        className="border-2 bg-blue-200 text-black px-4 border-blue-200 rounded-md p-1 md:ml-96 ml-2"
                        onClick={deleteChecklist}
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Progress Bar - Only show if there are items */}
            {items.length > 0 && (
                <div className="flex flex-row mt-4 items-center">
                    <p className="text-sm font-semibold">{Math.round(percentage)}%</p>
                    <div className="relative w-full rounded-xl ml-3 h-3 bg-gray-600">
                        <div
                            className="absolute left-0 top-0 h-3 bg-green-500 rounded-xl transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Display Sub-Items */}
            {items.map((item) => (
                <div className="flex flex-row mt-3 items-center" key={item.itemId}>
                    <input
                        type="checkbox"
                        className="w-4 cursor-pointer"
                        checked={item.checked}
                        onChange={() => checkBoxChecked(item.itemId)}
                    />
                    <p className={`ml-2 ${item.checked ? "line-through text-white" : ""}`}>
                        {item.name}
                    </p>
                </div>
            ))}

            {/* Add Item Input */}
            {addItem && (
                <>
                    <InputComponent
                        placeholder="Add an item"
                        className="lg:w-full mt-4 text-black"
                        inputValue={addItemName}
                        inputOnChange={addItemInputOnchange}
                    />
                    <div className="flex flex-row mt-3 gap-3">
                        <ButtonComponent
                            name="Add"
                            onClick={addItemInput}
                            className="w-full px-9" buttonType={"button"}                        />
                        <ButtonComponent
                            name="Cancel"
                            className="bg-gray-400 w-full px-9"
                            onClick={cancelAddItems} buttonType={"button"}                        />
                    </div>
                </>
            )}

            {/* Add Item Button */}
            {!addItem && (
                <button
                    className="border-2 bg-gray-600 hover:bg-gray-500 px-4 py-1 rounded-md mt-3"
                    onClick={addItemsHandler}
                >
                    Add an item
                </button>
            )}
        </div>
    );
}