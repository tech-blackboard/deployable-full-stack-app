// import './EditTask.css';
import { useContext, useState } from 'react';
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'
import {ProjectContext} from './ProjectContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cancelProject, updateProject } from '../reduxStore/CreateNewProjectSlice';
import { deleteProject }  from  '../reduxStore/CreateNewProjectSlice';
export default function EditTask() {
    const navigate=useNavigate()
    const { id } = useParams()
    const dispatch=useDispatch()
// const { projects, addProject } = useContext(ProjectContext);
     const newProjects=useSelector((state:any)=>state.newProject.addProjects);
    console.log("newProjects", newProjects)

    const projectIndex = Number(id)
    // console.log("projectIndex", projectIndex)
    const projects = newProjects[projectIndex]
    // console.log("project", projects);

    const [taskTitle, setTaskTitle] = useState(projects.projectName);
    const [Description, setDescription] = useState(projects.description);
    const [startDate, setstartDate] = useState(projects.startDate);
    const [DueDate, setDueDate] = useState(projects.targetEndDate);
    // console.log("newProjects  Before deleted ", newProjects)


    function taskTitles(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(event?.target.value)
    }

    function taskDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event?.target.value)
    }

    function taskstartDate(event: React.ChangeEvent<HTMLInputElement>) {
        setstartDate(event?.target.value)
    }
    function tasktargetEndDate(event: React.ChangeEvent<HTMLInputElement>) {
        setDueDate(event?.target.value)
    }
    function editTask(){
        const updatedProjects={
            projectName: taskTitle,
            description:Description,
            startDate:startDate,
            targetEndDate:DueDate,
        }
    
        console.log("updatedProjects", updatedProjects)
        dispatch(updateProject({ index: projectIndex, updatedProjects }));
        console.log("updateProject in redux ", updatedProjects)
     
        navigate(`/Projects/${projectIndex}`);

        
    }
   
    function deleteproject(){
        console.log("projectIndex ", projectIndex)
        dispatch(deleteProject((projectIndex)))
        console.log("deleted projectIndex ", projectIndex)
        navigate('/');

    }

    function cancelproject() {
       
            setTaskTitle(" ");
            setDescription(" ");
            setstartDate("");
            setDueDate("");
            
      
    }

    function closeButton(){
      navigate('/Dashboard')

    }

    return (
        <div className="relative shadow-xl border-2 rounded-xl mx-auto pb-2  w-full md:w-1/2  lg:w-1/3">
            <h3 className="text-xl font-semibold  mt-11 mr-56  mb-3">Edit Task</h3>
            <button className="absolute top-[13px]  text-xl right-[30px]  " onClick={closeButton}>&times;</button>
            <label className=" text-9xm font-semibold mr-56 mb-5">Task Title</label><br></br>
            <InputComponent inputType="text" inputValue={taskTitle} inputOnChange={taskTitles}/><br></br>
            <label className="mr-56 text-9xm font-semibold mb-5">Description</label><br></br>
            <InputComponent className="border-2 mb-4 px-5 md:w-1/2 lg:w-1/3" inputValue={Description} inputOnChange={taskDescription} />

            <div className="flex justify-center gap-10 mb-5">
                <div>
                    <label className="text-9xm font-semibold mb-9">Priority</label>
                    <select className="border-2">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>

                </div >
                <div>
                    <label className=" text-9xm font-semibold mb-5">Status</label>
                    <select className="border-2 ">
                        <option>To-do</option>
                        <option>In Prograss</option>
                        <option>Complete</option>
                    </select>
                </div>
            </div >
            <label className="mr-60 text-9xm font-semibold mb-5" >start Date</label><br></br>
            <InputComponent inputType="date" inputValue={startDate} inputOnChange={taskstartDate} /><br></br>
            <label className="mr-60 text-9xm font-semibold mb-5" >Due Date</label><br></br>
            <InputComponent inputType="date" inputValue={DueDate} inputOnChange={tasktargetEndDate}  /><br></br>
            <label className="mr-64 text-9xm font-semibold mb-5" >Tags</label><br></br>
            <InputComponent inputType="text"  />

            <div className='flex  gap-7 justify-center mt-9 '>
                <ButtonComponent className="bg-gray-600 hover:bg-gray-700  w-full " name="Cancel" onClick={cancelproject} />
                <ButtonComponent className="bg-red-600 hover:bg-red-700  w-full  " name="Delete" onClick={deleteproject}/>
                <ButtonComponent className="bg-blue-600 hover:bg-blue-700    w-full " name="Save Changes" onClick={editTask }/>
            </div>
        </div >
    )
}

function Dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
