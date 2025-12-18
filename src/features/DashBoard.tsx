// import { useContext, useEffect, useState } from "react";
// import ButtonComponent from "./ButtonComponent";
// import { useNavigate } from "react-router-dom";
// import DisplayProject from "./DisplayProjects";
// import { useDispatch } from "react-redux";
// import { ProjectContext } from "./ProjectContext";
// import { AuthContext } from "../context/AuthContext"
// import SideBarComponent from "./sideBarComponent";
// // All other imports remain the same

// // Define SIDEBAR_WIDTH for layout calculation
// const SIDEBAR_WIDTH = "64"; // Equivalent to w-64 in Tailwind CSS (16rem / 256px)

// export default function DashBoard() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Access data from context
//   const { projects, addProject } = useContext(ProjectContext);
//   const { user} = useContext(AuthContext);

//   useEffect(() => {
//     if (!user) {
//       navigate("/Login");
//     }
//   }, [user, navigate]);


//   // 💡 NEW STYLES: Minimalist Productivity Theme (Teal/Cyan Accent)
//   const metricCardStyle = "p-6 rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 ease-in-out hover:shadow-lg cursor-pointer";
//   const textMetricValue = "text-4xl font-extrabold text-cyan-600 mb-1 tracking-tight";
//   const textMetricLabel = "text-sm font-medium text-gray-500 uppercase";

//   // Placeholder data for demonstration (your existing data structure)
//   const projectDatajson = [
//     /* ... (existing projectDatajson) ... */
//   ];
//   const lists = [
//     /* ... (existing lists) ... */
//   ];

//   function newProject() {
//     // Logic remains functional
//     navigate("/CreateNewProject");
//   }

//   function nav() {
//     // Logic remains functional
//     navigate("/ProjectView");
//   }

//   // Placeholder calculations (must be based on your application's actual data structure)
//   const totalTasks = projects.length * 5; // Example calculation
//   const completedTasks = Math.floor(projects.length / 2);
//   const overdueTasks = 1;
  
//   return (
//     // Main Container: Full height, flex for sidebar and main content
//     <div className="min-h-screen flex bg-gray-50"> 

//       {/* 1. Sidebar - Dark for High Contrast */}
//       <div className={`w-${SIDEBAR_WIDTH} flex-shrink-0`}> 
//         <SideBarComponent
//           title="TaskFlow"
//           menuItems={[
//             { label: "Projects", path: "/Projects" },
//             { label: "Analytics", path: "/Analytics" },
//           ]}
//           // Using a deep slate/gray for a modern, contrasting sidebar
//           classNames="h-full bg-slate-800 text-white shadow-2xl" 
//         />
//       </div>
      
//       {/* 2. Main Content Area - Light Background */}
//       <main className={`flex-grow p-4 md:p-8 lg:p-10 transition-all overflow-y-auto`}>
        
//         {/* Welcome Header */}
//         <header className="mb-10">
//           <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 pt-3">
//             Hello, {user?.username || 'User'}! 
//           </h1>
//           <p className="text-base text-gray-500 font-normal mt-1">
//             Focus on what matters. Here's your project overview.
//           </p>
//         </header>


//         {/* Metrics Cards Grid - Clean, Bordered Style */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* Active Projects (Teal Accent) */}
//           <div className={`${metricCardStyle}`}>
//             <p className={textMetricValue}>{projects.length}</p>
//             <p className={textMetricLabel}>Active Projects</p>
//           </div>

//           {/* Total Tasks (Gray/Neutral) */}
//           <div className={`${metricCardStyle}`}>
//             <p className={`text-4xl font-extrabold text-slate-700 mb-1 tracking-tight`}>{totalTasks}</p>
//             <p className={textMetricLabel}>Total Tasks</p>
//           </div>

//           {/* Completed Tasks (Green for Success) */}
//           <div className={`${metricCardStyle}`}>
//             <p className={`text-4xl font-extrabold text-emerald-600 mb-1 tracking-tight`}>{completedTasks}</p>
//             <p className={textMetricLabel}>Completed</p>
//           </div>

//           {/* Overdue (Red for Alert) */}
//           <div className={`${metricCardStyle}`}>
//             <p className={`text-4xl font-extrabold text-red-600 mb-1 tracking-tight`}>{overdueTasks}</p>
//             <p className={textMetricLabel}>Overdue</p>
//           </div>
//         </div>
        
//         <hr className="my-10 border-gray-100" />

//         {/* Recent Projects Section Header & Button */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//           <p className="font-extrabold text-2xl text-slate-800 mb-4 md:mb-0">
//             Recent Workspaces
//           </p>
          
