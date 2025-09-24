// import { Link } from "react-router-dom";
import './Dashboard.css';

export default function DashBoard(){
    return(
        <div id="main">
            <div id="nav">
                 <h2>TaskManager</h2>
            <nav>
                <a href='/DashBoard'>DashBoard</a>
                <a href="/project">Projects</a>
                <a href="Profile">Profile</a>
                <a href="Logout">Logout</a>
            </nav>

            </div>
         
                <h3>Welcome back, Pooja!👋</h3>
                <p id="headp">Here's What's happening with your project </p>
             <div id="body">
                
                <div><p style={{color:" rgba(120, 120, 254, 1)" ,fontSize:"20px",fontWeight:"bolder",fontFamily:"Times New Roman"}}>5</p>Active Projects</div>
                
                <div><p style={{color:" rgba(120, 120, 254, 1)" ,fontWeight:"bolder",fontSize:"20px",fontFamily:"Times New Roman"}}>23</p>Total Tasks</div>
                
                <div> <p style={{color:" rgba(120, 120, 254, 1)" ,fontWeight:"bolder",fontSize:"20px",fontFamily:"Times New Roman"}}>8</p>Completed</div>
                
                <div><p style={{color:" rgba(120, 120, 254, 1)" ,fontSize:"20px",fontWeight:"bolder",fontFamily:"Times New Roman"}}>3</p>Overdue</div>
                
            </div>
            <div className="recentp">
                <p id="recept">Recent Projects</p>
                <button id="newp">New Project</button>
            </div>
            <div id="web">
             <h4>E-commerce Website</h4>
             <p>12 tasks • 3 completed</p>
             <div id="progress-container">
               <div id="progress-bar"  ></div>
             </div>
            </div>
            <div id="web">
             <h4>Mobile App Redesign</h4>
             <p>8 tasks • 6 completed</p>
             <div id="progress-container">
               <div id="progress-bar"></div>
             </div>
            </div>
        </div>
    )
}