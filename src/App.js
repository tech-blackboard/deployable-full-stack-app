import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from './features/Register';
import Login from './features/Login';
import DashBoard from './features/DashBoard';
import TaskListView from './features/TaskListView';
import EditTask from './features/EditTask';
import UserProfile from './features/UserProfile';
import CreateNewProject from "./features/CreateNewProject";
import ErrorLoadingStates from "./features/ErrorLoadingStates";
import AnalyticsDashboard from "./features/AnalyticsDashboard";
import HomePage from "./features/HomePage";
 import ProjectView from "./features/ProjectView";
import ProjectListView from "./features/ProjectListView";
import DisplayProject from "./features/DisplayProjects";
import Logout from './features/Logout';
// import Divisions from './features/divs';
import DevComponent from "./features/DevComponent";
import ProjectProvider from "./features/ProjectContext"; // ✅ Correct import.
// import CardViewDisplay from './features/CardViewDisplay'
// import AddToCard from "./features/AddToCard";
// import CheckListPopUp from "./features/CheckListPopUp";
// import ProjectViews from "./features/JsonProject";
import  AuthProvider  from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute'
import DisplayProjects from "./features/DisplayProjects";
import Projects from "./features/Projects";
import SendOtp from './features/SendOtp';
import OtpLogin from './features/OtpLogin';
import ProfileDropDown from './features/ProfileDropDown';
import ProjectViewMinimal from './features/ProjectViewMinimal'
function App() {
  return (
   <div className="App">
      {/* ✅ Toast Container */}
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
        theme="colored" />

      {/* ✅ Wrap your routes with BrowserRouter and ProjectProvider */}
      {/* <BrowserRouter> */}
      <AuthProvider>
    <ProjectProvider>
       

        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/OtpLogin" element={<OtpLogin />} />
            <Route path="/dashboard" element={<DashBoard />}
            />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
            {/* <Route path="/Projects/:id" element={<ProjectViews />} /> */}

          <Route path="/Projects/:id" element={<ProjectView />} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path="/TaskListview" element={<TaskListView />} />
          <Route path="/EditTask/:id" element={<EditTask />} />
          <Route path="/CreateNewProject" element={<CreateNewProject />} />
          <Route path="/Analytics" element={<AnalyticsDashboard />} />
          <Route path="/ErrorLoadingStates" element={<ErrorLoadingStates />} />
          <Route path="/ProjectListView" element={<ProjectListView />} />
          <Route path="/DisplayProject" element={<DisplayProject />} />
          <Route path="/HomePage" element={<HomePage />} />
          {/* <Route path="ProjectView" element={<ProjectView />} /> */}
          <Route path="/EditTask/:id" element={<EditTask />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/SendOtp" element={<SendOtp />} />

          {/* <Route path="CardViewDisplay" element={<ProjectView  />} /> */}
          
            <Route path="/Logout" element={<Logout />} />



        </Routes>
      

      </ProjectProvider>
    
      </AuthProvider>
      {/* <ProjectViewMinimal/> */}
    
      {/* <Divisions /> */}
      {/* </BrowserRouter> */}
      {/* <ProfileDropDown/> */}
    {/* <AddList />  */}
      {/* <CardViewDisplay/>
    */}
    
    </div>
  );
}

export default App;
