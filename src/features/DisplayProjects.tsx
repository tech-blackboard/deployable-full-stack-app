// src/Components/DisplayProjects.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Tag, ListChecks } from 'lucide-react'; // Import icons

// Interface remains the same (though ProjectCategory and TeamMembers need case correction based on usage)
interface DisplayProjectsProps {
  projectName: string;
  description: string;
  startDate: string;
  targetEndDate: string;
  projectCategory: string; // Adjusted casing to match project object access
  teamMembers: string;    // Adjusted casing to match project object access
  lists?: any[]; // Include lists if they are part of the state structure
}

export default function DisplayProjects() {
  const navigate = useNavigate();
  const projects = useSelector((state: any) => state.newProject.addProjects);
  console.log("projects", projects);

  // Styling constants
  const cardBaseStyle = `
        relative p-5 rounded-xl bg-white shadow-lg 
        hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]
        cursor-pointer overflow-hidden
    `;
  const accentLineStyle = "absolute top-0 left-0  h-full w-1 bg-cyan-500 rounded-xl ";
  const titleStyle = "text-xl font-bold text-slate-800 mb-2 truncate";
  const metaTextStyle = "flex items-center text-sm font-medium text-gray-600 mb-1";

  return (
    <div className="p-0">

      {projects.length === 0 ? (
        <div className="flex justify-center items-center h-40 bg-white/50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg font-medium">
            👋 Start your productivity journey! No projects added yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {projects.map((project: DisplayProjectsProps, id: number) => (
            <div
              key={id}
              className={cardBaseStyle}
              onClick={() => navigate(`/Projects/${id}`)}
            >
              {/* Accent Line */}
              <div className={accentLineStyle}></div>

              <div className='pl-3'>
                {/* Project Title */}
                <h2 className={titleStyle}>{project.projectName}</h2>

                {/* Project Description (Truncated) */}
                <p className="text-gray-500 mb-4 line-clamp-2 text-sm">{project.description}</p>

                <hr className="mb-3 border-gray-100" />

                {/* Project Metadata */}

                {/* Start Date */}
                <p className={metaTextStyle}>
                  <Calendar className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  {/* here  flex-shrink-0 is tells to broweser when container is decrease size in thta time tect overflow so we put overflow - hidden then we can put flex-shrink-0  class where ever you want protect element. that element does change there style .if you text multiple lines in that time cont
                  container overflow happens so in that tike we can put that text element going to flex-shrink in that time every line come next line .*/}
                  <span className='font-semibold text-slate-700'>Start:</span> {project.startDate}
                </p>

                {/* Target End Date */}
                <p className={metaTextStyle}>
                  <Clock className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  <span className='font-semibold text-slate-700'>Due:</span> {project.targetEndDate}
                </p>

                {/* Category */}
                <p className={metaTextStyle}>
                  <Tag className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" />
                  <span className='font-semibold text-slate-700'>Category:</span> {project.projectCategory}
                </p>

                {/* Team Members */}
                <p className={metaTextStyle}>
                  <Users className="w-4 h-4 mr-2 text-yellow-600 flex-shrink-0" />
                  <span className='font-semibold text-slate-700'>Team:</span> {project.teamMembers}
                </p>

                {/* Total Lists/Tasks count (if available) */}
                {project.lists && (
                  <p className={metaTextStyle}>
                    <ListChecks className="w-4 h-4 mr-2 text-cyan-500 flex-shrink-0" />
                    <span className='font-semibold text-slate-700'>Total Lists:</span> {project.lists.length}
                  </p>
                )}
              </div>

              {/* // ------------------------------------------------------------------
                            // LOGIC HIDDEN FOR DASHBOARD OVERVIEW (KEEPING CLEAN)
                            // Uncomment this block if you need to see nested lists/cards on the dashboard.
                            // ------------------------------------------------------------------
                            {
                                project.lists?.map((list, listId: number) => (
                                    <div key={listId} className='mt-2 border-t pt-2'>
                                        <p className="text-xs text-purple-500 mb-1"><span className='font-semibold'>List: </span> {list.listname} (ID: {list.listId})</p>
                                        {
                                            list.cards?.map((card, cardId: number) => (
                                                <div key={cardId} className='ml-2'>
                                                    <p className="text-xs text-gray-400">Card: {card.cardname}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                            */}

            </div>
          ))}
        </div>
      )}
    </div>
  );
}