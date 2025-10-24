import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignUp from './Components/Register';
import { ToastContainer } from "react-toastify";
import ProjectView from './Components/ProjectView';
import Login from './Components/Login';
 import DashBoard from './Components/DashBoard';
import TaskListView from './Components/TaskListView';
 import EditTask from './Components/EditTask'
 import UserProfile from './Components/UserProfile'
import "react-toastify/dist/ReactToastify.css";
import CreateNewProject from './Components/CreateNewProject';
 import ErrorLoadingStates from './Components/ErrorLoadingStates';
import AnalyticsDashboard from './Components/AnalyticsDashboard';
import HomePage from './Components/HomePage';
import {BrowserRouter} from 'react-router-dom';
import DisplayProject from './Components/DisplayProjects';
import ProjectListView from './Components/ProjectListView';
import {UserContext} from './Components/UserContext';
function App() {
  return (
    <div className="App">
      {/* Global Toast Container - customize here */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
     {/* <DashBoard/>   */}
       {/* <EditTask/>  */}
    {/* <ErrorLoadingStates/>  */}
    {/* <UserContext.Provider value="Pooja"> */}
    {/* <ProjectView/> */}
      {/* <DashBoard/>  
    </UserContext.Provider>   */}
    {/* <Register/>   */}
       {/* <Login/>     */}
     {/* <UserProfile/>   */}
    {/* <TaskListView/>   */}


     {/* <AnalyticsDashboard/>    */}
      {/* <CreateNewProject/>  */}
   
     {/* <DisplayProject/> */}
  {/* <ProjectListView/> */}
      <UserContext.Provider value={count}>
            <DashBoard/> 
         </UserContext.Provider>

    <Routes>
       <Route path='/' element={ <HomePage/>}/>
         <Route path='/Login' element={ <Login/>}/>
         <Route path='/SignUp' element={<SignUp/>}/> 
         {/* <UserContext.Provider value="pooja">
             <Route path='/Dashboard' element={<DashBoard/>}/> 
         </UserContext.Provider> */}
       
       <Route path='/Projects/:id' element={<ProjectView/>}/> 
        <Route path='/Profile' element={<UserProfile/>}/> 
         <Route path='/TaskListview' element={<TaskListView/>}/> 
         <Route path='/EditTask' element={<EditTask/>}/> 
         <Route path='/CreateNewProject' element={<CreateNewProject/>}/> 
         <Route path='/Analytics' element={<AnalyticsDashboard/>}/> 
         <Route path='/ErrorLoadingStates' element={<ErrorLoadingStates/>}/>  
         
 
        
         
    </Routes> 
  
    </div>
  );
}

export default App;
