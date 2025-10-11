export default function HeaderComponent({Dashboard,Projects,Analytics,Profile,Logout}){
    return(
        <div>
<nav>
    <a href="/Dashboard">{Dashboard}</a>
    {Projects && <a href="/Projects">{Projects}</a>}
   {Analytics && <a href="/Analytics">{Analytics}</a>}
   {Profile && <a href="/Profile">{Profile}</a>}
    {/* Render Logout only if it’s passed */}
      {Logout && <a href="/logout">{Logout}</a>}
</nav>
        </div>
    )
}