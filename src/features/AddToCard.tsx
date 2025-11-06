import { Clock, MapPin, Paperclip, SmilePlus, SquareCheck, StretchHorizontal, Tags, type LucideIcon } from "lucide-react";
import TooltipComponent from "./TooltipComponent";
interface DivComponentProps {
    icon: LucideIcon;
    names: string;
    caption: string;
    onClose: () => void;
}

export function DivComponent({ icon, names, caption, onClose }: DivComponentProps) {
    return (
        <div className="">
            <div className="flex flex-row gap-4 p-2 rounded-xl hover:bg-gray-200 hover:shadow-xl cursor-pointer " onClick={onClose}>
                <div className="rounded-xl border-2 hover:border-blue-500 border-blue-400  p-6">{icon}</div>
                <div>
                    <p className="text-left text-2xl font-semibold">{names}</p>
                    <span className=" ">{caption}</span>

                </div>
            </div>

        </div>


    )
}


interface AddToCardProps {
    onClose: () => void;
}

export default function AddToCard({ onClose }: AddToCardProps) {


    return (
        <div className="mb-11 rounded-xl border-2 border-gray-400 p-44">
            <div className="flex flex-row justify-between  mt-3 mb-4 ">
                <h2 className="ml-2  text-2xl font-bold  ">Add to card</h2>
                <button className="text-4xl " onClick={onClose}>&times;</button>
            </div>
            <TooltipComponent text="Labels"  position="right">
                <DivComponent icon={<Tags />} names="Labels" caption="Organize, categorize, and prioritize" />
            </TooltipComponent>

            <TooltipComponent text="Dates"  position="right">
                <DivComponent icon={<Clock />} names="Dates" caption="Start dates, due dates, and reminders" />
            </TooltipComponent>

            <TooltipComponent text="Checklist" count={1} position="right">
                <DivComponent icon={<SquareCheck />} names="Checklist" caption="Add subtasks" />
            </TooltipComponent>

            <TooltipComponent text="Members" count={1} position="right">
                <DivComponent icon={<SmilePlus />} names="Members" caption="Assign members" />
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


        </div >


    )
}

