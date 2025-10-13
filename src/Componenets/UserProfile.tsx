import InputComponent from './InputComponent'
import './UserProfile.css'
export default function UserProfile(){
return(
    <div className="UserProfile">
        <div className="UserNav">
        <h1>TaskManager</h1>
        <nav className="navs">
            <a href="Dashboard">Dashboard</a>
            <a href="Projects">Projects</a>
            <a href="Profile">Profile</a>
            <a href="Logout">Logout</a>
        </nav>
      </div>

 <div className="userbody">
    <div className="avatar">
        <div className="PT">
           <h4>PT</h4>
        </div><br></br>
     <span style={{fontSize:"18px",fontWeight:"bold"}}>poojathatikonda</span><br></br>
     <span style={{color:"gray",fontSize:"17px",fontWeight:"lighter"}}>pooja888@gmail.com</span><br></br>
     <span  style={{color:"gray",fontSize:"16px",fontWeight:"lighter"}}>Member Since may 2025</span><br></br>
     <button className="ChangeAvatar">Change Avatar</button>
    </div>
 <div className="AccountSettings">
    <h2>Account Settings</h2>
    <label style={{marginRight:"58%"}}>FullName</label>
    <InputComponent inputType='text' />
    <label  style={{marginRight:"65%"}}>Email</label>
    <InputComponent inputType='email'/>
    <label style={{marginRight:"48%"}}>Phone(Optional)</label>
    <InputComponent inputType="tel"   inputmode="numeric" placeholder="+91 8688868234" pattern="[0-9]{10}" required/>
    <label  style={{marginRight:"58%"}}>Timezone</label>
    <select name="timezone" required style={{width:"480px", borderRadius:"9px",marginTop:"10px" ,height:"34px"}}>
    <option value="" selected disabled>--Select Time Zone--</option>
    <option value="Asia/Kolkata">(GMT+05:30) Asia/Kolkata</option>
    <option value="America/New_York">(GMT-05:00) America/New_York</option>
    <option value="Europe/London">(GMT+00:00) Europe/London</option>
    </select>
    <button className="UpdateProfile">Update Profile</button>
 </div>
 <div className="ActivitySummary">
    <p>Activity Summary</p>
    <table>
      <tbody>
        <tr>
        <td style={{marginRight:"60px"}}>Projects Created</td>
         <td style={{color:"black",fontWeight:"bold"}}>8</td>
         </tr>
         <tr>
        <td  style={{marginRight:"50px"}} >Tasks Completed</td>
        <td style={{color:"black",fontWeight:"bold"}}>43</td>
        </tr>
        <tr>
        <td style={{marginRight:"20px"}}>Productivity Score</td>
         <td style={{color:"green",fontWeight:"bold"}}>85%</td>
        </tr>
      </tbody>
    </table>
  </div>
 <div className="Preferences">
    <p>Preferences</p>
    <div className="checkbox">
      <span>Email Notifications</span>
      <label className="switch">
      <input type="checkbox" defaultChecked />
      <span className="slider"></span>
      </label>
    </div>
      <div className="checkbox">
       <span>Dark Mode</span>
       <label className="switch">
       <input type="checkbox" defaultChecked />
       <span className="slider"></span>
       </label>
      </div>
   <div className="checkbox">
     <span>Task Reminders</span>
     <label className="switch">
     <input type="checkbox" defaultChecked />
     <span className="slider"></span>
     </label>
     </div>
   
    </div>
   </div>
 </div>
)
}