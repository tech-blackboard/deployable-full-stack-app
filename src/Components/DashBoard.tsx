// import './Dashboard.css';
import { UserContext } from './UserContext'
import { useContext, useState } from 'react'
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import DisplayProject from './DisplayProjects';
import ProjectView from './ProjectView';
import { useDispatch, useSelector } from 'react-redux';
import { addProjectCount } from '../projects/CreateNewProjectSlice';
// import ButtonComponent from './ButtonComponent'
export default function DashBoard() {
      const Dispatch=useDispatch()

    const [countProject,setCountProject]=useState("")
      const projects = useSelector((state) => state.newProject.addProjects);
      const count = useSelector((state) => state.newProject.addProjects);
            console.log("count",count)

   console.log("projects",projects)
    const user = useContext(UserContext);
        const counts = useContext(UserContext);

    const divStyle = 'group border-3 border-blue-300 bg-blue-100 p-9  rounded-xl cursor-pointer  hover:bg-blue-400 hover:font-semibold hover:text-xl hover:p-9 hover:text-white ';
    const divPara = "  text-blue-500  font-bold mb-5   group-hover:text-white md:text-2xl"
    // const projects = "mt-9 border-2 rounded-xl w-full shadow-xm p-9 "
        const navigate = useNavigate()


    function newProject(){
        navigate('/CreateNewProject')
    }

    

//  function countProjects(){
//             const count = useSelector((state) => state.newProject.addProjects);
//             console.log("count",count)
//             const Dispatch=useDispatch()
//             console.log("Dispatch",Dispatch)
//     }
    return (

        <div>
            <div className="flex flex-wrap justify-between px-3 py-2  bg-gray-800 w-full ">
                <h2 className='text-2xl text-white  font-bold md:text-2xl pt-5 px-9'>TaskManager</h2>
                {/* <nav className='flex flex-end gap-8 mr-44 p-3 '>
                <a className="rounded-xl bg-gray-500 p-2 text-white" href='/DashBoard'>DashBoard</a>
                <a href="/project">Projects</a>
                <a href="Profile">Profile</a>
                <a href="Logout">Logout</a>
            </nav> */}
                <HeaderComponent
                    Profile="Profile"
                    Projects="Projects"
                    Analytics="Analytics"
                    Logout="logout"
                    className='w-full px-4 text-xl' />
            </div>

            <h3 className=" text-xl md:text-2xl lg:text-3xl  font-bold mt-3 sm-text-3xl text-blue-600 pt-5 ">Welcome back, {user}!👋</h3>
            <span className=" text-gray-400 font-bold mb-9 text-left ">Here's What's happening with your project </span>

            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-9 mt-9">

                <div className={divStyle}>
                    <p className={divPara}>{count}</p>Active Projects</div>

                <div className={divStyle}>
                    <p className={divPara}>23</p>Total Tasks</div>

                <div className={divStyle}>
                    <p className={divPara}>8</p>Completed</div>

                <div className={divStyle}>
                    <p className={divPara}>3</p>Overdue</div>

            </div>
            <div className="flex  flex-col md:flex-row justify-around   mt-11">
                <p className="font-bold text-xl mt-3">Recent Projects</p>
                <ButtonComponent name="New Project " onClick={newProject} className="font-bold text-lg w-full " />
                            <button onClick={()=>Dispatch(addProjectCount())}>increment</button>

            </div>
          <DisplayProject/>

            {/* <div className={projects}>
                <h4 className="font-bold text-xl  md:text-2xl">Mobile App Redesign</h4>
                <p className="text-gray-600" >8 tasks • 6 completed</p>
                <div className="progress-containers">
                    <div className="bg-gray-200 w-full h-3  mt-3 border-2 rounded-xl ml-4  "></div>
                </div>
            </div> */}
         
               

        </div>
    )
}


