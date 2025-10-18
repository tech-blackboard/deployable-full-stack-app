import './ProjectView.css';
import { Search } from 'lucide-react';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent'

export default function ProjectView() {
    const divStylepara = "text-gray-500 mr-[4px] text-xl"
    const high = "text-white mr-[80%] border w-11   rounded-xl mt-1 bg-orange-400  ";
    const divStyle = `group border  border-l-4 border-l-red-400 border-gray-300 bg-white-300  p-8 rounded-xl shadow-xl cursor-pointer hover:bg-white-600 hover:font-semibold mb-9 w-[60%] pr-11 ml-11`
    return (
        <div>
            <div className="flex justify-between  bg-gray-700 content-around w-[138%]">
                <h2 className='text-2xl text-white mr-28   p-3  font-bold'> ← Back to Dashboard</h2>

                <HeaderComponent EditProfile="Edit Profile" sittings="sittings" />

            </div>
            <h2 className=" text-2xl font-bold mt-3 mr-9 ">Task Management Website</h2>
            <span className="text-2xs  text-gray-400 font-bold mt-3 ml-9 ">Front development project with Rect and Node.js</span><br></br>
            {/* Search Bar */}
            <div className="flex justify-evenly ">
                <div className="  relative mt-8  ml-9 ">
                    <Search className="absolute right-0 top-5   text-xl translate-y-1/ text-gray-400 w-5 h-5 " />
                    <InputComponent
                        inputType="text"
                        placeholder="Search task...."
                        className="pl-10 w-[290%]  text-xl  border border-gray-300 ml-[30%] py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                    />
                </div>
                <div>


                    <select className=' mt-9 border w-[105%] p-2 ml-32  border-gray-300 rounded-xl  text-xl'>
                        <option>All Task</option>
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Complete</option>
                    </select> </div>
                <div>
                    <select className=' mt-9 border border-gray-300 rounded-xl p-2 w-[60%] mb-9 ml-44 text-xl' >
                        <option>All Priority </option>
                        <option>High </option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select></div>
            </div>
            <ButtonComponent className=" mt-3 ml-44 bg-blue-600 hover:bg-blue-700 text-xl" name="+ Add Task" />
            <br></br><br></br>
            <div className="flex justify-between mb-9 pl-44  ">
                <p className='text-red-600 font-semibold '>To Do(5)</p>
                <p className='text-orange-600 font-semibold'>In Progress</p>
                <p className='text-green-600 font-semibold'>Complete(4)</p>
            </div>

            <div className="flex flex-wrap justify-around ">
                <div className={divStyle}>
                    <h5 className="text-blue-500 font-semibold text-2xl group-hover:text-blue-700">Setup Aythentication</h5>
                    <p className="text-gray-500 mr-[80px] text-xl">Due: Tomorrow</p>
                    <h6 className={high}> High</h6>

                </div>
                <div className={divStyle}>
                    <h5 className="text-blue-500 font-semibold text-2xl group-hover:text-blue-700">API Integration</h5>
                    <p className={divStylepara}>Due: Friday</p>
                    <h6 className={high}> High</h6>
                </div>
                <div className={divStyle}>
                    <h5 className="text-blue-500 font-semibold text-2xl group-hover:text-blue-700">ProjectSetUp</h5>
                    <p className="text-gray-500 text-xl">Complete: yesterday</p>
                </div>

                <div className="group border border-l-4 border-l-orange-400 border-gray-300 bg-white-300  p-8 rounded-xl shadow-xl cursor-pointer hover:bg-white-600 hover:font-semibold">
                    <h5 className="text-blue-500  font-semibold text-xl group-hover:text-blue-700">Design Homepage </h5>
                    <p className={divStylepara}>Due: Next Week</p>
                    <h6 className="text-white mr-[60%]  border rounded-xl mt-1 bg-red-500 "> Medium</h6>
                </div>

            </div>
        </div>
    )
}//<button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
//   Save Changes
// </button>