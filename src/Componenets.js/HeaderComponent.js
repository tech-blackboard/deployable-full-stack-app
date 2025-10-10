export default function HeaderComponent({Dashboard,Projects,Analytics,Profile,Logout}){
    return(
        <div>
<nav>
    <a href="/Dashboard">{Dashboard}</a>
    <a href="/Projects">{Projects}</a>
    <a href="/Analytics">{Analytics}</a>
    <a href="/Profile">{Profile}</a>
    {/* Render Logout only if it’s passed */}
      {Logout && <a href="/logout">{Logout}</a>}
</nav>
        </div>
    )
}