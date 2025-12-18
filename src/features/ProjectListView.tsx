import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProjectCards } from "../reduxStore/CreateNewProjectSlice";
import DisplayProjects from "./DisplayProjects";
import { BookOpen, Calendar, Clock, Tag, Users } from 'lucide-react'; // Import Icons

export default function ProjectListView(){
    const [addProjectCard,setaddProjectCard]=useState('')
    const Dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    
    const projectsData = useSelector((state: any) => state.newProject.addProjects);

    const projectIndex = Number(id)
    
    // Safety check for project existence
    if (isNaN(projectIndex) || !projectsData || projectIndex < 0 || projectIndex >= projectsData.length) {
        return <p className="text-red-500 text-center mt-9 p-4 bg-white rounded-lg shadow-md">Project not found</p>
    }
    
    const project = projectsData[projectIndex]
    
    // Double check if project object is valid
    if (!project) {
        return <p className="text-red-500 text-center mt-9 p-4 bg-white rounded-lg shadow-md">Project data is missing</p>
    }

    // Styling constants for consistency
    const detailItemStyle = "flex items-center text-sm text-gray-700 leading-relaxed";
    const iconStyle = "w-4 h-4 mr-2 flex-shrink-0";
    const labelStyle = "font-semibold text-gray-900";

    return(
        <div className="p-4 md:p-6">
            <div 
                className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-cyan-600 transition duration-300 hover:shadow-2xl max-w-6xl mx-auto" 
                onClick={() => navigate(`/editTask/${projectIndex}`)}
            >
                <div className="flex justify-between items-center mb-4 border-b pb-3">
                    <h2 className="text-2xl font-lato text-cyan-700">
                        {project.projectName}
                    </h2>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full ">
                        ID: {projectIndex}
                    </span>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                    
                    {/* Description */}
                    <div className={`${detailItemStyle} md:col-span-2 lg:col-span-3`}>
                        <BookOpen className={`${iconStyle} text-blue-500`} />
                        <span className={labelStyle}>Description:</span>
                        <span className="ml-2 text-gray-600">{project.description}</span>
                    </div>

                    {/* Start Date */}
                    <div className={detailItemStyle}>
                        <Calendar className={`${iconStyle} text-green-600`} />
                        <span className={labelStyle}>Start Date:</span>
                        <span className="ml-2">{project.startDate}</span>
                    </div>

                    {/* Target End Date */}
                    <div className={detailItemStyle}>
                        <Clock className={`${iconStyle} text-red-600`} />
                        <span className={labelStyle}>Target End Date:</span>
                        <span className="ml-2">{project.targetEndDate}</span>
                    </div>

                    {/* Project Category */}
                    <div className={detailItemStyle}>
                        <Tag className={`${iconStyle} text-purple-600`} />
                        <span className={labelStyle}>Category:</span>
                        <span className="ml-2">{project.projectCategory}</span>
                    </div>

                    {/* Team Members */}
                    <div className={detailItemStyle}>
                        <Users className={`${iconStyle} text-yellow-600`} />
                        <span className={labelStyle}>Team Members:</span>
                        <span className="ml-2">{project.teamMembers}</span>
                    </div>

                </div>
            </div>    
        </div>
    )
}