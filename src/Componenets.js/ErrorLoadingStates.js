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
                    <p>Unable to load projects.<br></br>Please check your <br></br> internet connection  <br></br>and try again.</p>
                    <button>Retry</button>
                   </div>
                </div>

                <div className="EmptyState">  
                    <p style={{fontSize:"20px",fontWeight:"bold",color:"black", marginRight:"60%"}}>Empty State</p>              
                    <figure style={{fontSize:"290%"}}>📋</figure>
                    <figurecaption style={{fontWeight:"bold",color:"grey"}}>No projects yet</figurecaption>
                    <p  style={{fontWeight:"lighter",color:"grey"}}>Create your first project to <br></br>get started with task <br></br>management.</p><br></br>
                    <button className="createproject" >Create Project</button>

                </div>

                <div className="SuccessState">
                    <h1 >Success State</h1>
                 <div className="Success">
                    <p style={{fontWeight:"bold", fontSize:"18px",marginRight:"60%",marginBottom:"10px" ,marginTop:"0px"}}>✅ Success!</p>
                    <span>Project "E-commerce Website"<br></br> has been created successfully.</span>
                 </div>
                 <div className="newproject">
                  <p>🎉Welcome to your new project!</p>
                  <span>Start by adding your first task</span>
                 </div>
                </div>
            </div>

            <div className="FormValidationExamples">
            <h3  style={{marginRight:"66%"}}>Form Validation Examples</h3>
            <label style={{marginRight:"72%"}}>Project Name *</label>
            <InputComponent  style={{color:"red"}} inputType="text"/>
            <span>Project name is required</span><br></br>
             <label style={{marginRight:"77%"}}>Email</label>
            <InputComponent inputType="email"/>
            <span>Please enter a valid email address</span><br></br>
            <label  style={{marginRight:"75%"}}>Due Date</label>
            <InputComponent inputType="date"/>
            <span>✓ Valid date selected</span>
            </div>
          </div>   
    )
}