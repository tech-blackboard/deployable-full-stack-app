import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./Components/Register";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import TaskListView from "./Components/TaskListView";
import EditTask from "./Components/EditTask";
import UserProfile from "./Components/UserProfile";
import CreateNewProject from "./Components/CreateNewProject";
import ErrorLoadingStates from "./Components/ErrorLoadingStates";
import AnalyticsDashboard from "./Components/AnalyticsDashboard";
import HomePage from "./Components/HomePage";
import ProjectView from "./Components/ProjectView";
import ProjectListView from "./Components/ProjectListView";
import DisplayProject from "./Components/DisplayProjects";

import ProjectProvider from "./Components/ProjectContext"; // ✅ Correct import

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
        theme="colored"
      />

      {/* ✅ Wrap your routes with BrowserRouter and ProjectProvider */}
      {/* <BrowserRouter> */}
        <ProjectProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Projects/:id" element={<ProjectView />} />
            <Route path="/Profile" element={<UserProfile />} />
            <Route path="/TaskListview" element={<TaskListView />} />
            <Route path="/EditTask" element={<EditTask />} />
            <Route path="/CreateNewProject" element={<CreateNewProject />} />
            <Route path="/Analytics" element={<AnalyticsDashboard />} />
            <Route
              path="/ErrorLoadingStates"
              element={<ErrorLoadingStates />}
            />
            <Route path="/ProjectListView" element={<ProjectListView />} />
            <Route path="/DisplayProject" element={<DisplayProject />} />
          </Routes>
        </ProjectProvider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
