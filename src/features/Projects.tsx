import { useNavigate } from "react-router-dom";
import DisplayAllProjects from "./DisplayAllProjects";

export default  function Projects(){
    const navigate = useNavigate()
    function backToDashboard() {
        navigate('/Dashboard')
    }
    return(
        
             <div className='w-full '>
                 {/* Header */}
           
                 <div className="bg-cyan-800  text-start w-full  lg:w-full">
                   <button
                     className="text-xl text-white p-3 font-lato md:text-2xl"
                     onClick={backToDashboard}
                   >
                     ← Back to Dashboard
                   </button>
                 </div>
          <DisplayAllProjects />

        
            </div>
    )
}

