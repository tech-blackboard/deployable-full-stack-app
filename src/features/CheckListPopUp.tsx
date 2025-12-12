import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";




interface CheckListProps{
    onClose:()=>void;
    onAddCheckList:(name:string)=>void
}
export default function CheckListPopUp({ onClose, onAddCheckList }: CheckListProps){

    const [checklistName, setCheckListName] = useState('')
    function checkListNames(e: React.ChangeEvent<HTMLInputElement>) {
        setCheckListName(e.target.value)
    
    }

//     function addChecklist(checklistName: string){
//         console.log("addChecklist", checklistName)
//         onAddCheckList(checklistName);
//         setCheckListName('')
//   }


  
    return(
        <div className="  ">
            <div className=" flex flex-row md:justify-between px-11 gap-9 ">
                <h3 className="mt-2 text-xl font-bold text-blue-600  md:ml-20 ">Add checklist</h3>
                <button className="text-4xl  text-blue-700 " onClick={onClose} >&times;</button>

            </div>
            <div className="text-left md:ml-20 ml-9 px-2" >
                <label className="text-lg font-semibold">Title</label>
     
                <InputComponent inputType="text" placeholder=" Checklist" className="  border-2 lg:w-11/12" inputOnChange={checkListNames} inputValue={checklistName}/>
                <label className="text-lg font-semibold">Copy items from…</label>
                <InputComponent inputType="text" placeholder=" (none)" className="mb-3 border-2 lg:w-11/12"/>

                <ButtonComponent name="Add" className=" mb-2 h-2 pb-9  border-blue-100" onClick={() => onAddCheckList(checklistName)} buttonType={"button"}/>

               
              
            </div>
           
        </div>
    )
}