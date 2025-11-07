import InputComponent from "./InputComponent";

interface MembersProps{
    onClose:()=>void;
}
export default function Members({ onClose }: MembersProps){
    return(
        <div className="bg-gray-200 mb-8">
             <div className="flex flex-row justify-between px-9 mt-1 ">
                <div className="text-xl ml-20 mt-3 font-semibold">Members</div>
                <button className="text-4xl " onClick={onClose}>&times;</button>

             </div>
             <InputComponent inputType="text" placeholder="  Search members" className="lg:w-11/12 mt-3 mb-2"/>
             <p className="text-left ml-5 ">Borad Memebers</p>
        </div>
    )
}