interface HeaderProps {
    Dashboard?: string;
    Projects?: string;
    Analytics?: string;
    Profile?: string;
    Logout?: string;
    EditProfile?: string
    sittings?: string;
    Listview?: string;
    Boardview?: string;
    className?:string;

}


export default function HeaderComponent({ Dashboard, Projects, Analytics, Profile, Logout, EditProfile, sittings, Listview, Boardview ,className}: HeaderProps) {
    const Headerclass =` rounded-xl  bg-gray-500 p-2 text-white ml-11 mt-3 md:pt-0 ${className}`;
    return (
        <div>
            <nav className='flex  gap-2 p-4  ml-9  '>
                {Dashboard && <a className={Headerclass} href="/Dashboard">{Dashboard}</a>}
                {Projects && <a className={Headerclass} href="/Projects">{Projects}</a>}
                {Analytics && <a className={Headerclass} href="/Analytics">{Analytics}</a>}
                {Profile && <a className={Headerclass} href="/Profile">{Profile}</a>}
                {Logout && <a className={Headerclass} href="/logout">{Logout}</a>}
                {EditProfile && <a className={Headerclass} href="/EditProfile">{EditProfile}</a>}
                {sittings && <a className={Headerclass} href="/sittings">{sittings}</a>}
                {Listview && <a className={Headerclass} href="/Listview">{Listview}</a>}
                {Boardview && <a className={Headerclass} href="/Boardview">{Boardview}</a>}
            </nav>
        </div>
    )
}