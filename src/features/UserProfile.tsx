import InputComponent from './InputComponent';
// import './UserProfile.css';
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
import { useContext, useState, type SetStateAction } from 'react';
import SideBarComponent from './sideBarComponent';
import Profiles from './profiles';
import { toast } from 'react-toastify';
import { updateuserApi } from '../api/user.api';
import { useDispatch, useSelector } from 'react-redux';
import {AuthContext} from '../context/AuthContext';
import { addUser } from '../reduxStore/CreateNewProjectSlice';
import {ProjectContext} from './ProjectContext';
export default function UserProfile() {
  const dispatch=useDispatch()
  const slider = 'span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-"" before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]';
//   const users = useSelector((state: any) => state.newProject.addUsers);
// console.log("user from userpro",users)
  // const projIndex = Number(id);
  // const project = user[projectIndex];
  const { user } = useContext(AuthContext);
  console.log("user from pro", user)
  // const usertoredux=dispatch(addUser(user))
  // console.log("usertoredux", usertoredux)
  const [FullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  
  const { projects, addProject } = useContext(ProjectContext);

  function fullNames(e: React.ChangeEvent<HTMLInputElement>) {
    setFullName(e.target.value)

  }
  function emailId(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  function phoneNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value)
  }

 
  async function updateProfile() {
          const updatedUser = {
             userId:user.userId, // keep id
            username: FullName,
            email: email,
            phoneNumber: phone,
          };
    console.log("updatedUser", updatedUser)
          try {
            const update = await updateuserApi(user.userId, updatedUser)//here we can update the project in db
            console.log("update", update)

              //updatedData  this from slice 
              toast.success("Users detailes updated successfully!")
  
              // navigate(`/Projects/${projectIndex}`);
          } catch (error) {
              toast.error("you project not updated! ")
          }
      }
  return (
      <div >


      <SideBarComponent 
        title="TaskManager"
        menuItems={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Projects", path: "/projects" },
          { label: "Analytics", path: "/Analytics" },
          // { label: "Logout", path: "/Logout" },
        ]} classNames={''}      />
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2    w-full md:w-1/2 lg:w-full'>
      <Profiles />


      <div className="mt-9 border-2 rounded-xl lg:pl-20 pl-3 ml-3 lg:ml-32  p-2 shadow-xl text-start w-96  ">
        <h2 className='text-xl  text-black-300  font-bold  mt-3'>Account Settings</h2><br></br>
        <label className="  font-semibold mb-5 text-base ">FullName</label>
        <InputComponent inputType='text' inputValue={FullName} inputOnChange={fullNames}/><br></br>
        <label className=" text-base font-semibold mt-9">Email</label>
        <InputComponent inputType='email' inputValue={email} inputOnChange={emailId} /><br></br>
        <label className="  text-base font-semibold">Phone</label>
        <InputComponent inputType="tel" inputmode="numeric" placeholder="+91 8688868234" pattern="[0-9]{10}" required inputValue={phone} inputOnChange={phoneNumber} /><br></br>
        <label className=" text-base font-semibold   mb-5">Timezone</label><br></br>
        <select name="timezone" required className="p-1 text-base rounded-md border-2 mb-2 lg:w-48" value="time"><br></br>
          <option value="" selected disabled>--Select Time Zone--</option>
          <option value="Asia/Kolkata">(GMT+05:30) Asia/Kolkata</option>
          <option value="America/New_York">(GMT-05:00) America/New_York</option>
          <option value="Europe/London">(GMT+00:00) Europe/London</option>
        </select><br></br>
        <ButtonComponent className="bg-blue-600 hover:bg-blue-700 mt-6 text-base w-44 h-11 mb-2 pt-2 " name="UpdateProfile" onClick={updateProfile}/>
      </div>
      <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300 mb-11 pb-2 md:mt-0 mt-9 mr-4 ml-4  rounded-xl shadow-xl   cursor-pointer">
        <p className="text-2xl text-black-300 mb-4 mt-4   font-bold">Activity Summary</p>
        <table className='lg:ml-32 ml-20'>
          <tbody className="">
            <tr>
              <td className=' p-1 pr-11 md:pr-28  text-xl md:text-xm'>Projects Created</td>
                <td className=" text-xl  font-semibold ">{projects.length}</td>
            </tr>
            <tr>
              <td className=' p-1 text-xl pr-11 md:pr-28 md:text-xm'>Tasks Completed</td>
                <td className=" text-xl  font-semibold  md:pr-1">0</td>
            </tr>
            <tr>
              <td className=' p-1   text-xl pr-11  md:pr-28 md:text-xm'>Productivity Score</td>
              <td className=" text-xl text-green-500 font-semibold md:pl-3" >0%</td>
            </tr>
          </tbody>
        </table>
      </div>
        <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300  p-4 mr-4 ml-4 md:mt-9  rounded-xl shadow-xl cursor-pointer mb-11 ml-2">
        <p className="text-2xl text-black-300 mr-28 mb-3 font-bold">Preferences</p>
        <div className="flex justify-around">
          <span>Email Notifications</span>
          <label className="ml-11 mb-3 relative inline-block w-[39px] h-[20px]">
            {/* <input type="checkbox" defaultChecked /> */}
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
              defaultChecked />

            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px] "></span>
          </label>
        </div>
        <div className="flex justify-around ">
          <span>Dark Mode</span>
          <label className=" ml-24 mb-3 relative inline-block w-[38px] h-[20px]">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
              defaultChecked />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>            </label>
        </div>

        <div className="flex justify-around items-center">
          <span>Task Reminders</span>
          <label className="ml-20 mb- relative inline-block w-[38px] h-[20px]">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
              defaultChecked />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>
          </label>
        </div>
        </div>

      </div>
      </div>

  )
}



