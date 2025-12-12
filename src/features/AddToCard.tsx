import { Clock, MapPin, Paperclip, SmilePlus, SquareCheck, StretchHorizontal, Tags, type LucideIcon } from "lucide-react";
import TooltipComponent from "./TooltipComponent";
import { useState } from "react";
import CheckListPopUp from "./CheckListPopUp";
import { useNavigate } from "react-router-dom";
import Members from "./Members";
interface DivComponentProps {
    icon: React.ReactNode;
    names: string;
    caption: string;
    onClose?: () => void;
    onOpen?:()=>void;
    onChange?: () => void
    
}

export function DivComponent({ icon, names, caption, onClose, onOpen, onChange }: DivComponentProps) {
 
   
   
    return (
        <div className=" hover:text-blue-900" onClick={onOpen} onChange={onChange}>
            <div className="flex flex-row gap-5 p-2 pb-2 rounded-xl hover:bg-gray-100 hover:shadow-xl cursor-pointer " onClick={onClose} >
                <div className="rounded-xl border-2 hover:border-blue-500 border-blue-400  p-3" >{icon}</div>
                <div >
                    <p className="text-left text-xl font-semibold"  >{names}</p>
                    <span className=" ">{caption}</span>

                </div>
            </div>

        </div>


    )
}


interface AddToCardProps {
    onClose: () => void;
    onAddCheckList: (name: string) => void;

}

export default function AddToCard({ onClose, onAddCheckList }: AddToCardProps) {
    const [checklist, setCheckList] = useState(false);
    const [member, setMember] = useState(false)

    const navigate = useNavigate()
    function checkList() {
        setCheckList(true)
      
    }
    function ChecklistCloseFunction() {
        setCheckList(false)
        navigate("/ProjectView");

    }
    function memberFunction() {
        setMember(true)

    }

    function memberCloseFunction() {
        setMember(false)

    }

    return (
        <div >
            <div className=" flex flex-row justify-between mt-3">
                <h2 className="  text-xl font-bold px-2 ">Add to card</h2>
                <button className="text-4xl px-3 " onClick={onClose}>&times;</button>
            </div>
            <TooltipComponent text="Labels"  position="right">
                <DivComponent icon={<Tags />} names="Labels" caption="Organize, categorize, and prioritize" />
            </TooltipComponent>

            <TooltipComponent text="Dates"  position="right">
                <DivComponent icon={<Clock />} names="Dates" caption="Start dates, due dates, and reminders" />
            </TooltipComponent>

            <TooltipComponent text="Checklist" count={1} position="right">
                <DivComponent icon={<SquareCheck />} names="Checklist" caption="Add subtasks" onOpen={checkList}/>
            </TooltipComponent>

            <TooltipComponent text="Members" count={1} position="right">
                <DivComponent icon={<SmilePlus />} names="Members" caption="Assign members" onOpen={memberFunction} />
            </TooltipComponent>

            <TooltipComponent text="Attachments" position="right">
                <DivComponent icon={<Paperclip />} names="Attachments" caption="Attach links, pages, work items, and more" />
            </TooltipComponent>

            <TooltipComponent text="Location"  position="right">
                <DivComponent icon={<MapPin />} names="Location" caption="View this card on a map" />
            </TooltipComponent>

            <TooltipComponent text="Custom Fiels"position="right">
                <DivComponent icon={<StretchHorizontal />} names="Custom Fiels" caption="Create your own fields" />
            </TooltipComponent>

            {checklist && (
                <div className=" inset-0  flex items-center md:justify-center bg-opacity-40 bg-gray-900">
                    <div className=" bg-blue-100  md:ml-72  md:w-1/2 lg:w-1/3 md:mb-44  border-2 border-blue-600 rounded-xl shadow-xl ">
                        <CheckListPopUp onClose={ChecklistCloseFunction} onAddCheckList= {(name: string) => {
                            onAddCheckList(name);  //  Pass up to CardViewDisplay
                         }}  />
                    </div>
                </div>
            )}
             {member && (
                <div className="fixed inset-0 flex  items-center justify-center bg- bg-opacity-40  bg-gray-900 ">
                                <div className="bg-white rounded-xl shadow-lg  w-full md:w-1/2 lg:w-1/3 ">
                                    <Members onClose={memberCloseFunction} />
                                </div>
                            </div>
                        )}
                        </div>
     

    )
}



