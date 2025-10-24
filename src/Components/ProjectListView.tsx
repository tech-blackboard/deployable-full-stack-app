import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProjectListView(){
    const {id}=useParams()
   const projects = useSelector((state) => state.newProject.addProjects);
   console.log("projects",projects);
   const projectIndex=Number(id)
   console.log("projectIndex",projectIndex)

   const project=projects[projectIndex]
      console.log("project",project)

    return(
        <div className=" flex flex-col border rounded-xl shadow w-full  text-xl mb-9 md:w-2/3  lg:w-1/3 mt-9 p-9  border  border-l-4 border-l-red-400 border-gray-300 bg-white-300  p-8 rounded-xl shadow-xl cursor-pointer hover:bg-white-600 hover:font-semibold mb-9 ml-11 ">
             {/* <span className="text-blue-800 font-bold ">ProjectName:  {project.projectName}</span>  */}
             <span className="text-gray-800 text-lg ml-11">Description: {project.description}</span>
             <span className="text-green-800 mr-7 ">Start Date: {project.startDate}</span>
             <span className="text-red-800 ml-5 ">Target End Date: {project.targetEndDate}</span>
             
        </div>





    )
}