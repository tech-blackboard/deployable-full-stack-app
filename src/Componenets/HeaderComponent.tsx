interface HeaderProps{
    Dashboard:string;
    Projects?:string;
    Analytics?:string;
    Profile?:string;
    Logout?:string;
}


export default function HeaderComponent({Dashboard,Projects,Analytics,Profile,Logout}: HeaderProps){
    return(
        <div>
           <nav>
                 <a href="/Dashboard">{Dashboard}</a>
                {Projects && <a href="/Projects">{Projects}</a>}
                {Analytics && <a href="/Analytics">{Analytics}</a>}
                {Profile && <a href="/Profile">{Profile}</a>}
                {Logout && <a href="/logout">{Logout}</a>}
            </nav>
        </div>
    )
}