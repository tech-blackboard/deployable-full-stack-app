import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";
import {AuthContext} from "../context/AuthContext";



export default function Profiles(){
    const { user } = useContext(AuthContext);
    function getInitials(username: any) {
        if (!username) return "";
        const parts = username.trim().split(" ");
        if (parts.length === 1) {
            return parts[0].charAt(0).toUpperCase();
        }
        return (
            parts[0].charAt(0).toUpperCase() +
            parts[1].charAt(0).toUpperCase()
        );
    }

    const initials = getInitials(user.username);
    // console.log("initials", initials)
  

return(
    <div className=" mt-12  ml-3 mr-3 lg:ml-44  ">
                <div className="border-2 rounded-xl  px-11  shadow-xl">
            <div className="border rounded-[50%] h-38 w-32 ml-20 lg:ml-[30%] md:ml-2   bg-blue-300 p-3 mt-5 ">
                <h4 className="text-4xl font-semibold p-8">{initials}</h4>
           </div><br></br>
                    <span className=" text-2xl font-bold mt-3 " >{user.username}</span><br></br>
                    <span className=" text-xl text-gray-500 mt-3 mb-0 ml-2 ">{user.email}</span><br></br>
                    {/* <span className=" text-xl  text-gray-500 mt-0 ml-2 ">Member Since 2025</span><br></br> */}
            <ButtonComponent className="bg-blue-600 hover:bg-blue-700 mt-6 mb-9 text-base w-full h-11 pt-1" name=" Changes Avatar" buttonType={"button"} />
                </div>
        </div>
   
)
}