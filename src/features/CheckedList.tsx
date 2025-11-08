import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";




interface CheckListProps{
    onClose:()=>void;
    onAddCheckList:(name:string)=>void
}
export default function CheckList({ onClose, onAddCheckList }: CheckListProps){

    const [checklistName, setCheckListName] = useState('')
    function checkListNames(e: React.ChangeEvent<HTMLInputElement>) {
        setCheckListName(e.target.value)
    
    }

    function addChecklist(){
        console.log("addChecklist", checklistName)
        onAddCheckList(checklistName);
        setCheckListName('')
  }


  
    return(
        <div className="   ">
            <div className=" flex flex-row justify-between px-9">
                <h3 className="mt-2 text-xl font-bold text-blue-600  ml-20 ">Add checklist</h3>
                <button className="text-4xl  text-blue-700 " onClick={onClose} >&times;</button>

            </div>
            <div className="text-left ml-9">
                <label className="text-lg font-semibold">Title</label>
     
                <InputComponent inputType="text" placeholder=" Checklist" className="  border-2 lg:w-11/12" inputOnChange={checkListNames} inputValue={checklistName}/>
                <label className="text-lg font-semibold">Copy items from…</label>
                <InputComponent inputType="text" placeholder=" (none)" className="mb-3 border-2 lg:w-11/12"/>

                <ButtonComponent name="Add" className=" pt-0 pb-0  border-blue-100" onClick={addChecklist}/>

               
              
            </div>
           
        </div>
    )
}