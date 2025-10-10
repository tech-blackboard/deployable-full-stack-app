import './EditTask.css'
export default function EditTask(){
    return(
        <div className="EditTask"> 
            <h3>Edit Task</h3>
          <button className="close-btn">&times;</button>
            <lable className="Label"  style={{marginRight:"300px"}}>Task Title</lable><br></br>
            <input className="input" type="text" style={{}}/><br></br><br></br>
            <lable  className="Label" style={{marginRight:"280px"}}>Description</lable><br></br>
            <textarea className="input" type="text" style={{width:"370px",marginBottom:"10px"}}/> 

            <div className="select">
                <div className="Priority">
                     <ladle className="label">Priority</ladle>
             <select>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

                </div>
                <div  className="Status">
        
                     <ladle className="label">Status</ladle>
                 <select>
                   <option>To-do</option>
                   <option>In Prograss</option>
                   <option>Complete</option>
                 </select>
                </div>
            </div>

            <lable  className="Label" style={{marginRight:"300px"}}>Due Date</lable><br></br>
            <input className="input" type="date" style={{}}/><br></br><br></br>
            <lable  className="Label"  style={{marginRight:"330px"}}>Tags</lable><br></br>
            <input  className="input" type="text" style={{marginBottom:"30px"}}/>

            <div className='buttons'>
                <div ><button className="cancel"> Cancel</button></div>
                <div ><button className="Delete">Delete</button></div>
                <div ><button className="SaveChanges">Save Changes</button></div>
            </div>
        </div>
    )
}