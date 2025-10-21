import './Dashboard.css';
import { UserContext } from './UserContext'
import { useContext } from 'react'
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
export default function DashBoard() {
    const user = useContext(UserContext);
    const divStyle = 'group border-3 border-blue-300 bg-blue-100 p-11 rounded-xl cursor-pointer w-[299%] mb-9 md:w-[30%] hover:bg-blue-400 hover:font-semibold hover:text-xl hover:p-9 hover:text-white ';
    const divPara = "text-5xl  text-blue-400  font-bold mb-5   group-hover:text-white md:text-4xl"
    const projects = "mt-9 border-2 rounded-xl w-[190%] ml-20 shadow-xm p-9 m-3 md:w-[90%] md:mb-9"
    return (

        <div >
            <head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
            <div className="flex justify-between  bg-gray-700 w-[220%] md:w-[100%]">
                <h2 className='text-2xl text-white ml-4  mt-4 p-3  font-bold md:text-4xl'>TaskManager</h2>
                {/* <nav className='flex flex-end gap-8 mr-44 p-3 '>
                <a className="rounded-xl bg-gray-500 p-2 text-white" href='/DashBoard'>DashBoard</a>
                <a href="/project">Projects</a>
                <a href="Profile">Profile</a>
                <a href="Logout">Logout</a>
            </nav> */}
                <HeaderComponent
                    Dashboard="Dashboard"
                    Projects="Projects"
                    Analytics="Analytics"
                    Profile="Profile" />

                {/* <HeaderComponent
                    Dashboard="Dashboard"
                    Projects="Projects"
                    Analytics="Analytics7
                    Profile="Profile" /> */}
            </div>

            <h3 className=" text-2xl font-bold mt-3 sm-text-3xl text-blue-600  ml-11 md:text-4xl md:mr-[70%] md:mt-9 md:text-blue-600 ">Welcome back, {user}!👋</h3>
            <span className="text-2xs  text-gray-400 font-bold mt-3 ml-9  md:text-xl md:mr-[70%]">Here's What's happening with your project </span>

            <div className=" flex justify-between mt-11  ml-11  gap-11 md:mr-9 ">

                <div className={divStyle}>
                    <p className={divPara}>5</p>Active Projects</div>

                <div className={divStyle}>
                    <p className={divPara}>23</p>Total Tasks</div>

                <div className={divStyle}>
                    <p className={divPara}>8</p>Completed</div>

                <div className={divStyle}>
                    <p className={divPara}>3</p>Overdue</div>

            </div>
            <div className="flex justify-between mt-20 gap-72 ml-44">
                <p className="font-bold text-2xl md:text-3xl">Recent Projects</p>
                <ButtonComponent name="New Project " className="font-bold text-2xl w-44 md:mr-28" />
            </div>
            <div className={projects}>
                <h4 className="font-bold text-xl mr-[54%] md:mr-[74%] md:text-2xl" >Task Management Website</h4>
                <span className="text-gray-600 mr-[67%] md:mr-[83%]">12 tasks • 3 completed</span>
                <div className="progress-containers">
                    <div className="bg-gray-200 w-[95%] mt-3 border-2 rounded-xl ml-4 h-[10px] md:ml-11"  ></div>
                </div>
            </div>

            <div className={projects}>
                <h4 className="font-bold text-xl mr-[61%]  md:mr-[77%]  md:text-2xl">Mobile App Redesign</h4>
                <p className="text-gray-600 mr-[67%]   md:mr-[83%]" >8 tasks • 6 completed</p>
                <div className="progress-containers">
                    <div className="bg-gray-200 w-[95%] mt-3 border-2 rounded-xl ml-4  h-[10px] md:ml-11  "></div>
                </div>
            </div>

        </div>
    )
}