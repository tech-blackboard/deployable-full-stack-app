import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ProfileDropDown from "./ProfileDropDown";

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
            {/* Mobile Hamburger */}
            <button
                className="md:hidden p-2 rounded-lg bg-blue-600 text-white shadow-lg fixed top-4 right-4 z-50 
                           hover:bg-blue-700 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 
                           shadow-xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                           transition-transform duration-300 ease-in-out z-40 md:hidden rounded-r-2xl`}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-5 py-4 border-b border-white/20">
                    <h2 className="text-lg font-bold text-white">{title}</h2>
                    <ProfileDropDown />
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col mt-5 px-4 gap-2">
                    {menuItems.map((item: any, index: any) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-500 
                                       transition font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Desktop Navbar */}
            <header className="hidden md:flex items-center justify-between bg-gradient-to-r 
                               from-blue-600 to-blue-700 text-white px-10 py-2 shadow-lg">
                <h1 className="text-xl font-bold tracking-wide animate-bounce">{title}</h1>

                <nav className="flex items-center gap-10 text-base font-medium">
                    {menuItems.map((item: any, index: any) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="hover:text-gray-200 transition"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Profile Dropdown */}
                    <ProfileDropDown />
                </nav>
            </header>
        </>
    );
}
