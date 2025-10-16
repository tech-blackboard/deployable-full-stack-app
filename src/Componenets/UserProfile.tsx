import InputComponent from './InputComponent';
import './UserProfile.css';
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
export default function UserProfile() {
  const slider = 'span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-"" before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]';
  return (
    <div>
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
        <div className="mt-20 border rounded-xl p-11 pt-0 ml-96  mr-11">
          <h2 className='text-2xl  text-black-300  ml-3 font-bold mt-9'>Account Settings</h2><br></br>
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
        <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300 mb-3 mt-9 p-9 rounded-xl shadow-xl cursor-pointer">
          <p className="text-2xl text-black-300 ml-4 mb-6 font-bold">Preferences</p>
          <div className="flex justify-around">
            <span>Email Notifications</span>
            <label className="ml-11 mb-3 relative inline-block w-[38px] h-[20px]">
              {/* <input type="checkbox" defaultChecked /> */}
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0 peer"
                defaultChecked />

              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>
            </label>
          </div>
          <div className="flex justify-around">
            <span>Dark Mode</span>
            <label className=" ml-20 mb-3 relative inline-block w-[38px] h-[20px]">
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0 peer"
                defaultChecked />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>            </label>
          </div>

          <div className="flex justify-around items-center">
            <span>Task Reminders</span>
            <label className="ml-11 mb-3  relative inline-block w-[38px] h-[20px]">
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0 peer"
                defaultChecked />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>
            </label>
          </div>


        </div>
      </div>
    </div >
  )
}