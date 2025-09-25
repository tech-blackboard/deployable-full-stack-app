import InputComponent from './InputComponent';
import './CreateNewProject.css';
export default function CreateNewProject(){
    return(
        <div className="createnewproject">
        
            <h1>Create New Project</h1>
            <button className="close-button">&times;</button>
            <label>Project Name *</label>
            <InputComponent inputType="text"  />
            <label className="des" style={{marginRight:"320px"}}>Description</label>
            <InputComponent style={{padding:"200px"}} inputType="text"  />
             <div className="date">
                <div>
                    <label style={{marginRight:"0"}}>Start Date</label>
                    <InputComponent inputType="date" />

                </div>
                <div>
                    <label style={{marginRight:"0"}}>Target End Date</label>
                    <InputComponent style={{marginRight:"800px"}} inputType="date"  />

                </div>
             </div>
            <div className="categorys">
             <label>Project Category</label>
            <select className="category" style={{borderRadius:"5px",border:"2px solid gray"}}> 
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Designing</option>
                <option>Marketing</option>
                <option>other</option>
            </select>
         </div>
            <h1 style={{marginRight:"186px",fontSize:"20px",marginBottom:"3px"}}>Team Members (Optional)</h1>
            <InputComponent inputType="text"/>

            <button className="cancelpro">Cancel</button>
            <button className="createpro">Create Project</button>
        </div>
    )
}