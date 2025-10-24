// src/Components/DisplayProjects.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

export default function DisplayProjects() {
  const navigate=useNavigate()
  const projects = useSelector((state) => state.newProject.addProjects);

  return (
    <div className="p-6">
     

      {projects.length === 0 ? (
        <p className="text-gray-500 text-center">No projects added yet.</p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg w-full md:1/2 lg:1/3 border-1 border-l-red-500 shadow-md hover:shadow-lg transition-all duration-300"
             onClick={()=>navigate(`/Projects/${index}`)}>
              <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500">Start: {project.startDate}</p>
              <p className="text-sm text-gray-500">End: {project.targetEndDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
