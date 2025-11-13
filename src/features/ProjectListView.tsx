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
    // const projects = useSelector((state: any) => state.newProject.addProjects);

    const projectsData = useSelector((state: any) => state.newProject.projectData);
      console.log("projectData useselector from projectview ", projectsData)
    
    const projectIndex = Number(id)
    console.log("projectIndex project listview", projectsData)
    console.log("projects from redux", projectsData);
    if (isNaN(projectIndex) || !projectsData || projectIndex < 0 || projectIndex >= projectsData.length) {
        return <p className="text-red-500 text-center mt-9">Project not found</p>
    }
    const project = projectsData[projectIndex]
    console.log("project", project);
    if (!project) {
        <p>project not fount</p>
    }

    // const projectIndex = Number(id)
    // console.log("projectIndex project listview", projectIndex)
    // console.log("projects from redux", projects);
    // if (isNaN(projectIndex) || !projects || projectIndex < 0 || projectIndex >= projects.length) {
    //     return <p className="text-red-500 text-center mt-9">Project not found</p>
    // }
    // const project=projects[projectIndex]
    // console.log("project",project);
    // if(!project){
    //     <p>project not fount</p>
    // }
  
    return(
        // <div className=" flex flex-col border rounded-xl shadow  text-start md:ml-11   md:pl-9 text-xl  md:w-1/2  lg:w-1/3 px-11 mt-9 p-3 border-1 mr-5  border-l-4 border-l-[#1E40AF] border-gray-200   rounded-xl shadow-xl cursor-pointer hover:font-semibold mb-4 ml-4  bg-gradient-to-bl from-blue-300 to-blue-200 " onClick={() => navigate(`/editTask/${projectIndex}`)}>
        //     <span className="text-gray-700 text-base "><span className="text-[#1E3A8A] text-base font-semibold text-base">project name:</span>  {project.projectName}</span>  
        //     <span className="text-gray-600 text-base "><span className="text-[#1E3A8A] font-semibold text-base ">description:</span>  {project.description}</span>
        //     <span className="text-gray-600  text-base"><span className="text-[#1E3A9A] font-semibold text-base">start date:</span> {project.startDate}</span>
        //     <span className="text-gray-600 text-base"><span className="text-[#1E3A8A] font-semibold text-base"> Target end date:</span>  {project.targetEndDate}</span>
        //     <span className="text-gray-600 text-base"><span className="text-[#1E3A8A] font-semibold text-base">project category: </span> {project.ProjectCategory}</span>
        //     <span className="text-gray-600 text-base"><span className="text-[#1E3A8A] font-semibold text-base">Team members:</span>{project.TeamMembers}</span>

        // </div>
        <div className=" flex flex-col border rounded-xl shadow  text-start md:ml-11   md:pl-9 text-xl  md:w-1/2  lg:w-1/3 px-11 mt-9 p-3 border-1 mr-5  border-l-4 border-l-[#1E40AF] border-gray-200   rounded-xl shadow-xl cursor-pointer hover:font-semibold mb-4 ml-4  bg-gradient-to-bl from-blue-300 to-blue-200 " onClick={() => navigate(`/editTask/${projectIndex}`)}>
            <span className="text-gray-700 text-base "><span className="text-[#1E3A8A] text-base font-semibold text-base">project name:</span>  {project.projectname}</span>
            <span className="text-gray-600 text-base "><span className="text-[#1E3A8A] font-semibold text-base ">description:</span>  {project.description}</span>
            <span className="text-gray-600  text-base"><span className="text-[#1E3A9A] font-semibold text-base">start date:</span> {project.startdate}</span>
            <span className="text-gray-600 text-base"><span className="text-[#1E3A8A] font-semibold text-base"> Target end date:</span>  {project.targetenddate}</span>
            <span className="text-gray-600 text-base"><span className="text-[#1E3A8A] font-semibold text-base">project category: </span> {project.projectcategory}</span>
            <span className="text-gray-600 text-base"><span className="text-[#1E3A8A] font-semibold text-base">Team members:</span>{project.Teammembers}</span>

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
      





