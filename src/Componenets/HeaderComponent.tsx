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

}


export default function HeaderComponent({ Dashboard, Projects, Analytics, Profile, Logout, EditProfile, sittings, Listview, Boardview }: HeaderProps) {
    const className = "rounded-xl  bg-gray-500 p-2 text-white";
    return (
        <div>
            <nav className='flex flex-end gap-8 mr-9 p-3 '>
                {Dashboard && <a className={className} href="/Dashboard">{Dashboard}</a>}
                {Projects && <a className={className} href="/Projects">{Projects}</a>}
                {Analytics && <a className={className} href="/Analytics">{Analytics}</a>}
                {Profile && <a className={className} href="/Profile">{Profile}</a>}
                {Logout && <a className={className} href="/logout">{Logout}</a>}
                {EditProfile && <a className={className} href="/EditProfile">{EditProfile}</a>}
                {sittings && <a className={className} href="/sittings">{sittings}</a>}
                {Listview && <a className={className} href="/Listview">{Listview}</a>}
                {Boardview && <a className={className} href="/Boardview">{Boardview}</a>}
            </nav>
        </div>
    )
}