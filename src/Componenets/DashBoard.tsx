import './Dashboard.css';
import { UserContext } from './UserContext'
import { useContext } from 'react'
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
export default function DashBoard() {
    const user = useContext(UserContext);
    const divStyle = 'group border-3 border-blue-300 bg-blue-100 p-5 rounded-xl cursor-pointer hover:bg-blue-400 hover:font-semibold hover:text-xl hover:p-9 hover:text-white ';
    const divPara = "text-3xl  text-blue-400  font-bold mb-5   group-hover:text-white"
    const projectlist = "mt-9 border-2 rounded-xl w-[90%] ml-20 shadow-xm p-9 m-3"
    return (
        <div>
            <div className="flex justify-between  bg-gray-700 content-around">
                <h2 className='text-2xl text-white ml-4   p-3  font-bold'>TaskManager</h2>
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
            </div>

            <h3 className=" text-2xl font-bold mt-3 mr-[70%]  ">Welcome back, {user}!👋</h3>
            <span className="text-2xs  text-gray-400 font-bold mt-3 mr-[67%]  ">Here's What's happening with your project </span>

            <div className="flex justify-evenly mt-9 ">

                <div className={divStyle}>
                    <p className={divPara}>5</p>Active Projects</div>

                <div className={divStyle}>
                    <p className={divPara}>23</p>Total Tasks</div>

                <div className={divStyle}>
                    <p className={divPara}>8</p>Completed</div>

                <div className={divStyle}>
                    <p className={divPara}>3</p>Overdue</div>

            </div>
            <div className="flex justify-around mt-20">
                <p className="font-bold text-2xl ">Recent Projects</p>
                <ButtonComponent name="New Project" />
            </div>
            <div className={projectlist}>
                <h4 className="font-bold text-xl mr-[75%]">Task Management Website</h4>
                <span className="text-gray-600 mr-[82%]">12 tasks • 3 completed</span>
                <div className="progress-containers">
                    <div className="bg-gray-200 w-[95%] mt-3 border-2 rounded-xl ml-9 h-[10px]"  ></div>
                </div>
            </div>

            <div className={projectlist}>
                <h4 className="font-bold text-xl mr-[78%]">Mobile App Redesign</h4>
                <p className="text-gray-600 mr-[82%]" >8 tasks • 6 completed</p>
                <div className="progress-containers">
                    <div className="bg-gray-200 w-[95%] mt-3 border-2 rounded-xl ml-9 h-[10px]"></div>
                </div>
            </div>
        </div>
    )
}