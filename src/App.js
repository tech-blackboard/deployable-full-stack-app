import './App.css';
// import InputComponent from './Componenets.js/InputComponent';
import Register from './Componenets.js/Register';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";function App() {
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
      <Register/>
    </div>
  );
}

export default App;
