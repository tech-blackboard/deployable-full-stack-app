import './ProjectView.css';

export default function ProjectView() {

    return (
        <div>
            <h1> hello {user}</h1>
            <div className="nav">
                <h2>← Back to Dashboard</h2>
                <nav>
                    <a href='/EditProfile'>Edit Profile</a>
                    <a href="/project">sittings</a>
                </nav>
            </div>
            <h2 className="Taskmanagement">Task Management Website</h2>
            <p id="p">Front development project with Rect and Node.js</p><br></br>
            <input style={{ width: "78%", marginLeft: "10px" }} type="text" placeholder="Search task...." /><br></br><br></br>
            <select style={{ width: "80%", borderRadius: "10px", margin: "10px", marginLeft: "30px" }}>
                <option>All Task</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Complete</option>
            </select><br></br><br></br>
            <select style={{ width: "80%", borderRadius: "10px", margin: "10px", marginLeft: "30px" }}>
                <option>All Priority </option>
                <option>High </option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <br></br>
            <button className="addtask">+Add Task</button>
            <br></br><br></br>
            <div className="tasklisting">
                <p style={{ color: "red" }}>To Do(5)</p>
                <p style={{ color: "orange" }}>In Progress</p>
                <p style={{ color: "green" }}>Complete(4)</p>
            </div>

            <div className="task">
                <div className="tasklists">
                    <h5 style={{ color: " rgba(120, 120, 254, 1)", fontSize: "20px", fontWeight: "bolder", fontFamily: "Times New Roman", marginRight: "0%" }}>Setup Aythentication</h5>
                    <p id="due">Due: Tomorrow</p>
                    <h6 className="high"> High</h6>

                </div>
                <div className="tasklists"><h5 style={{ color: " rgba(120, 120, 254, 1)", marginRight: "0%", fontWeight: "bolder", fontSize: "20px", fontFamily: "Times New Roman" }}>API Integration</h5>
                    <p id="due">Due: Friday</p>
                    <h6 className="high"> High</h6>
                </div>
                <div className="tasklists">
                    <h5 style={{ color: " rgba(120, 120, 254, 1)", fontWeight: "bolder", marginRight: "0%", fontSize: "20px", fontFamily: "Times New Roman" }}>ProjectSetUp</h5>
                    <p id="due">Complete: yesterday</p>
                </div>

                <div className="tasklists">
                    <h5 style={{ color: " rgba(120, 120, 254, 1)", fontSize: "20px", marginRight: "0%", fontWeight: "bolder", fontFamily: "Times New Roman" }}>Design Homepage </h5>
                    <p id="due">Due: Next Week</p>
                    <h6 className="high"> Medium</h6>
                </div>
            </div>
        </div>
    )
}