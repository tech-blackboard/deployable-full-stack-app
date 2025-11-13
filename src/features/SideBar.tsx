import { Menu, X } from "lucide-react";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";

export default function SideBarComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger for mobile */}
            <button
                className="md:hidden p-1 text-white bg-blue-500 fixed top-3 left-3 rounded-lg z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Sidebar for small screens */}
            <aside
                className={`fixed top-0 left-0 h-full w-52 bg-blue-500 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="p-4 text-xl font-bold text-white">TaskManager</div>
                <nav className="flex flex-col gap-3 p-4">
                    <HeaderComponent className="  rounded-md p-2"
                        Profile="Profile"
                        Projects="Projects"
                        Analytics="Analytics"
                        Logout="Logout"/>
                </nav>
            </aside>

            {/* Top navbar for large screens */}
            <header className="hidden md:flex items-center justify-between  text-white p-4">
                <h1 className="text-xl font-bold">TaskManager</h1>

                <nav className="flex gap-8 text-base font-medium">
                    <HeaderComponent className=""
                        Profile="Profile"
                        Projects="Projects"
                        Analytics="Analytics"
                        Logout="Logout"/>
                </nav>
            </header>
        </>
    );
} 