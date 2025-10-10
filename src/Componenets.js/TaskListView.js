 import './TaskListView.css';

export default function TaskListView(){
    return(
        <div className="ecomweb">
            <div className="ecomnav">
                 <h2>← E-commerce Wedsite</h2>
            <nav>
                <a href='/Listview'>List View</a>
                <a href="/Boardview">Board View</a>  
            </nav>
            </div>
            <br></br><br></br>
            <input style={{width:"80%"}}type="text" placeholder="auth"/><br></br><br></br>
            <select style={{width:"84%",borderRadius:"10px",padding:"10px"}}>
                <option>All Status</option> 
            </select><br></br><br></br>
            <select style={{width:"84%",borderRadius:"10px",padding:"10px"}}>
                <option>High Priority </option>

            </select>
            <br></br>
            <button className="newtask">+New Task</button>
            <br></br>
                <div className="tasklist">
                    <h5 style={{color:" rgba(7, 7, 13, 1)" ,fontSize:"20px",fontWeight:"bolder",fontFamily:"Times New Roman",marginRight:"350px",marginLeft:"0px",}}>Setup Aythentication</h5>
                    <p ClassName="due">JWT implementation with login/register • Due: Tomorrow</p>
               
                <div className="Hb">
                    <div style={{color:"red",backgroundColor:" rgb(252, 138, 138)", width:"50px",fontWeight:"lighter",borderRadius:"5px"}}>High</div>
                     <div style={{color:"white",backgroundColor:" rgba(96, 93, 93, 1)", width:"80px",fontWeight:"lighter",borderRadius:"5px",height:"21px"}}>Backend</div>
                </div>
                <div className="ecd">
                    <button  className="Edit" >Edit</button>
                    <button className="Complete"style={{backgroundColor:"blue",color:"white",borderRadius:"3px",fontWeight:"bolder",width:"80px",border:"none"}}>Complete</button>
                    <button className="delete"style={{backgroundColor:"red",color:"white",borderRadius:"3px",fontWeight:"bolder",width:"75px",border:"none"}}>Delete</button>

                </div>

             </div>


                  <div className="tasklist">
                    <h5 style={{color:" rgba(10, 10, 11, 1)" ,fontSize:"20px",fontWeight:"bolder",fontFamily:"Times New Roman"}}>User Authentication Frontend</h5>
                    <p className="due">Login and register form in React • Due: Next Week</p>
               
                <div className="MB">
                    <div style={{color:"red",backgroundColor:" rgba(249, 165, 91, 1)", width:"80px",fontWeight:"lighter",borderRadius:"5px"}}>Medium</div>
                     <div  style={{color:"white",backgroundColor:" rgba(96, 93, 93, 1)", width:"80px",fontWeight:"lighter",borderRadius:"5px",height:"21px"}}>Backend</div>
                </div>
                <div className="ecd">
                    <button className="Edit">Edit</button>
                    <button className="Start" style={{backgroundColor:"blue",color:"white",borderRadius:"3px",fontWeight:"bolder",width:"80px",border:"none"}}>Start</button>
                    <button className="delete" style={{backgroundColor:"red",color:"white",borderRadius:"3px",fontWeight:"bolder",width:"75px",border:"none"}}>Delete</button>

                </div>

</div>

            </div>
       
        )
    }