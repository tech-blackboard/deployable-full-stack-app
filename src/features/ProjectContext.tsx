import { createContext, useEffect, useState, type ReactNode } from "react";
import { useSelector } from "react-redux";

 interface ProjectProviderPropes {
  children:ReactNode, 

//   React doesn’t know what will be passed as children.That’s why we type it as ReactNode.
// ReactNode covers everything renderable in JSX: strings, numbers, elements, fragments, arrays, null, etc.
};

interface ProjectContextType {
  projects: any[];
  addProject: (project: any) => void;
}

//  Create Context
export const ProjectContext = createContext<ProjectContextType|null>(null);

export default function ProjectProvider({ children }:ProjectProviderPropes) {
    const project = useSelector((state:any) => state.newProject.addProjects);
    const [projects, setProjects] = useState<any[]>([]);

    // Sync context with redux
    useEffect(() => {
        if (project) {
            setProjects(project);
        }
    }, [project]);
// [project]
// Only run effect when project changes

    //  Add new project dynamically
    const addProject = (newProject:any) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };
    

    return (
        <ProjectContext.Provider value={{ projects, addProject }}>
            {children} {/* This renders the nested components  like <Dashbord/>    which are in side the projectContext.provider in app that components are renderd */}
        </ProjectContext.Provider>
    );
}
