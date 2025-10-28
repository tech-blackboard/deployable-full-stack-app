import {Link} from 'react-router-dom';
import HomePage from './HomePage';


interface HeaderProps {
    Dashboard?: string;
    Projects?: string;
    Analytics?: string;
    Profile?: string;
    Logout?: string;
    EditTask?: string
    sittings?: string;
    TaskListview?: string;
    Boardview?: string;
    className?: string;
    Login?:string;
    SignUp?:string;
    ErrorLoadingStates?:string;
    HomePage?:string;

}


export default function HeaderComponent({ Login, SignUp, Dashboard, Projects, Analytics, Profile, Logout, EditTask, HomePage,sittings, TaskListview, Boardview, className ,ErrorLoadingStates}: HeaderProps) {
    const Headerclass = `hover:shadow-xl hover:px-5 hover:border  py-2 rounded-xl px-3 bg-blue-800  text-white font-semibold ${className}`;
    return (
        <div>
            <nav className='flex flex-col md:flex-row gap-2  ml-9  '>
                {Login  && <Link  className={Headerclass} to="/Login">{Login}</Link>}
                {SignUp && <Link className={Headerclass} to="/SignUp">{SignUp}</Link>}
                {Dashboard && <Link className={Headerclass} to="/Dashboard">{Dashboard}</Link>}
                {Projects && <Link className={Headerclass} to="/Projects">{Projects}</Link>}
                {Analytics && <Link className={Headerclass} to="/Analytics">{Analytics}</Link>}
                {Profile && <Link className={Headerclass} to="/Profile">{Profile}</Link>}
                {Logout && <Link className={Headerclass} to="/logout">{Logout}</Link>}
                {EditTask && <Link className={Headerclass} to="/EditTask">{EditTask}</Link>}
                {sittings && <Link className={Headerclass} to="/sittings">{sittings}</Link>}
                {TaskListview && <Link className={Headerclass} to="/TaskListview">{TaskListview}</Link>}
                {Boardview && <Link className={Headerclass} to="/Boardview">{Boardview}</Link>}
                {ErrorLoadingStates && <Link className={Headerclass} to="/ErrorLoadingStates">{ErrorLoadingStates}</Link> }
                {HomePage && <Link className={Headerclass} to="/HomePage">{HomePage}</Link>}

            </nav>

        </div>
    )
}