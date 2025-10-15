import './TaskListView.css';

export default function TaskListView() {
    return (
        <div className="ecomweb">
            <div className="ecomnav">
                <h2>← E-commerce Wedsite</h2>
                <nav>
                    <a href='/Listview'>List View</a>
                    <a href="/Boardview">Board View</a>
                </nav>
            </div>
            <br></br><br></br>
            <input style={{ width: "80%", marginTop: "60px" }} type="text" placeholder="auth" /><br></br><br></br>
            <select style={{ width: "82%", borderRadius: "10px", padding: "9px" }}>
                <option>All Status</option>
            </select><br></br><br></br>
            <select style={{ width: "82%", borderRadius: "10px", padding: "9px" }}>
                <option>High Priority </option>

            </select>
            <br></br>
            <button className="newtask">+New Task</button>
            <br></br>

            <div className="taskBlock">
                <div className="tasklist">
                    <h5 style={{ color: " rgba(7, 7, 13, 1)", fontSize: "20px", fontWeight: "bolder", fontFamily: "Times New Roman", marginRight: "70%" }}>Setup Aythentication</h5>
                    <span className="due">JWT implementation with login/register • Due: Tomorrow</span>

                    <div className="Hb">
                        <div style={{ color: "red", backgroundColor: " rgb(252, 138, 138)", width: "50px", fontWeight: "lighter", borderRadius: "5px" }}>High</div>
                        <div style={{ color: "white", backgroundColor: " rgba(96, 93, 93, 1)", width: "80px", fontWeight: "lighter", borderRadius: "5px", height: "21px" }}>Backend</div>
                    </div>

                    <div className="ecd">
                        <button className="Edit" >Edit</button>
                        <button className="Complete" style={{ backgroundColor: "blue", color: "white", borderRadius: "3px", fontWeight: "bolder", width: "86px", border: "none" }}>Complete</button>
                        <button className="delete" style={{ backgroundColor: "red", color: "white", borderRadius: "3px", fontWeight: "bolder", width: "75px", border: "none" }}>Delete</button>

                    </div>
                </div>
            </div>

            <div className="taskBlock">
                <div className="tasklist">
                    <h5 style={{ color: " rgba(10, 10, 11, 1)", fontSize: "20px", fontWeight: "bolder", marginRight: "66%", fontFamily: "Times New Roman" }}>User Authentication Frontend</h5>
                    <span className="dueweek">Login and register form in React • Due: Next Week</span>

                    <div className="MB">
                        <div style={{ color: "red", backgroundColor: " rgba(249, 165, 91, 1)", width: "80px", fontWeight: "lighter", borderRadius: "5px", marginTop: "20px" }}>Medium</div>
                        <div style={{ color: "white", backgroundColor: " rgba(96, 93, 93, 1)", width: "80px", fontWeight: "lighter", borderRadius: "5px", height: "21px", marginTop: "20px" }}>Backend</div>
                    </div>

                    <div className="ecd">
                        <button className="Edit">Edit</button>
                        <button className="Start" style={{ backgroundColor: "blue", color: "white", borderRadius: "3px", fontWeight: "bolder", width: "80px", border: "none" }}>Start</button>
                        <button className="delete" style={{ backgroundColor: "red", color: "white", borderRadius: "3px", fontWeight: "bolder", width: "75px", border: "none" }}>Delete</button>
                    </div>
                </div>

            </div>

        </div>

    )
}