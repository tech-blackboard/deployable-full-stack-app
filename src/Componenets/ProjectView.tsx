import './ProjectView.css';
import { Search } from 'lucide-react';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import {useNavigate} from 'react-router-dom';

export default function ProjectView() {
    const divStylepara = "text-gray-500 mr-[4px] text-2xl  md:text-xl"
    const high = "text-white ml-[30%] border w-11 text-xl  rounded-xl mt-1 bg-orange-400 w-28  md:mt-3";
    const divStyle = `group border  border-l-4 border-l-red-400 border-gray-300 bg-white-300  p-8 rounded-xl shadow-xl cursor-pointer hover:bg-white-600 hover:font-semibold mb-9 `
    const navigate=useNavigate()
    function backToDashborad(){
        navigate('/Dashboard')
    }
    return (
        <div>
            <div className="flex justify-between  bg-gray-700 content-around w-full">
                <button  className='text-2xl text-white p-3  pt-5 font-bold md:text-2xl'onClick={backToDashborad}> ← Back to Dashboard</button>

                <HeaderComponent EditTask="EditTask" sittings="sittings" className='w-full px-5 mr-4 mb-2' />

            </div>
            <h2 className=" text-xl pt-4 font-bold  md:text-2xl lg:text-2xl">Task Management Website</h2>
            <span className="text-xl  text-gray-400 font-bold   md:text-2xl lg:text-lg  ">Frontend development project with React </span><br></br>
            {/* Search Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                <div className="  relative mt-2  ml-9">
                    <Search className="absolute right-40 top-1 my-12   text-xl translate-y-1/ text-gray-400 w-5 h-5  " />
                    <InputComponent
                        inputType="text"
                        placeholder="Search task...."
                        className=" w-full  text-xl  border border-gray-300 px-2 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1 w-full md:w-1/2 lg:w-1/3 mt-9"
                    />
                </div>
                <div>


                    <select className=' items-center mt-9 border py-2 w-full md:w-1/2 lg:w-1/3 border-gray-300 rounded-xl  text-xl  ' >
                        <option>All Task</option>
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Complete</option>
                    </select> </div>
                <div>
                    <select className=' mt-9 p-2 border border-gray-300 rounded-xl w-full md:w-1/2 lg:w-1/3 text-xl '   >
                        <option>All Priority </option>
                        <option>High </option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select></div>
            </div>
            <ButtonComponent className=" px-2 py-2 my-9 bg-blue-600 hover:bg-blue-700 text-xl" name="+ Add Task" />
            <div className="flex flex-col md:flex-row  justify-evenly   ">
                <p className='text-red-600 font-semibold p-9'>To Do(5)</p>
                <p className='text-orange-600 font-semibold p-9'>In Progress</p>
                <p className='text-green-600 font-semibold p-9'>Complete(4)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-9 gap-9 mb-9">
                <div className={divStyle}>
                    <h5 className="text-blue-500 font-semibold text-2xl group-hover:text-blue-700">Setup Aythentication</h5>
                    <p className="text-gray-500 text-2xl">Due: Tomorrow</p>
                    <h6 className={high}> High</h6>

                </div>
                <div className={divStyle}>
                    <h5 className="text-blue-500 font-semibold text-2xl group-hover:text-blue-700">API Integration</h5>
                    <p className={divStylepara}>Due: Friday</p>
                    <h6 className={high}> High</h6>
                </div>
                <div className={divStyle}>
                    <h5 className="text-blue-500 font-semibold text-2xl group-hover:text-blue-700">ProjectSetUp</h5>
                    <p className="text-gray-500 text-2xl md:text-xl">Complete: yesterday</p>
                </div>

                <div className="group border border-l-4 border-l-orange-400 border-gray-300 bg-white-300  p-8 rounded-xl shadow-xl cursor-pointer hover:bg-white-600 hover:font-semibold  ">
                    <h5 className="text-blue-500  font-semibold text-xl group-hover:text-blue-700">Design Homepage </h5>
                    <p className={divStylepara}>Due: Next Week</p>
                    <h6 className="text-white  w-28 ml-[28%] border rounded-xl mt-2 bg-red-500 text-xl  md:mt-3"> Medium</h6>
                </div>
                 <div>
                    
                 </div>
            </div>
        </div>
    )
}//<button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
//   Save Changes
// </button>