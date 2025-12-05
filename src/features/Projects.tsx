import { useNavigate } from "react-router-dom";
import DisplayProjects from "./DisplayProjects";

export default  function Projects(){
    const navigate = useNavigate()
    function backToDashboard() {
        navigate('/Dashboard')
    }
    return(
        
             <div className='w-full '>
                 {/* Header */}
           
                 <div className="bg-blue-800  text-start w-full  lg:w-full">
                   <button
                     className="text-xl text-white p-3 font-bold md:text-2xl"
                     onClick={backToDashboard}
                   >
                     ← Back to Dashboard
                   </button>
                 </div>
            <DisplayProjects />
            </div>
    )
}

