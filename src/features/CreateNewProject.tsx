import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useState, useEffect, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, setProjectData } from '../reduxStore/CreateNewProjectSlice';
import DisplayProjects from './DisplayProjects';
import { toast } from 'react-toastify';
import createProject from '../api/project.api';
// import './CreateNewProject.css';

interface CreateNewProjectProps {
    projectName: string;
    description: string;
    startDate: string;
    targetEndDate: string;
    ProjectCategory: string;
    TeamMembers: string;

}
export default function CreateNewProjects() {
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [targetEndDate, setTargetEndDate] = useState("");
    const [ProjectCategory, setetProjectCategory] = useState("");
    const [TeamMembers, setTeamMembers] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    function ProjectCategories(event: { target: { value: SetStateAction<string>; }; }) {
        setetProjectCategory(event?.target.value)
    }
    function projectTeamMembers(event: React.ChangeEvent<HTMLInputElement>) {
        setTeamMembers(event?.target.value)
    }
   
    async function createNewProject(event: { preventDefault: () => void; }) {
        event.preventDefault()
        // const project: CreateNewProjectProps = { projectName, description, startDate, targetEndDate, TeamMembers, ProjectCategory }
        // console.log("project", project)
        // dispatch(addProject(project))
        // console.log("dispatch", (project))
        // navigate('/Dashboard')

        if (!projectName || !description || !startDate || !targetEndDate || !ProjectCategory || !TeamMembers ){
         toast.error("please fill all fields");
         return
        }
        try{
            const res = await createProject(projectName, description, startDate, targetEndDate, ProjectCategory, TeamMembers,)
            console.log("res",res.data)
            console.log("res", res.data.projectId)

            // const project: CreateNewProjectProps = { projectName, description, startDate, targetEndDate, TeamMembers, ProjectCategory }
            // console.log("project", project)
           const project= dispatch(addProject(res.data))
            console.log("setProjectData = ", setProjectData)
            console.log("setProjectData dispatch", (project))
            toast.success("Project created successfully!");
            navigate("/Dashboard"); // redirect to project list onClick={() => navigate(`/Projects/${id}`)}
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Failed to create project");
        }

    }

    // function cancel(){
    // setFormData({ projectName:'', description:"", startDate:"", targetEndDate:"", TeamMembers:"", ProjectCategory:"" })
    // }
    function closeButton() {

        navigate('/')
    }

    return (
        <div className="relative shadow-xl border-2 rounded-xl w-full md:w-1/2 lg:w-1/3 mx-auto mt-3 mb-9">

            <form>
                <div className="flex flex-row md:px-0 px-9 md:justify-between px-11">
                    <h1 className="text-left text-xl font-semibold font-sans md:px-0 md:ml-14 p-7 ">Create New Project</h1>
                    <button className="absolute top-5  right-9 text-4xl transition-transform duration-100 hover:rotate-90 " onClick={closeButton}>&times;</button>

                </div>
               
                <div className="flex flex-col mb-3 px-9 md:px-0">
                    {/* <label className="text-base text-left md:ml-[17%] font-sans  font-semibold">Project Name *</label> */}
                    <InputComponent inputType="text" placeholder="  project name " inputValue={projectName} inputOnChange={createProjectName} />
                </div>

                <div className="flex flex-col mb-3 px-9 md:px-0 ">
                    {/* <label className="text-base text-left md:ml-[17%] font-sans font-semibold ">Description</label> */}
                    <InputComponent inputType="text" placeholder='  description' inputOnChange={projectDescription} />
                </div>

                <div className="flex flex-col mb-3 px-9 md:px-0">
                    {/* <label className=" text-base text-left md:ml-[17%] font-sans font-semibold text-gray-600 ">Start Date</label> */}
                    <InputComponent inputType={startDate ? "date" : "text"} inputValue={startDate} inputOnChange={projectStartDate} onFocus={(e: { target: { value: string; }; }) => e.target.value ="startDate"} 
                        onBlur={(e: { target: { value: string; }; })=>{if (!e.target.value ) e.target.value="text"}}
                        placeholder="  enter your project start date.."/>
                </div>

                <div className="flex flex-col mb-3 px-9 md:px-0">
                    {/* <label className=" text-base text-left md:ml-[17%] font-sans font-semibold ">Target End Date</label> */}
                    <InputComponent inputOnChange={projectTargetEndDate} inputType={targetEndDate ? "date" : "text"} inputValue={targetEndDate}  onFocus={(e: { target: { value: string; }; }) => e.target.value = "targetEndDate"}
                        onBlur={(e: { target: { value: string; }; }) => { if (!e.target.value) e.target.value = "text" }}
                        placeholder="   project target end date.."/>
                </div>

                <div className="flex flex-col mb-3 px-9 md:px-0"> 
                    {/* <label className=" text-base font-semibold text-left md:ml-[17%] font-sans ">Project Category</label> */}
                    <select className="border  p-1 rounded-md w-full md:w-1/2 lg:w-2/3 mx-auto text-base  " onChange={ProjectCategories}>
                        <option value="-" disabled selected>---select project category--- </option>
                        <option value="Web Development">Web Development</option>
                        <option>Mobile App</option>
                        <option>Designing</option>
                        <option>Marketing</option>
                        <option>other</option>
                    </select>
                </div>
                <div className="flex flex-col mb-3 px-9 md:px-0">
                    {/* <h1 className="text-base text-left md:ml-[17%] font-sans font-semibold ">Team Members </h1> */}
                    <InputComponent inputType="text" inputOnChange={projectTeamMembers} placeholder='  Team Members ' />
                </div>

                <div className="flex flex-col md:flex-row justify-center  md:gap-9   mb-3  px-11 md:px-0">
                    <ButtonComponent className="bg-blue-600 hover:bg-blue-700 w-44 md:mt-3 w-full h-9 pb-9 " name="Create New Project" onClick={createNewProject} />
                    <ButtonComponent className="bg-gray-500 hover:bg-gray-600 md:mt-3 w-full h-9 pb-9" name="Cancel" />

                </div>
            </form>

            
        </div>
    )
}
