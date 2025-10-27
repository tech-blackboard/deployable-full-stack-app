import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useState, useEffect, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProject } from '../reduxStore/CreateNewProjectSlice';
import DisplayProjects from './DisplayProjects';
// import './CreateNewProject.css';

// interface CreateNewProject{
// projectName:string;
// description:string;
// startDate:Date;
// targetEndDate:Date;

// }
export default function CreateNewProjects() {
    // const newProjects=useSelector((state)=>state.newProject.addProjects);
    const dispatch = useDispatch();
    // console.log("newProjects",newProjects)
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [targetEndDate, setTargetEndDate] = useState("");
    const [TeamMembers, setTeamMembers] = useState("")
    const [ProjectCategory, setetProjectCategory] = useState("")


    const navigate = useNavigate()

    function createProjectName(event: React.ChangeEvent<HTMLInputElement>) {
        setProjectName(event?.target.value)
        console.log("target.value")
    }

    function projectDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event?.target.value)
    }

    function projectStartDate(event: React.ChangeEvent<HTMLInputElement>) {
        setStartDate(event?.target.value)
    }

    function projectTargetEndDate(event: React.ChangeEvent<HTMLInputElement>) {
        setTargetEndDate(event?.target.value)

    }
    function projectTeamMembers(event: React.ChangeEvent<HTMLInputElement>) {
        setTeamMembers(event?.target.value)
    }


    function ProjectCategories(event: { target: { value: SetStateAction<string>; }; }) {
        setetProjectCategory(event?.target.value)
    }
    function createNewProject(event: { preventDefault: () => void; }) {
        event.preventDefault()
        const project = { projectName, description, startDate, targetEndDate, TeamMembers, ProjectCategory }
        console.log("project", project)
        dispatch(addProject(project))
        console.log("dispatch", (project))
        navigate('/Dashboard')
    }

    function cancel(){
        setProjectName('null');
        setDescription("");
        setStartDate("");
        setTargetEndDate("");
        setTeamMembers("");
        setetProjectCategory("");

        const project = { projectName:"", description, startDate, targetEndDate, TeamMembers, ProjectCategory }


    }



    return (
        <div className="relative shadow-xl border-2 rounded-xl w-full md:w-1/2 lg:w-1/3 mx-auto ">

            <h1 className="mr-[40%] text-xl font-semibold  p-7">Create New Project</h1>
            <button className="absolute top-5  text-xl right-9 ">&times;</button>

            <label className="mr-52 text-9xm font-semibold ">Project Name *</label>
            <InputComponent inputType="text" inputOnChange={createProjectName} /><br></br>

            <label className="mr-56 text-9xm font-semibold  ">Description</label>
            <InputComponent inputType="text" inputOnChange={projectDescription} /><br></br>

            <label className="  mr-56 text-9xm font-semibold">Start Date</label>
            <InputComponent inputType="date" inputOnChange={projectStartDate} /><br></br>

            <label className=" mr-48 text-9xm font-semibold">Target End Date</label>
            <InputComponent inputType="date" inputOnChange={projectTargetEndDate} />


            <div className="flex flex-col">
                <label className="  mr-44 text-9xm font-semibold mt-5 ">Project Category</label>
                <select className="border-2 ml-28 p-1 rounded-xl w-[60%] " onChange={ProjectCategories}>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Designing</option>
                    <option>Marketing</option>
                    <option>other</option>
                </select>
            </div>

            <h1 className="mr-28 text-9xm font-semibold mt-5">Team Members (Optional)</h1>
            <InputComponent inputType="text" inputOnChange={projectTeamMembers} />

            <div className="flex justify-center  gap-2 mt-5">
                <ButtonComponent className="bg-gray-600 hover:bg-gray-700 md:mt-5  " name="Cancel" onClick={cancel} />
                <ButtonComponent className="bg-blue-600 hover:bg-blue-700 w-44 md:mt-5  " name="Create New Project" onClick={createNewProject} />


            </div>

        </div>
    )
}
