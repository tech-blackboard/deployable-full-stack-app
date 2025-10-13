import './EditTask.css'
import InputComponent from './InputComponent'
export default function EditTask(){
    return(
        <div className="EditTask"> 
            <h3>Edit Task</h3>
          <button className="close-btn">&times;</button>
            <label className="Label"  style={{marginRight:"300px"}}>Task Title</label><br></br>
            <InputComponent  inputType="text" style={{}}/><br></br><br></br>
            <label  className="Label" style={{marginRight:"280px"}}>Description</label><br></br>
            <textarea className="input" style={{width:"370px",marginBottom:"10px"}}/> 

            <div className="select">
                <div className="Priority">
                     <label className="label">Priority</label>
             <select>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

                </div>
                <div  className="Status">
        
                     <label className="label">Status</label>
                 <select>
                   <option>To-do</option>
                   <option>In Prograss</option>
                   <option>Complete</option>
                 </select>
                </div>
            </div>

            <label  className="Label" style={{marginRight:"300px"}}>Due Date</label><br></br>
            <InputComponent inputType="date" style={{}}/><br></br><br></br>
            <label  className="Label"  style={{marginRight:"330px"}}>Tags</label><br></br>
            <InputComponent  inputType="text" style={{marginBottom:"30px"}}/>

            <div className='buttons'>
                <div ><button className="cancel"> Cancel</button></div>
                <div ><button className="Delete">Delete</button></div>
                <div ><button className="SaveChanges">Save Changes</button></div>
            </div>
        </div>
    )
}