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
import { AuthContext } from '../context/AuthContext';
import { addUser } from '../reduxStore/CreateNewProjectSlice';
import { ProjectContext } from './ProjectContext';
import ProfileDropDown from './ProfileDropDown';

export default function UserProfile() {
  const dispatch = useDispatch()
  // Removed this unused and problematic slider string, as it's not needed for the style fix.
  // const slider = 'span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-"" before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]';

  const { user } = useContext(AuthContext);
  console.log("user from pro", user)

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
      userId: user.userId, // keep id
      username: FullName,
      email: email,
      phoneNumber: phone,
    };
    console.log("updatedUser", updatedUser)
    try {
      const update = await updateuserApi(user.userId, updatedUser)
      console.log("update", update)
      toast.success("User details updated successfully!")
    } catch (error) {
      toast.error("Your project was not updated!")
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'> {/* Added a light background color */}
      <div className="lg:flex bg-cyan-800 px-1 gap-9 py-2 ">
        
          <h1 className='text-xl text-white font-bold p-2 text-start  '>TaskManager</h1>


     <div className="absolute top-2 right-2">
                            <ProfileDropDown className="bg-cyan-300" />
                        </div>
    
            </div>
      {/* Main Content Area - Adjusted grid for better responsiveness and spacing */}
      <div className=' grid grid-cols-1  md:grid-cols-2  gap-9 mb-9'>

        {/* Profile Picture Section - Moved to top-left for standard layout */}
        <div className=''>
          <Profiles />
        </div>

        {/* Account Settings Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100 px-9 mr-4 ml-4 mt-9">
          <h2 className='text-2xl text-gray-800 font-extrabold mb-6 border-b pb-2'>Account Settings</h2>

          <div className='space-y-4 text-start'> {/* Added space between form elements */}
            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700 ">Full Name</label>
              <InputComponent inputType='text' inputValue={FullName} inputOnChange={fullNames} className="w-full border-gray-300 rounded-md" /> {/* Added full width class */}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
              <InputComponent inputType='email' inputValue={email} inputOnChange={emailId} className="w-full border-gray-300 rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Phone</label>
              {/* Applied styling directly to the InputComponent */}
              <InputComponent
                inputType="tel"
                inputmode="numeric"
                placeholder={user?.phoneNumber || "+91 86888XXXXX"} // Use existing user phone or placeholder
                pattern="[0-9]{10}"
                required
                inputValue={phone}
                inputOnChange={phoneNumber}
                className="w-full border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Timezone</label>
              <select
                name="timezone"
                required
                className="p-2 text-base rounded-md border border-gray-300 mb-2 w-full lg:w-48 focus:border-blue-500 focus:ring-blue-500"
                defaultValue="Asia/Kolkata"
              >
                <option value="" disabled>--Select Time Zone--</option>
                <option value="Asia/Kolkata">(GMT+05:30) Asia/Kolkata</option>
                <option value="America/New_York">(GMT-05:00) America/New_York</option>
                <option value="Europe/London">(GMT+00:00) Europe/London</option>
              </select>
            </div>

            <div className='pt-4'>
              <ButtonComponent
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-44 h-10  pt-1 rounded-lg transition duration-150 shadow-md border-transparent "
                name="Update Profile"
                onClick={updateProfile} buttonType='button'             />
            </div>
          </div>
        </div>

        {/* Activity Summary and Preferences - arranged in a 2x2 grid on large screens */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-0 px-4 ">

          {/* Activity Summary */}
          <div className="bg-white mt-0 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-xl text-gray-800 font-bold mb-4">Activity Summary</p>
            <table className='w-full'>
              <tbody className="">
                <tr className='border-b border-gray-100  '>
                  <td className='py-2 text-md text-gray-600'>Projects Created</td>
                  <td className="py-2 text-right text-xl font-bold text-blue-600">{projects.length}</td>
                </tr>
                <tr className='border-b border-gray-100'>
                  <td className='py-2 text-md text-gray-600'>Tasks Completed</td>
                  <td className="py-2 text-right text-xl font-bold text-gray-800">0</td>
                </tr>
                <tr>
                  <td className='py-2 text-md text-gray-600'>Productivity Score</td>
                  <td className="py-2 text-right text-xl text-green-500 font-bold" >0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Preferences */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <p className="text-xl text-gray-800 font-bold mb-4 border-b pb-2">Preferences</p>

            {/* Email Notifications */}
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className='text-gray-700'>Email Notifications</span>
              <label className="relative inline-block w-[39px] h-[20px]">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0 peer"
                  defaultChecked />
                {/* Slider Styling */}
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px] "></span>
              </label>
            </div>

            {/* Dark Mode */}
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className='text-gray-700'>Dark Mode</span>
              <label className="relative inline-block w-[38px] h-[20px]">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0 peer"
                  defaultChecked />
                {/* Slider Styling */}
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>
              </label>
            </div>

            {/* Task Reminders */}
            <div className="flex justify-between items-center py-2">
              <span className='text-gray-700'>Task Reminders</span>
              <label className="relative inline-block w-[38px] h-[20px]">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0 peer"
                  defaultChecked />
                {/* Slider Styling */}
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>
              </label>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
} 