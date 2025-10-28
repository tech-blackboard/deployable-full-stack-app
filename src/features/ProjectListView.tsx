import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProjectCards } from "../reduxStore/CreateNewProjectSlice";

export default function ProjectListView(){
    const [addProjectCard,setaddProjectCard]=useState('')
const Dispatch=useDispatch()
const navigate=useNavigate()
    const {id}=useParams()
    // console.log("useParams id value =>", id);
    const projects = useSelector((state: any) => state.newProject.addProjects);
    const projectIndex = Number(id)
    console.log("projectIndex project listview", projectIndex)
    console.log("projects from redux", projects);
    if (isNaN(projectIndex) || !projects || projectIndex < 0 || projectIndex >= projects.length) {
        return <p className="text-red-500 text-center mt-9">Project not found</p>
    }
    const project=projects[projectIndex]
    console.log("project",project);
    if(!project){
        <p>nproject not fount</p>
    }
  
    return(
        <div className=" flex flex-col border rounded-xl shadow w-full  text-xl mb-9 md:w-2/3  lg:w-1/3 mt-9 p-9  border  border-l-4 border-l-red-400 border-gray-300 bg-white-300  p-8 rounded-xl shadow-xl cursor-pointer hover:bg-white-600 hover:font-semibold mb-9 ml-11 " onClick={() => navigate(`/editTask/${projectIndex}`)}>
            <span className="text-blue-800 font-bold ">ProjectName:  {project.projectName}</span>  
           <span className="text-gray-800 text-lg ml-11">Description: {project.description}</span>
           <span className="text-green-800 mr-7 ">Start Date: {project.startDate}</span>
           <span className="text-red-800 ml-5 ">Target End Date: {project.targetEndDate}</span>
        </div>
    )}

            // <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            // {projects.map((project: any, index: number) => (
            //         <div
            //         key={index}
            //             className="border border-l-4 border-l-blue-500 bg-white p-5 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition duration-200 cursor-pointer"
            //             onClick={() => navigate(`/editTask/${index}`)} 
            //         >
            //             <h3 className="text-xl font-semibold text-blue-600">{project.projectName}</h3>
            //             <p className="text-gray-500 mt-2">{project.description}</p>
            //             <p className="text-sm text-gray-400 mt-1">
            //                 Start: {project.startDate} | Due: {project.targetEndDate}
            //             </p>
            //         <p className="text-sm text-gray-400 mt-1">
            //             ProjectCategories: {project.ProjectCategory}
            //         </p>
            //         <p className="text-sm text-gray-400 mt-1">
            //             TeamMembers:{project.TeamMembers}
            //         </p>

            //         </div>
            //     ))} //   this map is we can display the all cards which are in dash borad.
            // </div>
      





