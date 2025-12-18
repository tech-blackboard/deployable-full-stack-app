import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ProfileDropDown from "./ProfileDropDown"; // Keep the import

export default function SideBarComponent({ title, menuItems, classNames }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);

    function getInitials(username: any) {
        if (!username) return "";
        const parts = username.trim().split(" ");
        if (parts.length === 1) return parts[0][0].toUpperCase();
        return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    }

    const initials = getInitials(user.username);

    return (
        <>
            {/* Mobile Hamburger (This is the button you see on mobile) */}
            <button
                className="md:hidden p-2 rounded-lg bg-cyan-600 text-white shadow-lg fixed top-4 right-4 z-50 
                            hover:bg-cyan-600 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64  
                             bg-gradient-to-tr 
                           from-cyan-500 to-cyan-600 shadow-xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                            transition-transform duration-300 ease-in-out z-40 md:hidden rounded-r-2xl`}
            >
                {/* Header of Mobile Sidebar */}
                <div className="flex justify-between items-center px-5 py-4 border-b border-white/20">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>

                    {/* // ------------------------------------------------------------------
                        // 🔑 CHANGE HERE: Remove or Hide ProfileDropDown in Mobile Sidebar Header
                        // You can either remove the component completely if it's not needed, 
                        // or replace it with a button to close the menu, or just leave it empty.
                        // Since the Hamburger is outside and closes the menu, we will just remove it.
                        // ------------------------------------------------------------------
                        
                        // OLD CODE: <ProfileDropDown className={undefined} /> 
                    */}
{/* 
                    OPTION 1: Use a dedicated close button inside the sidebar for clarity
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-200 transition"
                    >
                        <X size={24} /> */}
                       <ProfileDropDown /> 

                    {/* </button> */}

                </div>

                {/* Menu Items */}
                <nav className="flex flex-col mt-5 px-4 gap-2">
                    {menuItems.map((item: any, index: any) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-md px-4 py-2 rounded-lg hover:bg-blue-500 
                                     transition font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Add a Logout link here for mobile users
                    <a
                        href="/Logout"
                        className="text-white text-sm px-4 py-2 mt-4 rounded-lg bg-red-600/70 hover:bg-red-700 transition font-medium"
                    >
                        Logout
                    </a> */}
                </nav>
            </aside>

            {/* Desktop Navbar (Original code, ensures ProfileDropDown is available for desktop) */}
            <header className="hidden lg:block lg:bg-gradient-to-r from-cyan-600 to-cyan-700 text-white lg:py-2 shadow-lg lg:w-48 ">
                <div className="flex flex-wrap gap-9">
                    <div className="w-9 h-9 bg-cyan-500 rounded-xl flex text-xl text-white shadow-lg mb-3 ml-2 gap-2">
                        {/* Using the SVG checkmark icon for TaskFlow branding */}
                        <div className="ml-2 mt-2">
                            <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3a2 2 0 012-2h3m-3 0h4m-4 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path></svg>

                        </div>
                        <h1 className="text-xl font-bold tracking-wide animate-bounce ml-[32%] mt-2 border-b border-white/20  ">{title}</h1>

                        </div>
                    </div>
                    {/* <h1 className="text-xl font-bold tracking-wide animate-bounce ml-[32%] mt-2 text-none ">{title}</h1> */}

                    {/* Profile Dropdown (Kept for Desktop View) */}
                    <div className="absolute top-2 right-2">
                        {/* This placement might need adjustment depending on your desktop layout */}
                        <ProfileDropDown className="bg-cyan-300" />
                    </div>

         

                <nav className="flex flex-wrap flex-col mt-3  text-lg font-medium ">
                    {menuItems.map((item: any, index: any) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="hover:text-gray-200 p-4  mx-3 transition border border-transparent rounded-lg shadow-md text-base font-semibold text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150 "
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </header>
        </>
    );
}