//           <ButtonComponent
//             name="+ New Project"
//             onClick={newProject}
//             buttonType={"button"}
//             // New Button Style: Teal/Cyan Primary Color
//             className="w-full md:w-auto flex justify-center py-2 px-6 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150"
//           />
//         </div>

//         {/* Display project list */}
//         <DisplayProject />
        
//       </main>
//     </div>
//   );
// }



import { useContext, useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
import DisplayProject from "./DisplayProjects";
import { useDispatch } from "react-redux";
import { ProjectContext } from "./ProjectContext";
import { AuthContext } from "../context/AuthContext"
import SideBarComponent from "./sideBarComponent";
// All other imports remain the same

// Define SIDEBAR_WIDTH for layout calculation
// const SIDEBAR_WIDTH = "11"; // Equivalent to w-64 in Tailwind CSS (16rem / 256px)
// const SIDEBAR_HEIGHT = "9"; // Equivalent to w-64 in Tailwind CSS (16rem / 256px)

export default function DashBoard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access data from context
  const { projects, addProject } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  }, [user, navigate]);


  // 💡 NEW STYLES: Minimalist Productivity Theme (Teal/Cyan Accent)
  const metricCardStyle = "p-6 rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 ease-in-out hover:shadow-lg cursor-pointer";
  const textMetricValue = "text-3xl font-extrabold text-cyan-600 mb-1 tracking-tight";
  const textMetricLabel = "text-sm font-lato text-gray-500 uppercase";

  // Placeholder data for demonstration (your existing data structure)
  const projectDatajson = [
    /* ... (existing projectDatajson) ... */
  ];
  const lists = [
    /* ... (existing lists) ... */
  ];

  function newProject() {
    // Logic remains functional
    navigate("/CreateNewProject");
  }

  function nav() {
    // Logic remains functional
    navigate("/ProjectView");
  }

  // Placeholder calculations (must be based on your application's actual data structure)
  const totalTasks = projects.length * 5; // Example calculation
  const completedTasks = Math.floor(projects.length / 2);
  const overdueTasks = 1;

  return (
    // Main Container: Full height, flex for sidebar and main content
   <div className="lg:h-screen  lg:flex lg:bg-gray-50  ">

      {/* 1. Sidebar - Dark for High Contrast */}
      <SideBarComponent
        title="TaskFlow"
        menuItems={[
          { label: "Projects", path: "/Projects" },
          { label: "Analytics", path: "/Analytics" },
        ]}
        // Using a deep slate/gray for a modern, contrasting sidebar
        classNames=" bg text-white shadow-2xl lg:flex lg:flex-row lg:flex-between ml-9"
      />

      {/* 2. Main Content Area - Light Background */}
      <main className={`flex-grow p-4 md:p-8 lg:p-10 transition-all overflow-y-auto`}>

        {/* Welcome Header */}
        <header className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-cyan-700 pt-3 mr-11">
            Hello, {user?.username || 'User'}!
          </h1>
          <p className="text-base text-cyan-800 font-normal mt-1 mr-9">
            Focus on what matters. Here's your project overview.
          </p>
        </header>


        {/* Metrics Cards Grid - Clean, Bordered Style */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Active Projects (Teal Accent) */}
          <div className={`${metricCardStyle}`}>
            <p className={textMetricValue}>{projects.length}</p>
            <p className={textMetricLabel}>Active Projects</p>
          </div>

          {/* Total Tasks (Gray/Neutral) */}
          <div className={`${metricCardStyle}`}>
            <p className={`text-3xl font-extrabold text-slate-700 mb-1 tracking-tight`}>{totalTasks}</p>
            <p className={textMetricLabel}>Total Tasks</p>
          </div>

          {/* Completed Tasks (Green for Success) */}
          <div className={`${metricCardStyle}`}>
            <p className={`text-3xl font-extrabold text-emerald-600 mb-1 tracking-tight`}>{completedTasks}</p>
            <p className={textMetricLabel}>Completed</p>
          </div>

          {/* Overdue (Red for Alert) */}
          <div className={`${metricCardStyle}`}>
            <p className={`text-3xl font-extrabold text-red-600 mb-1 tracking-tight`}>{overdueTasks}</p>
            <p className={textMetricLabel}>Overdue</p>
          </div>
        </div>

        <hr className="my-10 border-gray-100" />

        {/* Recent Projects Section Header & Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="font-bold text-2xl text-slate-800 mb-4 md:mb-0">
            Recent Workspaces
          </p>

          <ButtonComponent
            name="+ New Project"
            onClick={newProject}
            buttonType={"button"}
            // New Button Style: Teal/Cyan Primary Color
            className="w-full md:w-auto flex justify-center h-9 py-1 px-6 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150"
          />
        </div>

        {/* Display project list */}
        <DisplayProject />

      </main>
    </div>
  );
}