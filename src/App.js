import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './Componenets.js/Register';
import { ToastContainer } from "react-toastify";
import ProjectView from './Componenets.js/ProjectView';
import Login from './Componenets.js/Login';
import DashBoard from './Componenets.js/DashBoard';
import TaskListView from './Componenets.js/TaskListView';
import EditTask from './Componenets.js/EditTask'
import UserProfile from './Componenets.js/UserProfile'
import "react-toastify/dist/ReactToastify.css";
import CreateNewProject from './Componenets.js/CreateNewProject';
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
    
     {/* <ProjectView/> */}
     {/* <TaskListView/> */}
     {/* <EditTask/> */}
     <UserProfile/>
          {/* <CreateNewProject/> */}


      {/* <Routes>
         <Route path='/' element={ <Login/>}/>
        <Route path='/Login' element={ <Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<DashBoard/>}/>
 
           
        
      </Routes> */}
    </div>
  );
}

export default App;
