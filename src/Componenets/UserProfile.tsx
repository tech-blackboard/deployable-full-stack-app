import InputComponent from './InputComponent';
import './UserProfile.css';
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
export default function UserProfile() {
  return (
    <div className="UserProfile">
      <div className="flex justify-between  bg-gray-700 content-aroun">
        <h1 className='text-2xl text-white ml-4   p-3  font-bold'>TaskManager</h1>
        <HeaderComponent
          Dashboard="Dashboard"
          Projects="Projects"
          Analytics="Profile"
          Profile="Logout" />
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div className="border rounded-xl h mb-5 p-9 mt-20 ml-11 w-[25%] h-[50%]">
          <div className="border rounded-[50%] h-38 w-28 bg-blue-300 p-3 mt-3 ml-[100px]">
            <h4 className="text-xl font-semibold p-8">PT</h4>
          </div><br></br>
          <span className=" text-xl font-bold mt-3  ">poojathatikonda</span><br></br>
          <span className=" text-3xm text-gray-500 mt-3 mb-0 ">pooja888@gmail.com</span><br></br>
          <span className=" text-xm  text-gray-500 mt-0 ">Member Since may 2025</span><br></br>
          <ButtonComponent className="bg-blue-600 hover:bg-blue-700 mt-6 mb-9 " name=" Changes Avatar" />
        </div>
        <div className="mt-20 border rounded-xl p-11 pt-0 ml-9">
          <h2 className='text-2xl  text-black-300  ml-20 font-bold mt-9'>Account Settings</h2><br></br>
          <label className="mr-60 text-9xm font-semibold mb-5">FullName</label>
          <InputComponent inputType='text' /><br></br>
          <label className="mr-[60%] text-9xm font-semibold mt-9">Email</label>
          <InputComponent inputType='email' /><br></br>
          <label className="mr-48 text-9xm font-semibold">Phone(Optional)</label>
          <InputComponent inputType="tel" inputmode="numeric" placeholder="+91 8688868234" pattern="[0-9]{10}" required /><br></br>
          <label className=" text-9xm font-semibold mr-60  mb-5">Timezone</label><br></br>
          <select name="timezone" required className="p-1 w-[69%] text-9xm  border rounded-xl mb-5"><br></br>
            <option value="" selected disabled>--Select Time Zone--</option>
            <option value="Asia/Kolkata">(GMT+05:30) Asia/Kolkata</option>
            <option value="America/New_York">(GMT-05:00) America/New_York</option>
            <option value="Europe/London">(GMT+00:00) Europe/London</option>
          </select><br></br>
          <ButtonComponent className="bg-blue-600 hover:bg-blue-700 mt-6 mb-9 " name="Update Profile" />
        </div>
        <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300 mb-20  p-8 rounded-xl shadow-xl cursor-pointer">
          <p className="text-2xl text-black-300 ml-4   p-3  font-bold">Activity Summary</p>
          <table className=' ml-9'>
            <tbody className="">
              <tr>
                <td className=' p-1 pr-44  text-2xm '>Projects Created</td>
                <td className=" text-xl  font-semibold">8</td>
              </tr>
              <tr>
                <td className=' p-1 pr-44 text-2xm '>Tasks Completed</td>
                <td className=" text-xl  font-semibold">43</td>
              </tr>
              <tr>
                <td className=' p-1 pr-44  text-2xm '>Productivity Score</td>
                <td className=" text-xl text-green-500 font-semibold" >85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300 mt-9  rounded-xl shadow-xl cursor-pointer">
          <p className="text-2xl text-black-300 ml-4   p-3  font-bold">Preferences</p>
          <div className="pl-20 p-3">
            <span>Email Notifications</span>
            <label className="p-20">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="pl-8 p-3">
            <span>Dark Mode</span>
            <label className="p-20 relative ">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="checkbox">
            <span>Task Reminders</span>
            <label className="p-14 w-11">
              <input type="checkbox" defaultChecked />
              <span className="adsolute top-0 left-0 right-0 bg-gray-500 rounded-xl transition-2s delay-200 "></span>
            </label>
          </div>

        </div>
      </div>
    </div >
  )
}