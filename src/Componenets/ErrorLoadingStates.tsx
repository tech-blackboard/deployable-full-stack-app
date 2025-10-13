import HeaderComponent from './HeaderComponent';
import  './ErrorLoadingStates.css';
import Loading from './Loading' ;
import InputComponent from './InputComponent';
export default function ErrorLoadingStates(){
    return(
        <div>
          
          <div className="UserNav">
              <h1>TaskManager</h1>
             <HeaderComponent Dashboard="Dashboard" Projects="Projects"/>
          </div>
          <p className="p">Various Application States</p>
                
            <div className="manageStates">
                <div className="Loadingstate">
                    <h1>Loadingstate</h1>
                    <Loading /> 
                      <p>Loading your projects...</p>
                </div>
                <div className="ErrorState"> 
                    <h1>ErrorState</h1>                   
                   <div className=" ConnectionError">
                    <p id="error">Unable to load projects.<br></br>Please check your <br></br> internet connection  <br></br>and try again.</p>
                    <button>Retry</button>
                   </div>
                </div>

                <div className="EmptyState">  
                    <p style={{fontSize:"20px",fontWeight:"bold",color:"black", marginRight:"60%"}}>Empty State</p>              
                    <figure>
                         <span role="img" aria-label="clipboard" style={{ fontSize: "450%"}}> 📋</span>
                         <figcaption style={{fontWeight:"bold",color:"grey"}}>No projects yet</figcaption>
                    </figure>
                    <p  style={{fontWeight:"lighter",color:"grey",marginRight:"0" ,marginLeft:"10px"}}>Create your first project to <br></br>get started with task <br></br>management.</p><br></br>
                    <button className="createprojects" >Create Project</button>

                </div>

                <div className="SuccessState">
                    <h1 >Success State</h1>
                 <div className="Success">
                    <p style={{fontWeight:"bold", fontSize:"18px",marginRight:"60%",marginBottom:"10px" ,marginTop:"0px"}}>✅ Success!</p>
                    <span>Project "E-commerce Website"<br></br> has been created successfully.</span>
                 </div>
                 <div className="newprojects">
                  <p>🎉Welcome to your new project!</p>
                  <span>Start by adding your first task</span>
                 </div>
                </div>
            </div>

            <div className="FormValidationExamples">
            <h3  style={{marginRight:"66%"}}>Form Validation Examples</h3>
            <label style={{marginRight:"72%"}}>Project Name *</label>
            <InputComponent  style={{color:"red",width:"80%"}} inputType="text"/>
            <span>Project name is required</span><br></br>
             <label style={{marginRight:"77%"}}>Email</label>
            <InputComponent style={{color:"red",width:"80%"}}  inputType="email"/>
            <span>Please enter a valid email address</span><br></br>
            <label  style={{marginRight:"75%",width:"80%"}}>Due Date</label>
            <InputComponent style={{width:"80%"}} inputType="date"/>
            <span>✓ Valid date selected</span>
            </div>
          </div>   
    )
}