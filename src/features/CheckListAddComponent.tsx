import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface CheckListAddComponentProps {
    name: string;
}

export default function CheckListAddComponent({ name }: CheckListAddComponentProps) {
    const [addItemName, setAddItemName] = useState("");
    const [addItemNameArray, setAddItemNameArray] = useState<{name:string,checked:boolean}[]>([]);
    const [addItem, setAddItems] = useState(false);
    const [checklistDelete, setChecklistDelete] = useState(false);


    const total = addItemNameArray.length;
    const completed = addItemNameArray.filter((i) => i.checked).length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;

    function addItemInputOnchange(e: React.ChangeEvent<HTMLInputElement>) {
        setAddItemName(e.target.value);
    }

    function addItemsHandler() {
        setAddItems(true);
    }

    function addItemInput() {
        setAddItemNameArray([...addItemNameArray, {name:addItemName, checked:false}]);
        setAddItemName("");
    }

    function checkBoxChecked(index:number){
        const updated = [...addItemNameArray];
        updated[index].checked = !updated[index].checked; 
        setAddItemNameArray(updated)

    }

    function cancelAddItems() {
        setAddItems(false);
        setAddItemName("");
    }

    function deleteAddItems() {
        setChecklistDelete(true);
    }

    if (checklistDelete) return  null  // it can disappearing the component / delete


    
   
    

    return (
        <div className="border-2 w-full md:w-1/2 lg:w-11/12 mx-auto px-11 p-2 shadow-xl border-blue-200 rounded-md">
            <div className="mx-auto mt-3">
                <div className="flex flex-row gap-3">
                    <input
                        type="checkbox"
                        className="w-4"
                        defaultChecked={true}
                       
                    />
                    <p className="font-bold text-xl text-blue-900">{name}</p>
                    <button
                        className="border-2 bg-blue-200 px-4 border-blue-200 rounded-md p-1 md:ml-96 ml-2" 
                        onClick={deleteAddItems}
                    >
                        Delete
                    </button>
                </div>
            </div>

          


            <div className="flex flex-row mt-9 items-center">
                <p>{Math.round(percentage)}%</p>
                <div className="relative  w-full rounded-xl ml-3 mt-2 h-3 bg-gray-400">
                    <div
                        className="absolute left-0 top-0 h-3 bg-blue-600 rounded-xl transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                       
                    >
                       
                    </div>
                    
                </div>
            </div>

         

            {addItemNameArray.map((item,index) => (
                <div className="flex flex-row mt-3" key={index}>
                    <input
                        type="checkbox"
                        className="w-4"
                        checked={ addItemNameArray.Checked }
                        onChange={() => checkBoxChecked(index)}
                      
                    />
                    {
                        <p className={`ml-2 ${addItemNameArray.Checked ? "line-through" : " " }`}>{item.name}</p> 
                    }
                    
                </div>
            ))}

            {addItem && (
                <>
                    <InputComponent
                        placeholder= "   Add an item"
                        className="lg:w-full mt-9 "
                        inputValue={addItemName}
                        inputOnChange={addItemInputOnchange}
                    />
                    <div className="flex flex-row mt-3 gap-3">
                        <ButtonComponent name="Add" onClick={addItemInput} className="w-full px-9" />
                        <ButtonComponent
                            name="Cancel"
                            className="bg-gray-400 w-full px-9"
                            onClick={cancelAddItems}
                        />
                    </div>
                </>
            )}

            <button className="border-2 bg-gray-300 mt-3" onClick={addItemsHandler}>
                Add an item
            </button>
        </div>
    );
}
