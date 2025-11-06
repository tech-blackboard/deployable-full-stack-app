import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface CheckListProps{
    onClose:()=>void;
}
export default function CheckList({ onClose }: CheckListProps){
    return(
        <div className="border-2 border-blue-300 pb-5 mx-auto rounded-md px-44">
            <div className="flex flex-row  ">
                <h3 className="mt-2 text-xl font-bold ml-9 text-blue-600 ">Add checklist</h3>
                <button className="text-4xl mr-1 text-blue-700 " onClick={onClose} >&times;</button>

            </div>
            <div className="text-left ml-9">
                <label className="text-lg font-semibold">Title</label>
                <InputComponent inputType="text" className="mb-8 " />

              

           
                <label className="text-lg font-semibold">Copy items from…</label>
            <InputComponent inputType="text" className="mb-8 "/>

            <ButtonComponent name="Add" className="ml-14 "/>
            </div>
        </div>
    )
}