import HeaderComponent from './HeaderComponent';
import SideBarComponent from './sideBarComponent';
import TaskCompletionChart from './TaskCompletionChart';

export default function AnalyticsDashboard() {

    // NOTE: Removed the unused/conflicting const variables (divStyle, divPara, parastyle, hr)
    // and applied clean Tailwind classes directly.
    {/* Define reusable styles for the cards */ }
    const metricCardStyle = 'bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border-b-4 border-cyan-500';
    const metricValueStyle = 'text-2xl text-cyan-600 font-extrabold mb-1';
    const metricLabelStyle = 'text-sm text-gray-500 font-medium';

    return (
        <div className='min-h-screen bg-gray-50'> {/* Light background for the whole page */}

            {/* Sidebar Component */}
            {/* <SideBarComponent
                title="Analytics Dashboard"
                menuItems={[
                    { label: "Dashboard", path: "/dashboard" },
                    { label: "Projects", path: "/projects" },
                    { label: "ErrorLoadingStates", path: "/ErrorLoadingStates" },
                ]}
                classNames={''}
            /> */}
  <div className="flex justify-between bg-cyan-700 px-1 ">
                <h1 className='text-xl text-white font-bold p-4'>Analytics Dashboard</h1>
                <HeaderComponent Dashboard="Dashboard" Projects="Projects" ErrorLoadingStates="ErrorLoadingStates" className='w-full text-white mt-2' />
            </div>

            {/* Main Content Area */}
            <div className=' p-6'> {/* Push content away from the sidebar on large screens */}

                {/* Header/Intro Section */}
                <div className='mt-0-'>
                    <h1 className='text-3xl font-extrabold text-gray-800'>Productivity Analytics</h1>
                    <p className='text-md text-gray-500 mt-1'>Track your progress & identify areas for improvement</p>
                </div>

                {/* 1. Productivity Metrics (Info Cards) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-9">

                
                    <div className={metricCardStyle}>
                        <span className={metricValueStyle}>76%</span>
                        <p className={metricLabelStyle}>Completion Rate</p>
                    </div>

                    <div className={metricCardStyle}>
                        <span className={metricValueStyle}>2.3</span>
                        <p className={metricLabelStyle}>Avg Tasks/Day</p>
                    </div>

                    <div className={metricCardStyle}>
                        <span className={metricValueStyle}>18h</span>
                        <p className={metricLabelStyle}>Time Saved</p>
                    </div>

                    <div className={metricCardStyle}>
                        <span className={metricValueStyle}>↑12%</span>
                        <p className={metricLabelStyle}>vs Last Month</p>
                    </div>
                </div>

                {/* 2. Charts and Distribution */}
                <div className="flex flex-col lg:flex-row  gap-6 mt-8">

                    {/* Task Completion Chart */}
                    {/* Adjusted to take up 2/3 width on large screens */}
                    <div className="lg:w-2/3 p-6  border-gray-100 mt-9">
                        <h2 className="text-xl font-bold   text-gray-800">Task Completion Trend</h2>
                        <TaskCompletionChart />
                    </div>

                    {/* Priority Distribution Bar Chart */}
                    {/* Adjusted to take up 1/3 width on large screens */}
                    <div className="lg:w-1/3 bg-white p-6 shadow-lg rounded-xl border border-gray-100 mt-9">
                        <p className="text-xl font-bold mb-6 text-gray-800">Priority Distribution</p>

                        <div className="space-y-6"> {/* Spacing for priority groups */}

                            {/* High Priority */}
                            <div>
                                <div className='flex justify-between items-baseline mb-1'>
                                    <span className='text-md text-gray-700 font-medium'>High Priority</span>
                                    <span className='font-bold text-lg text-red-500'>35%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-gray-200">
                                    <div className="bg-red-500 w-[35%] h-2 rounded-full"></div>
                                </div>
                            </div>

                            {/* Medium Priority */}
                            <div>
                                <div className='flex justify-between items-baseline mb-1'>
                                    <span className='text-md text-gray-700 font-medium'>Medium Priority</span>
                                    <span className='font-bold text-lg text-orange-500'>45%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-gray-200">
                                    <div className="bg-orange-500 w-[45%] h-2 rounded-full"></div>
                                </div>
                            </div>

                            {/* Low Priority */}
                            <div>
                                <div className='flex justify-between items-baseline mb-1'>
                                    <span className='text-md text-gray-700 font-medium'>Low Priority</span>
                                    <span className='font-bold text-lg text-green-500'>20%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-gray-200">
                                    <div className="bg-green-500 w-[20%] h-2 rounded-full"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. Recent Activity Log */}
                <div className="bg-white p-6 shadow-lg rounded-xl mt-9 mb-2 border border-gray-100">
                    <p className="text-xl font-bold mb-6 text-gray-800">Recent Activity Log</p>

                    <div className='space-y-4'> {/* Vertical spacing for log entries */}

                        {/* Entry 1 */}
                        <div className="pb-3 border-b border-gray-100">
                            <span className="text-lg font-semibold text-gray-800">🔸 Completed "API Integration"</span>
                            <p className="text-sm text-gray-500 mt-1">E-commerce Website • 2 hours ago</p>
                        </div>

                        {/* Entry 2 */}
                        <div className="pb-3 border-b border-gray-100">
                            <span className="text-lg font-semibold text-gray-800">▪️ Created new project "Mobile App"</span>
                            <p className="text-sm text-gray-500 mt-1">5 hours ago</p>
                        </div>

                        {/* Entry 3 (Removed bottom border on last item) */}
                        <div className="pb-3">
                            <span className="text-lg font-semibold text-gray-800">🔹 Updated "User Authentication"</span>
                            <p className="text-sm text-gray-500 mt-1">E-commerce Website • Yesterday</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}