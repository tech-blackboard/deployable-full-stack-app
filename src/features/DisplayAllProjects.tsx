// src/Components/DisplayProjects.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Tag, ListChecks, BookOpen } from 'lucide-react'; // Import icons
import { useState } from 'react'; // Added useState
import { useParams } from 'react-router-dom'; // Added useParams

// Corrected Interface for clarity
interface ProjectCardProps {
    projectName: string;
    description: string;
    startDate: string;
    targetEndDate: string;
    projectCategory: string;
    teamMembers: string;
    lists?: any[];
}

export default function DisplayAllProjects() {
    // Only hooks necessary for a dashboard/list view are kept
    const navigate = useNavigate();

    // NOTE: If this component is only used to display ALL projects on the dashboard, 
    // the single project logic from the original code (useState, useDispatch, useParams) 
    // is NOT needed here. It was removed.

    // Selector to get ALL projects
    const projectsData = useSelector((state: any) => state.newProject.addProjects) || [];

    // Styling constants for consistency
    const iconStyle = "w-4 h-4 mr-2 text-gray-500";
    const detailStyle = "flex items-center text-sm text-gray-700";
    const labelStyle = "font-semibold text-gray-800 mr-1";

    // If no projects exist, display a message
    if (projectsData.length === 0) {
        return (
            <div className="p-8 text-center bg-white m-6 rounded-xl shadow-lg">
                <p className="text-xl text-gray-500">No projects found. Start by creating a new one!</p>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">📂 All Projects</h1>

            {/* Project Card Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">

                {projectsData.map((project: ProjectCardProps, index: number) => (
                    <div
                        key={index}
                        // Use index as the project ID for navigation
                        onClick={() => navigate(`/Projects/${index}`)}
                        className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-cyan-600 
                                   hover:shadow-2xl hover:scale-[1.02] transition duration-300 cursor-pointer flex flex-col "
                    >
                        {/* Project Name Header */}
                        <div className="flex justify-between items-start mb-3 border-b pb-2 md:w-full">
                            <h2 className="text-xl font-bold text-cyan-800 truncate pr-4">
                                {project.projectName}
                            </h2>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border">
                                ID: {index}
                            </span>
                        </div>

                        {/* Description */}
                        <div className={`${detailStyle} mb-3`}>
                            <BookOpen className={`${iconStyle}`} />
                            <span className="text-sm text-gray-600 line-clamp-2">{project.description || 'No description provided.'}</span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-y-2 mt-auto">

                            {/* Start Date */}
                            <div className={detailStyle}>
                                <Calendar className={`${iconStyle} text-green-600`} />
                                <span className={labelStyle}>Start:</span>
                                <span className="text-xs">{project.startDate}</span>
                            </div>

                            {/* Target End Date */}
                            <div className={detailStyle}>
                                <Clock className={`${iconStyle} text-red-600`} />
                                <span className={labelStyle}>Due:</span>
                                <span className="text-xs">{project.targetEndDate}</span>
                            </div>

                            {/* Project Category */}
                            <div className={detailStyle}>
                                <Tag className={`${iconStyle} text-purple-600`} />
                                <span className={labelStyle}>Category:</span>
                                <span className="text-xs truncate">{project.projectCategory}</span>
                            </div>

                            {/* Team Members (Count or first name) */}
                            <div className={detailStyle}>
                                <Users className={`${iconStyle} text-yellow-600`} />
                                <span className={labelStyle}>Team:</span>
                                <span className="text-xs truncate">{project.teamMembers}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}