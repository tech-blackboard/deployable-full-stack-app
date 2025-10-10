import './ProjectView.css';

export default function ProjectView(){
    return(
        <div className="ecom">
            <div className="nav">
                 <h2>← Back to Dashboard</h2>
            <nav>
                <a href='/EditProfile'>Edit Profile</a>
                <a href="/project">sittings</a>  
            </nav>
            </div>
            <h2 className="ecomweb">E-commerce Website</h2>
            <p>Front development project with Rect and Node.js</p><br></br>
            <input style={{width:"82%"}}type="text" placeholder="Search task...."/><br></br><br></br>
            <select style={{width:"84%",borderRadius:"10px",padding:"10px"}}>
                <option>All Task</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Complete</option>
            </select><br></br><br></br>
            <select style={{width:"84%",borderRadius:"10px",padding:"10px"}}>
                <option>All Priority </option>
                <option>High </option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <br></br>
            <button className="addtask">+Add Task</button>
            <br></br><br></br>
            <div className="tasklists">
                <p style={{color:"red"}}>To Do(5)</p>
                <p style={{color:"orange"}}>In Progress</p>
                <p style={{color:"green"}}>Complete(4)</p>
            </div>
            
            <div className="task">
                <div className="tasklist">
                    <h5 style={{color:" rgba(120, 120, 254, 1)" ,fontSize:"20px",fontWeight:"bolder",fontFamily:"Times New Roman"}}>Setup Aythentication</h5>
                    <p ClassName="due">Due: Tomorrow</p>
                    <h6 ClassName="high"> High</h6>

                </div>
                <div className="tasklist"><h5 style={{color:" rgba(120, 120, 254, 1)" ,fontWeight:"bolder",fontSize:"20px",fontFamily:"Times New Roman"}}>API Integration</h5>
                    <p ClassNamed="due">Due: Friday</p>
                    <h6 ClassName="high"> High</h6>
                </div>
                <div className="tasklist">
                     <h5 style={{color:" rgba(120, 120, 254, 1)" ,fontWeight:"bolder",fontSize:"20px",fontFamily:"Times New Roman"}}>ProjectSetUp</h5>
                     <p ClassName="due">Complete: yesterday</p>
                </div>
                
                <div className="tasklist">
                    <h5 style={{color:" rgba(120, 120, 254, 1)" ,fontSize:"20px",fontWeight:"bolder",fontFamily:"Times New Roman"}}>Design Homepage </h5>
                    <p ClassName="due">Due: Next Week</p>
                    <h6 ClassName="high"> Medium</h6>
                </div>
            </div>
        </div>
        )
    }