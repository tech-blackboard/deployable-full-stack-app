import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfileDropDown() {
    const [open, setOpen] = useState(false);
    const { user } = useContext(AuthContext);

    function getInitials(username) {
        if (!username) return "";
        const parts = username.trim().split(" ");
        return parts.length === 1
            ? parts[0][0].toUpperCase()
            : parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    }

    const initials = getInitials(user.username);

    return (
        <div className="relative md:w-1/3 lg:w-1/2 ">
            {/* Circle Button */}
            <button
                className="border rounded-full h-9 w-9 mr-9 bg-blue-300"
                onClick={() => setOpen(!open)}
            >
                <h4 className="text-base text-blue-800 font-bold p-1">{initials}</h4>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-5 bg-blue-300 shadow-lg  rounded-lg p-2 w-72 text-black ">
                    <div className=" flex flex-row ">
                        <div className="border  rounded-full h-12 w-12 mr-9 ml-5 mt-3 bg-blue-900" >
                            <h4 className="text-xl text-white font-bold p-2 ">{initials}</h4>
                        </div>
                        <div className="mt-3 mb-4 text-start">
                            <h2 className="text-base text-start  font-semibold">
                            {user.username}
                        </h2 >
                        <h3 className="text-base mr-1">{user.email}</h3></div>
                        </div>   
                   
                    <a href="/Profile" className="block p-2 hover:bg-gray-200 rounded-md">
                        Profile
                    </a>
                    <a href="/Logout" className="block p-2 hover:bg-gray-100  rounded-md">
                        Logout
                    </a>
             </div>
            )}
        </div>
    );
}
