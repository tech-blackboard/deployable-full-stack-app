// src/Components/DisplayProjects.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

interface DisplayProjectsProps{
  projectName:string;
  description:string;
  startDate:string;
  targetEndDate:string;
  ProjectCategory:string;
  TeamMembers:string;

}
export default function DisplayProjects() {
  const navigate=useNavigate()
  const projects = useSelector((state:any) => state.newProject.addProjects);
  console.log("projects", projects)

  const projectsData = useSelector((state: any) => state.newProject.projectData);
  console.log("projectData useselector", projectsData)


  return (
    <div className="p-6">
     


      {projectsData.length === 0 ? (
        <p className="text-gray-500 text-center">No projects added yet.</p>
      ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  text-start ml-11 items-start">
            {/* //items-start it can adjust the size according to content.*/}
          {projectsData.map((project, id: number) => (
            <div key={id}
              className="border  p-3 rounded-md w-full md:w-1/2 lg:w-11/12 border-l-2 border-gray-200 border-1 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300 
            "
              onClick={() => navigate(`/Projects/${id}`)}>
              <div className='md:ml-4 '>
                <h2 className="text-xl font-semibold mb-2">{project.projectname}</h2>
                <p className="text-blue-700 mb-1  "><span className='font-semibold'>Description: </span> {project.description}</p>
                <p className="text-sm text-green-500 mb-1"><span className='font-semibold'>Start: </span> {project.startdate}</p>
                <p className="text-sm text-red-500 mb-1"><span className='font-semibold'>End: </span> {project.targetenddate}</p>
                <p className="text-sm text-violet-500 mb-1"><span className='font-semibold'>Project Category: </span> {project.projectcategory}</p>
                <p className="text-sm text-yellow-500 mb-1"><span className='font-semibold'>TeamMembers: </span>{project.teammembers}</p>
               

              </div>
              {
                project.lists?.map((list, listId: number) => <div key={listId}>
                  <p className="text-sm text-red-500 mb-1"><span className='font-semibold'>list id: </span> {list.listId}</p>

                  <p className="text-sm text-purple-500 mb-1"><span className='font-semibold text-blue-500 '>listname: </span> {list.listname}</p>
                  {
                    list.cards?.map((card, cardId: number) => <div key={cardId}>
                      <p className="text-sm text-red-500 mb-1"><span className='font-semibold'>card id: </span> {card.cardId}</p>

                      <p className="text-sm text-purple-500 mb-1"><span className='font-semibold text-blue-500 '>cardname: </span> {card.cardname}</p>

                    </div>)

                  }

                </div>

                )

              }
            </div>

          ))}
        </div>
      )}
    </div>
  );}

//       {projects.length === 0 ? (
//         <p className="text-gray-500 text-center">No projects added yet.</p>
//       ) : (
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  text-start ml-11">
//           {projects.map((project:DisplayProjectsProps, index: number) => (
//             <div  key={index}
//               className="border  p-3 rounded-md w-full md:w-1/2 lg:w-11/12 border-l-2 border-gray-200 border-1 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
//               onClick={()=>navigate(`/Projects/${index}`)}    >
//               <div className='md:ml-4 '>
//               <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
//                 <p className="text-blue-700 mb-1  "><span className='font-semibold'>Description: </span> {project.description}</p>
//                 <p className="text-sm text-green-500 mb-1"><span className='font-semibold'>Start: </span> {project.startDate}</p>
//                 <p className="text-sm text-red-500 mb-1"><span className='font-semibold'>End: </span> {project.targetEndDate}</p>
//                 <p className="text-sm text-violet-500 mb-1"><span className='font-semibold'>Project Category: </span> {project.ProjectCategory}</p>
//                 <p className="text-sm text-yellow-500 mb-1"><span className='font-semibold'>TeamMembers: </span>{project.TeamMembers}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
