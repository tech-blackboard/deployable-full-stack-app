import HeaderComponent from './HeaderComponent'
// import './AnalyticsDashboard.css'
import TaskCompletionChart from './TaskCompletionChart'
export default function AnalyticsDashboard() {
    const divStyle = 'group border-3 border-blue-300 mb-2 p-9 bg-blue-100  rounded-xl cursor-pointer'
    //  //hover:bg-blue-400 hover:font-semibold hover:text-xl hover:p-9 hover:text-white ';
    const divPara = "text-xl  text-blue-400  font-bold mb-5 ";
    const parastyle = 'text-gray-500 text-xl  mt-5 font-lighter';
    const hr = '  text-xl text-gray-900  ';
    return (
        <div>

            <div className="flex justify-between  bg-gray-700 w-full  ">
                <h1 className="text-xl text-white ml-9 p-3 font-bold md:text-2xl   ">Analytics Dashboard</h1>

                <HeaderComponent
                    Dashboard="Dashboard"
                    Projects="Projects"
                    ErrorLoadingStates="ErrorLoadingStates"
                    Profile="Profile" className='w-full' />

            </div>
            <p className='text-xl  font-bold pt-9 mr-18 '>Productivity Analytics</p>
            <span className=' text-lg text-gray-400 font-bold ml-9  '>Track your progress & identify areas for improvement</span><br></br><br></br><br></br>
            <div className="flex flex-col md:flex-row flex-wrap  justify-evenly gap-9  ">
                <div className={divStyle}>
                    <span className={divPara}>76%</span>
                    <p className={parastyle}>Completion Rate</p>
                </div>
                <div className={divStyle}>
                    <span className={divPara}>2.3</span>
                    <p className={parastyle}>Avg Tasks/Day</p>
                </div>
                <div className='group border-3 border-blue-300 mb-9 p-6 bg-blue-100  rounded-xl cursor-pointer'>
                    <span className={divPara}>18h</span>
                    <p className={parastyle}>Time  Saved</p>
                </div>
                <div className='group border-3 border-blue-300 mb-9 p-9 bg-blue-100  rounded-xl cursor-pointer' >
                    <span className={divPara}>↑12%</span>
                    <p className={parastyle}>vs Last Month</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-11 mt-9 justify-around  ">
                <div>
                    <TaskCompletionChart />
                </div>
                <div className="border-2 border-white-300 bg-white-100 p-7 shadow-xl rounded-xl">
                    <p className="text-xl font-bold  md:text-2xl">Priority Distribution</p>
                    <table>
                        <tr>
                            <td className=' relative p-3 pr-20  text-xl md:text-2xl'>High Priority</td>
                            <td className='font-bold md:text-2xl' >35%</td>
                        </tr>
                        <div className=" w-[120%]   h-4 ml-4 rounded-xl bg-gray-200 ">
                            <div className="  bg-red-300 w-[35%] border-l-4 border-l-red-300 mr-0 border h-4 rounded-xl"></div>
                        </div>
                        <tr>
                            <td className='p-3 pr-14  text-xl md:text-2xl  md:pt-9'>Medium  Priority</td>
                            <td className='font-bold md:text-2xl'>45%</td>
                        </tr>
                        <div className=" w-[120%]  h-4 ml-4 rounded-xl bg-gray-200   ">
                            <div className=" bg-orange-300 w-[45%]  mr-0 border border-l-4 border-l-orange-300   h-4 rounded-xl"></div>
                        </div>
                        <tr>
                            <td className='p-3 pr-20  text-xl md:text-2xl md:pt-9'>Low Priority</td>
                            <td className='font-bold md:text-2xl'>20%</td>
                        </tr>
                        <div className=" w-[120%]  h-4 ml-4  rounded-xl bg-gray-200  ">
                            <div className="bg-green-300 w-[20%]  border-l-4 border-l-green-300 border h-4 rounded-xl" ></div>
                        </div>
                    </table>
                </div>
            </div>
            <div className="border rounded-xl shadow-xl h-[50%] pb-11 mt-[20%] ml-20 mb-11 w-[170%] font-bold md:w-[94%] md:mt-9">
                <p className="text-2xl mb-9  mt-9 mr-[50%] md:mr-[50%] md:text-3xl " >Recent Activity Log</p>
                <span className="text-2xl  mr-[30%] text-black-400  font-bold mb-3 md:mr-[47%] md:text-2xl"> 🔸 Completed "API Integration"</span><br></br>
                <span className="text-xl text-gray-500  mr-[23%]  text-lighter  mb-5 md:mr-[45%] md:text-xl ">E-commerce Website • 2 hours ago</span>
                <hr className={hr}></hr>
                <span className="text-2xl  mr-[20%] text-black-400  font-bold mb-5 md:mr-[44%] md:text-2xl">▪️ Created new project "Mobile App"</span><br></br>
                <span className="text-xl  text-gray-500  mr-[57%]   mb-5 md:mr-[57%] md:text-xl">5 hours ago</span>
                <hr className={hr}></hr>
                <span className="text-2xl  mr-[24%] text-black-400  font-bold mb-5 md:mr-[46%] md:text-2xl">🔹 Updated "User Authentication"</span><br></br>
                <span className="text-xl  text-gray-500  mr-[24%] md:mr-[47%] md:text-xl   ">E-commerce Website • Yesterday</span>
            </div>
        </div>
    )
}