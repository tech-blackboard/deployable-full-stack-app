import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import './CreateNewProject.css';
export default function CreateNewProject() {
    return (
        <div className="relative shadow-xl border-2 rounded-xl w-[30%] ml-[30%] pb-2 mt-9">

            <h1 className="mr-[40%] text-xl font-semibold  p-7">Create New Project</h1>
            <button className="absolute top-[26px]  text-xl right-[30px]  ">&times;</button>

            <label className="mr-52 text-9xm font-semibold ">Project Name *</label>
            <InputComponent inputType="text" /><br></br>

            <label className="mr-56 text-9xm font-semibold  ">Description</label>
            <InputComponent inputType="text" /><br></br>

            <label className="  mr-56 text-9xm font-semibold">Start Date</label>
            <InputComponent inputType="date" /><br></br>

            <label className=" mr-48 text-9xm font-semibold">Target End Date</label>
            <InputComponent inputType="date" />


            <div className="flex flex-col">
                <label className="  mr-44 text-9xm font-semibold mt-5">Project Category</label>
                <select className="border-2 w-[70%] ml-[70px] p-1 rounded-xl">
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Designing</option>
                    <option>Marketing</option>
                    <option>other</option>
                </select>
            </div>

            <h1 className="mr-28 text-9xm font-semibold mt-5">Team Members (Optional)</h1>
            <InputComponent inputType="text" />

            <div className="flex justify-center  gap-2 mt-5">
                <ButtonComponent className="bg-gray-600 hover:bg-gray-700   " name="Cancel" />
                <ButtonComponent className="bg-blue-600 hover:bg-blue-700 w-44 " name="Create New Project" />
            </div>

        </div>
    )
}