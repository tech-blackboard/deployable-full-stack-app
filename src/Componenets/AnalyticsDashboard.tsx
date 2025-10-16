import HeaderComponent from './HeaderComponent'
import './AnalyticsDashboard.css'
import TaskCompletionChart from './TaskCompletionChart'
export default function AnalyticsDashboard() {
    const divStyle = 'group border-3 border-blue-300 mb-9 bg-blue-100 p-5 rounded-xl cursor-pointer'
    //  //hover:bg-blue-400 hover:font-semibold hover:text-xl hover:p-9 hover:text-white ';
    const divPara = "text-3xl  text-blue-400  font-bold mb-5 ";
    const parastyle = 'text-gray-500 mt-5 font-lighter';
    const hr = 'w-[80%] ml-44 mt-4 mb-3 text-2xl text-gray-900 ';
    return (
        <div>

            <div className="flex justify-between  bg-gray-700 content-around">
                <h1 className="text-2xl text-white ml-9   p-3  font-bold">Analytics Dashboard</h1>

                <HeaderComponent
                    Dashboard="Dashboard"
                    Projects="Projects"
                    Analytics="Analytics"
                    Profile="Profile" />

            </div>
            <p className='text-2xl mr-[75%] font-bold pt-9'>Productivity Analytics</p>
            <span className=' text-xm text-gray-400 font-bold mr-[64%]'>Track your progress and identify areas for improvement</span><br></br><br></br><br></br>
            <div className="flex justify-evenly mt-9 ">
                <div className={divStyle}>
                    <span className={divPara}>76%</span>
                    <p className={parastyle}>Completion Rate</p>
                </div>
                <div className={divStyle}>
                    <span className={divPara}>2.3</span>
                    <p className={parastyle}>Avg Tasks/Day</p>
                </div>
                <div className={divStyle}>
                    <span className={divPara}>18h</span>
                    <p className={parastyle}>Time  Saved</p>
                </div>
                <div className={divStyle} >
                    <span className={divPara}>↑12%</span>
                    <p className={parastyle}>vs Last Month</p>
                </div>
            </div>
            <div className="flex justify-around mr-9 mt-9 mb-[17%]">
                <div>
                    <TaskCompletionChart />
                </div>
                <div className="border-3 border-white-300 bg-white-100 p-9 shadow-xl rounded-xl">
                    <p className="text-xl font-bold mt-2">Priority Distribution</p>
                    <table>
                        <tr>
                            <td className=' relative p-1 pr-20  text-2xm'>High Priority</td>
                            <td className='font-bold'>35%</td>
                        </tr>
                        <div className=" w-[120%]   border h-2  rounded-xl bg-gray-200 ">
                            <div className="  bg-red-300 w-[35%] border-l-4 border-l-red-300 mr-0 border h-2 rounded-xl"></div>
                        </div>
                        <tr>
                            <td className='p-1 pr-14  text-2xm'>Medium  Priority</td>
                            <td className='font-bold'>45%</td>
                        </tr>
                        <div className=" w-[120%]   border h-2 0 rounded-xl bg-gray-200   ">
                            <div className=" bg-orange-300 w-[45%]  mr-0 border border-l-4 border-l-orange-300   h-2 rounded-xl"></div>
                        </div>
                        <tr>
                            <td className='p-1 pr-20  text-2xm'>Low Priority</td>
                            <td className='font-bold'>20%</td>
                        </tr>
                        <div className=" w-[120%]  border h-2  rounded-xl bg-gray-200  ">
                            <div className="bg-green-300 w-[20%]  border-l-4 border-l-green-300 border h-2 rounded-xl" ></div>
                        </div>
                    </table>
                </div>
            </div>
            <div className="border rounded-xl shadow-xl h-[50%] pb-5 ml-20 mb-9 w-[90%] font-bold ">
                <p className="text-xl mb-9  mt-9 mr-[60%]" >Recent Activity Log</p>
                <span className="text-xl  mr-[50%] text-black-400  font-bold mb-3 "> 🔸 Completed "API Integration"</span><br></br>
                <span className="text-xm text-gray-500  mr-[48%]  text-lighter  mb-5 ">E-commerce Website • 2 hours ago</span>
                <hr className={hr}></hr>
                <span className="text-xl  mr-[46%] text-black-400  font-bold mb-5 ">▪️ Created new project "Mobile App"</span><br></br>
                <span className="text-xm  text-gray-500  mr-[61%]   mb-5 ">5 hours ago</span>
                <hr className={hr}></hr>
                <span className="text-xl  mr-[48%] text-black-400  font-bold mb-5 ">🔹 Updated "User Authentication"</span><br></br>
                <span className="text-xm  text-gray-500  mr-[49%]    ">E-commerce Website • Yesterday</span>
            </div>
        </div>
    )
}