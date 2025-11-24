import { useContext, useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
import DisplayProject from "./DisplayProjects";
import { useDispatch, useSelector } from "react-redux";
import { ProjectContext } from "./ProjectContext";
import DevComponent from "./DevComponent";
import SideBarComponent from "./SideBar";
// import projectdatajson from "../jsonDataFiles/projectdata.json";
import data from "../jsonDataFiles/listData.json";
import { addSetProjectData, setProjectData, setLists } from "../reduxStore/CreateNewProjectSlice";
import { AuthContext } from "../context/AuthContext"
// import projectData from "../jsonDataFiles/projectData.json";


interface ProjectContextType {
  projects: any[];
  addProject: (project: any) => void;
}
export default function DashBoard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const projectsData = useSelector((state: any) => state.newProject.projectData);
  // console.log("projectData useselector", projectsData)


  // const myjsondata = fetch("https://jsoneditoronline.org/");
  // console.log("myjsondata", myjsondata)


  //  Access data from context
  const { projects, addProject } = useContext(ProjectContext);
  const { user} = useContext(AuthContext);
console.log("user",user)
  useEffect(() => {
    if (!user) {
      
      navigate("/login");
    }
  }, [user,navigate]);


  const divStyle =
    " w-full md:w-1/2 lg:w-3/4  group border-3 md:mt-8 border-blue-300 bg-blue-100 p-5 md:ml-9 rounded-xl cursor-pointer hover:bg-blue-400 hover:font-semibold hover:text-xl hover:text-white ";
  const divPara =
    "text-blue-500 font-bold mb-5 group-hover:text-white lg:text-xl md:text-xl";

  //  Navigate to new project page
  const projectDatajson = [{
    projectname: "UI Frames",
    description: "UI designing for end users",
    startdate: "11-12-2025",
    targetenddate: "12-11-2025",
    projectcategory: "Designing",
    teammembers: "pooja",
    lists: [{
      listId: 1,
      listname: "to-do list",
      cards: [{
        cardId: 1,
        cardname: "designing",
      }]

    }, {
      listId: 2,
      listname: "progress"
    },
    {
      listId: 3,
      listname: "completed",
      cards: [{
        cardId: 1,
        cardname: "playing",
      },
      {
        cardId: 2,
        cardname: "games",
      },
      {
        cardId: 3,
        cardname: "designing",
      },]
    },
    {
      listId: 4,
      listname: "incompleted"
    },

    ]

  },

  {
    projectname: "web designing",
    description: "desining the webpages",
    startdate: "18-9-2025",
    targetenddate: "13-11-2025",
    projectcategory: "Designing",
    teammembers: "-",
    lists: [{
      listId: 1,
      listname: "completed"
    },],
  }

  ];

  console.log("projectDatajson", projectDatajson)

  const addProjects=[{
    projectname: "",
    description: "",
    startdate: "",
    targetenddate: "",
    projectcategory: "",
    teammembers: "",
    lists:[{
      listId:"",
      listname:"progress"
    },],
  }]

  console.log("addProjects", addProjects);


  const lists=[{
    listId:1,
    listname:"to-do list",
    cards:[{
      cardId:1,
      cardname:"functinality of project"
    }, {
      cardId: 2,
      cardname: "responsive designing"
},
     ]

  },
{
  listId: 2,
  listname: "progress",
  cards:[{
    cardId: 1,
    cardname: "coding (functionality)"
  },{
    cardId: 2,
    cardname: "features"
    }, {
      cardId: 2,
      cardname: "features"
    }]

},

{
  listId: 3,
  listname: "completed",
  cards: [{
    cardId: 1,
    cardname: "design"
  }, {
    cardId: 2,
    cardname: "styling"
    }, {
      cardId: 2,
      cardname: "features"
    }]
  },
    {
      listId: 4,
      listname: "In completed",
      cards: [{
        cardId: 1,
        cardname: "project"
      }, {
        cardId: 2,
        cardname: "designing"
      }, {
        cardId: 2,
        cardname: "functionality"
      }]

},
   
];
  console.log("lists", lists)
 
  function newProject() {
   

    // console.log("dispatchprojectData ", Dispatch)
    // console.log("dispatch projectData  to redux", projectDatajson)
    // const addprojectdispatch = dispatch(addSetProjectData(addProjects))
    // console.log("addprojectdispatch", addprojectdispatch)

    // const dispatchLists = dispatch(setLists(lists));
    // console.log("dispatch Lists ", dispatchLists)

 navigate("/CreateNewProject");
  }

  function nav() {
    navigate("/ProjectView");
  }

  // console.log("projectdatajson", projectdatajson)
  // console.log("data", data)
  // console.log("type of data", typeof (data))
  // const arr = ["John", "Peter", "Sally", "Jane"];
  // console.log("arr", arr)
  // const arfffe = JSON.stringify(arr)
  // console.log("arfffe", arfffe)
  // const myObj = { name: "John", age: 31, city: "New York" };
  // const objectstring = JSON.stringify(myObj)
  // console.log("objectparse", objectstring)

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

      <div className=" lg:bg-blue-600 ">

        <SideBarComponent />
        {/* <HeaderComponent
          Profile="Profile"
          Projects="Projects"
          Analytics="Analytics"
          Logout="Logout"
          className="w-full  px-4 text-base"/> */}
      </div>

      <h3 className="text-xl md:text-base lg:text-2xl font-bold mt-2  text-blue-600 pt-3">
        <h1>Welcome, {user?.username}!👋 </h1>
      </h3>
      <span className="text-gray-400 font-bold mb-9 mr-5 text-base  block">
        Here's what's happening with your project.
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


      <div className="flex flex-col md:flex-row justify-around mt-11 px-4 md:px-0">
        <p className="font-bold text-xl mt-3 mb-2">Recent Projects</p>

        <ButtonComponent
          name="New Project"
          onClick={newProject}
          className="font-bold text-base lg:w-full h-9 pb-4 pt-1 border-none gap- "
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
      {/* <DevComponent heading="well come to UI Designing" para="This is our Platform to prove Our Skills" buttonNames="hello" onClick={nav} buttonName="apply" bg="bg-blue-200 px-9 rounded-xl py-1 gap-7" className="text-xl text-red-500 "/> */}



      {/* {
        projectDatajson.map((list, listId) => <div className="flex flex-col gap-1 justify-center  mb-3" key={listId}>

          <div className="flex flex-row gap-3 ml-44">
        
          
          </div>
     {
            list.lists.map((list, listId) => <div className=" border-2 p-5 w-96  text-start mt-4 mb- flex flex-row   gap-2 ml-52"  key={listId}>

              <span className="">{list.listId}</span>
            
              <span>{list.listname}</span>           
  </div>
             
          )
          } 
    </div>
)
}  */}
    </div>
  );
}
