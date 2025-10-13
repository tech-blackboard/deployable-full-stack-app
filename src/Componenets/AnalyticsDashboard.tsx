import HeaderComponent from './HeaderComponent'
import './AnalyticsDashboard.css'
import TaskCompletionChart from './TaskCompletionChart'
export default function AnalyticsDashboard(){
    return(
        <div>
        
            <div className="UsersNav">
                  <h1>Analytics Dashboard</h1>
                  {/* <nav>
                    <a href="Dashboard">Dashboard</a>
                    <a href="Projects">Projects</a>
                    <a href="Profile">Profile</a>
                    <a href="Logout">Logout</a>
                  </nav> */}

                   {/* through component */}

                  <HeaderComponent 
                  Dashboard="Dashboard" 
                  Projects="Projects" 
                  Analytics="Analytics" 
                  Profile="Profile"/> 
                 
            </div><br></br><br></br><br></br><br></br><br></br>
            <span style={{color:"black",fontSize:"30px" ,fontWeight:"bold",marginRight:"70%"}}>Productivity Analytics</span><br></br>
             <span style={{color:"#ccc",fontSize:"20px",marginRight:"60%"}}>Track your progress and identify areas for improvement</span><br></br><br></br><br></br>
             <div className="fdivs">
                <div className="fdivsStyle">
                    <span className="digitStyling">76%</span>
                    <p id="tasknames">Completion Rate</p>
                </div>
                <div className="fdivsStyle">
                    <span className="digitStyling">2.3</span>
                    <p id="tasknames">Avg Tasks/Day</p>
                </div>
                <div className="fdivsStyle">
                    <span className="digitStyling">18h</span>
                    <p id="tasknames">Time  Saved</p>
                </div>
                <div className="fdivsStyle">
                    <span className="digitStyling">↑12%</span>
                    <p id="tasknames">vs Last Month</p>
                </div>
             </div>
          <div className="graphPriority">
             <div>
                 <TaskCompletionChart />
              </div>
                <div className="PriorityDistribution"> 
                 <p className="prioritypara">Priority Distribution</p>
                 <table>
                    <tr>
                        <td>High Priority</td>
                        <td>35%</td>
                    </tr>
                      <div className="progress-container">
                         <div className="progress-bar" style={{marginLeft:"0%",width:"35%" , backgroundColor:"red"}}></div>
                   </div>
                    <tr>
                        <td>Medium  Priority</td>
                        <td>45%</td>
                    </tr>
                     <div className="progress-container">
                         <div className="progress-bar" style={{marginLeft:"0%",width:"45%" , backgroundColor:"orange"}}></div>
                   </div>
                    <tr>
                        <td>Low Priority</td>
                        <td>20%</td>
                    </tr>
                     <div className="progress-container">
                         <div className="progress-bar" style={{marginLeft:"0%",width:"20%" , backgroundColor:"green"}}></div>
                   </div>
                 </table>
                </div>
    </div>
             <div className="RecentActivityLog">
                <p>Recent Activity Log</p>
                <span id="spanhead"> 🔸 Completed "API Integration"</span><br></br>
                <span id="secondspan">E-commerce Website • 2 hours ago</span>
                <hr></hr>
                <span style={{marginRight:"156px",fontWeight:"bold",fontSize:"20px",marginTop:"90px"}}>▪️ Created new project "Mobile App"</span><br></br>
                <span style={{marginRight:"22%",color:"grey",fontSize:"20px",marginTop:"90px"}}>5 hours ago</span>
                <hr></hr>
                <span  style={{marginRight:"180px",fontWeight:"bold",fontSize:"20px",marginTop:"90px"}}>🔹 Updated "User Authentication"</span><br></br>
                <span style={{marginRight:"10%",color:"grey", fontSize:"20px",marginTop:"90px"}}>E-commerce Website • Yesterday</span>
             </div>
        </div>
    )
}