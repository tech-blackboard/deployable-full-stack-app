import { useContext, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
import DisplayProject from "./DisplayProjects";
import { useDispatch } from "react-redux";
import { ProjectContext } from "./ProjectContext";

interface ProjectContextType {
  projects: any[];
  addProject: (project: any) => void;
}
export default function DashBoard() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Access data from context
  const { projects, addProject } = useContext(ProjectContext);

  const divStyle =
    "group border-3 border-blue-300 bg-blue-100 p-9 rounded-xl cursor-pointer hover:bg-blue-400 hover:font-semibold hover:text-xl hover:p-9 hover:text-white";
  const divPara =
    "text-blue-500 font-bold mb-5 group-hover:text-white md:text-2xl";

  //  Navigate to new project page
  function newProject() {
    navigate("/CreateNewProject");
  }

  // Add new project dynamically
//   function handleAddProject() {
//     const newProject = {
//       id: Date.now(),
//       name: `Project ${projects.length + 0}`,
//     };
//     addProject(newProject);
//     console.log("New Project Added:", newProject);
//   }

   
  return (
    <div>
      <div className="flex flex-wrap justify-between px-3 py-2 bg-gray-800 w-full">
        <h2 className="text-2xl text-white font-bold md:text-2xl pt-5 px-9">
          TaskManager
        </h2>

        <HeaderComponent
          Profile="Profile"
          Projects="Projects"
          Analytics="Analytics"
          Logout="Logout"
          className="w-full px-4 text-xl" HomePage={""}        />
      </div>

      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-3 text-blue-600 pt-5">
        Welcome back, user! 👋
      </h3>
      <span className="text-gray-400 font-bold mb-9  block">
        Here's what's happening with your project
      </span>

      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-9 mt-9">
        <div className={divStyle}>
          <p className={divPara}>{projects.length}</p>Active Projects
        </div>

        <div className={divStyle}>
          <p className={divPara}>{projects.length}</p>Total Tasks
        </div>

        <div className={divStyle}>
          <p className={divPara}>8</p>Completed
        </div>

        <div className={divStyle}>
          <p className={divPara}>3</p>Overdue
        </div>
      </div>

  
      <div className="flex flex-col md:flex-row justify-around mt-11">
        <p className="font-bold text-xl mt-3">Recent Projects</p>

        <ButtonComponent
          name="New Project"
          onClick={newProject}
          className="font-bold text-lg w-full"
        />

        {/* <button
          onClick={handleAddProject}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold"
        >
          + Add Project
        </button> */}
      </div>

      {/* Display project list */}
      <DisplayProject />
    </div>
  );
}
