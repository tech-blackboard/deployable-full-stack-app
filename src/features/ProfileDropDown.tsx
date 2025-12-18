import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import HeaderComponent from "./HeaderComponent";

export default function ProfileDropDown({className:any}) {
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
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setOpen(!open)}
                className="h-11 w-11 flex items-center justify-center rounded-full bg-gradient-to-br 
                           from-cyan-500 to-cyan-700 text-white font-bold shadow-md hover:shadow-lg 
                           transition-all duration-200 animate-pulse  mr-4 "
            >
                {initials}
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    className="absolute right-0 mt-3 md:w-72  bg-white/90 backdrop-blur-xl shadow-2xl 
                               rounded-2xl p-5 border border-white/40 animate-fadeIn z-50"
                >
                    {/* Avatar + Details */}
                    <div className="flex items-center gap-4  ">
                        <div
                            className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-800 
                                       text-white flex justify-center items-center text-lg
                                       font-semibold shadow-inner"
                        >
                            {initials}
                        </div>

                        <div>
                            <p className="text-gray-800 font-semibold text-sm mr-9">{user.username}</p>
                            <p className="text-gray-500 text-xs">{user.email}</p>
                        </div>
                    </div>

                    <hr className="my-4 border-gray-300/40" />

                    {/* Profile Button */}
                    {/* <a
                        href="/Profile"
                        className="block w-full px-4 py-2 rounded-xl font-medium text-gray-700  
                                   hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 "
                    >
                        Profile
                    </a> */}
                    <HeaderComponent Profile="Profile"  className="block w-full ml-5 py-2 rounded-xl font-medium text-gray-700  
                                   hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 "
                    />

                    {/* Logout Button */}
                    <a
                        href="/Logout"
                        className="block w-full px-4 py-2 mt-2 rounded-xl font-medium text-red-600 
                                   hover:bg-red-50 transition-all duration-200 "
                    >
                        Logout
                    </a>
                </div>
            )}
        </div>
    );
}
