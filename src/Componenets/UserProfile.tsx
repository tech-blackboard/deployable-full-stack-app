import InputComponent from './InputComponent';
// import './UserProfile.css';
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent';
export default function UserProfile() {
  const slider = 'span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-"" before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]';
  return (
    <div>
      <div className="flex justify-between  bg-gray-700 w-[200%] md:w-[100%] ">
        <h1 className='text-2xl text-white ml-4   pt-4 font-bold'>TaskManager</h1>
        <HeaderComponent
          Dashboard="Dashboard"
          Projects="Projects"
          Analytics="Profile"
          Profile="Logout" className='mb-1 md:mr-3  md:w-[30%] md:text-xl ' />
      </div>

      <div className="flex justify-between  flex-wrap  mt-0 md:mt-11 md:ml-28">
        <div className="border-2 rounded-xl  p-20  mt-4  ml-44 pb-2 md:p-9 md:h-[20%]">
          <div className="border rounded-[50%] h-38 w-32 bg-blue-300 p-3 mt-3 ml-[39px]">
            <h4 className="text-4xl font-semibold p-8">PT</h4>
          </div><br></br>
          <span className=" text-2xl font-bold mt-3  ">poojathatikonda</span><br></br>
          <span className=" text-xl text-gray-500 mt-3 mb-0 ">pooja888@gmail.com</span><br></br>
          <span className=" text-xl  text-gray-500 mt-0 ">Member Since may 2025</span><br></br>
          <ButtonComponent className="bg-blue-600 hover:bg-blue-700 mt-6 mb-9 text-xl md:w-[60%] " name=" Changes Avatar" />
        </div>
        <div className="mt-9 border rounded-xl ml-44 p-9 md:mr-44 md:p-20 ">
          <h2 className='text-3xl  text-black-300  ml-3 font-bold '>Account Settings</h2><br></br>
          <label className="mr-[65%]  font-semibold mb-5 text-xl">FullName</label>
          <InputComponent inputType='text' /><br></br>
          <label className="mr-[75%] text-xl font-semibold mt-9">Email</label>
          <InputComponent inputType='email' /><br></br>
          <label className="mr-[50%]  text-xl font-semibold">Phone(Optional)</label>
          <InputComponent inputType="tel" inputmode="numeric" placeholder="+91 8688868234" pattern="[0-9]{10}" required /><br></br>
          <label className=" text-xl font-semibold mr-[70%]  mb-5">Timezone</label><br></br>
          <select name="timezone" required className="p-1 w-[99%] text-9xm  border rounded-xl mb-5"><br></br>
            <option value="" selected disabled>--Select Time Zone--</option>
            <option value="Asia/Kolkata">(GMT+05:30) Asia/Kolkata</option>
            <option value="America/New_York">(GMT-05:00) America/New_York</option>
            <option value="Europe/London">(GMT+00:00) Europe/London</option>
          </select><br></br>
          <ButtonComponent className="bg-blue-600 hover:bg-blue-700 mt-6 text-2xl w-52" name="Update Profile" />
        </div>
        <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300 p-2  mt-9 rounded-xl shadow-xl  ml-44 md:mt-0 cursor-pointer">
          <p className="text-2xl text-black-300 ml-28 mb-3   pr-28  font-bold">Activity Summary</p>
          <table className=' ml-14 '>
            <tbody className="">
              <tr>
                <td className=' p-1 pr-4   text-xl '>Projects Created</td>
                <td className=" text-xl  font-semibold">8</td>
              </tr>
              <tr>
                <td className=' p-1 pr- text-xl '>Tasks Completed</td>
                <td className=" text-xl  font-semibold">43</td>
              </tr>
              <tr>
                <td className=' p-1 pr-  text-xl '>Productivity Score</td>
                <td className=" text-xl text-green-500 font-semibold" >85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border border-l-4 border-l-red-400 border-gray-300 bg-white-300 mt-9 p-4 ml-44 pl-[20%] md:>-[10%] rounded-xl shadow-xl cursor-pointer">
          <p className="text-2xl text-black-300 mr-28 mb-6 font-bold">Preferences</p>
          <div className="flex justify-around">
            <span>Email Notifications</span>
            <label className="mr-9 mb-3 relative inline-block w-[39px] h-[20px]">
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
            <label className=" mr-4 mb-3 relative inline-block w-[38px] h-[20px]">
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0 peer"
                defaultChecked />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-xl transition duration-300 peer-checked:bg-blue-500 before:content-[''] before:absolute before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px]"></span>            </label>
          </div>

          <div className="flex justify-around items-center">
            <span>Task Reminders</span>
            <label className="mr-7 mb-3  relative inline-block w-[38px] h-[20px]">
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