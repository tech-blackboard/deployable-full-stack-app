import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import ProfileDropDown from "./ProfileDropDown";
// import  ProfileBar  from "./ProfileBar";

interface MenuItem {
    label: string;
    path: string;


}

interface SidebarProps {
    title: string;
    menuItems: MenuItem[];
    classNames:string;
}

export default function SideBarComponent({ title, menuItems, classNames }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { user} = useContext(AuthContext);
    console.log("user",user)

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


  

   
    return (
        <>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden p-1 text-white bg-blue-500 fixed top-3 left-3 rounded-lg z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-52 bg-blue-500 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                transition-transform duration-300 ease-in-out z-40 md:hidden`}
            >
                <div className="p-4 text-xl font-bold text-white">{title}</div>

                <nav className="flex flex-col gap-3 p-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="text-white p-2 rounded hover:bg-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Desktop Navbar */}
            <header className="hidden md:flex items-center justify-between bg-blue-500 text-white p-4">
                <h1 className="text-xl font-bold">{title}</h1>

                <nav className="flex gap-8  mt-1 text-base font-medium">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="hover:text-gray-200 px-9"
                        >
                            {item.label}
                            
                        </Link>
                    ))}
                    <ProfileDropDown />

                </nav>
             
            </header>
        </>
    );
}
