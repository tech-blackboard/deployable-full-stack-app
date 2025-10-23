import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignUp from './Componenets/Register';
import { ToastContainer } from "react-toastify";
import ProjectView from './Componenets/ProjectView';
import Login from './Componenets/Login';
 import DashBoard from './Componenets/DashBoard';
import TaskListView from './Componenets/TaskListView';
 import EditTask from './Componenets/EditTask'
 import UserProfile from './Componenets/UserProfile'
import "react-toastify/dist/ReactToastify.css";
import CreateNewProject from './Componenets/CreateNewProject';
 import ErrorLoadingStates from './Componenets/ErrorLoadingStates';
import AnalyticsDashboard from './Componenets/AnalyticsDashboard';
import HomePage from './Componenets/HomePage';
// import {UserContext} from './Componenets/UserContext'
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
   
     

     <Routes>
          {/* <Route path='/' element={ <HomePage/>}/>
         <Route path='/Login' element={ <Login/>}/>
         <Route path='/SignUp' element={<SignUp/>}/> 
         <Route path='/Dashboard' element={<DashBoard/>}/> 
         <Route path='/Projects' element={<ProjectView/>}/> 
v        <Route path='/Profile' element={<UserProfile/>}/> 
         <Route path='/TaskListview' element={<TaskListView/>}/> 
         <Route path='/EditTask' element={<EditTask/>}/> 
         <Route path='/CreateNewProject' element={<CreateNewProject/>}/>  */}
         <Route path='/Analytics' element={<AnalyticsDashboard/>}/> 
         {/* <Route path='/ErrorLoadingStates' element={<ErrorLoadingStates/>}/>  */}

 
           
         
      </Routes> 
    </div>
  );
}

export default App;
