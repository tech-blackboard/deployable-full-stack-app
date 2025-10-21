import './TaskListView.css';
import HeaderComponent from './HeaderComponent'
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent'
export default function TaskListView() {
    return (
        <div >
            <div className="  relative flex justify-between bg-gray-700 w-[160%] md:w-[100%]">
                <h2 className="text-white font-bold text-2xl pt-2 ml" >← E-commerce Wedsite</h2>
                {/* <nav>
                    <a href='/Listview'>List View</a>
                    <a href="/Boardview">Board View</a>
                </nav> */}
                <HeaderComponent
                    Listview="Listview"
                    Boardview="Boardview" />

            </div>
            <InputComponent inputType='text' placeholder='Auth' className="w-full text-xl md:w-[70%]  p-2 ml-28 mt-11" />
            <select className='w-full border-2 rounded-xl  text-xl mt-9 p-2  ml-28 md:w-[70%]'>
                <option>All Status</option>
            </select>
            <select className='w-full  border-2  text-xl rounded-xl mt-9 p-2  ml-28 md:w-[70%]  '>
                <option>High Priority </option>

            </select>

            <ButtonComponent className="bg-blue-500  text-2xl hover:bg-blue-400 mt-9 mb-9 ml-52 md:mr-[20%]" name="+New Task" />


            <div className="flex justify-evenly flex-wrap  shadow-2xm border rounded-xl p-11 w-[120%] md:w-[88%] ml-20">
                <div className="">
                    <h5 className='text-2xl mr-[29%] font-bold pb-1 md:mr-11'>Setup Aythentication</h5>
                    <span className="text-xl mr-[50%] md:mr-11 ">JWT implementation with login/register  🔸Due:Tomorrow</span>

                    <div className="flex justify-center gap-3 mr-[9%] pt-3  md:mt-2">
                        <div className='text-white bg-red-500 w-32 p-1 rounded-xl text-xl ' >High</div>
                        <div className='text-white bg-gray-500 w-44  rounded-xl text-xl '>Backend</div>
                    </div>
                </div>
                <div className="flex gap-11 mt-9 pr-9">
                    <ButtonComponent className="bg-gray-500 hover:bg-gray-400 mr-11  w-[118%]" name="Edit" />
                    <ButtonComponent className="bg-blue-500 hover:bg-green-400 w-[128%] " name="Complete" />
                    <ButtonComponent className="bg-red-500 hover:bg-red-400 w-[143%] " name="Delete" />

                </div>

            </div>


            <div className="flex justify-evenly flex-wrap mt-9 pb-9 mb-9  shadow-2xm border rounded-xl p-11 w-[120%] ml-20  md:w-[88%]">
                <div className="">
                    <h5 className='text-2xl mr-[%] pb-1 font-bold '>User Authentication Frontend</h5>
                    <span className="text-xl ml-3 mr-[50%] pt-3 md:mr-11 ">Valide of Login and register form In  React  🔸Due: Next Week </span>

                    <div className="flex justify-center gap-3  pt-3 md:mt-2 md:mr-9">
                        <div className='text-white bg-orange-500 w-44 p-1  rounded-xl text-xl' >Medium</div>
                        <div className='text-white bg-gray-500 w-44 p-1 rounded-xl  text-xl'>Backend</div>
                    </div>
                </div>
                <div className="flex gap-11  mt-9 pr-9">
                    <ButtonComponent className="bg-gray-500 hover:bg-gray-400 mr-9 mr-11  w-[128%] " name="Edit" />
                    <ButtonComponent className="bg-blue-500 hover:bg-blue-400 w-[148%] " name="Start" />
                    <ButtonComponent className="bg-red-500 hover:bg-red-400  w-[153%] " name="Delete" />

                </div>

            </div>

        </div>

    )
}