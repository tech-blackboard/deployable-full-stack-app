import './TaskListView.css';
import HeaderComponent from './HeaderComponent'
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent'
export default function TaskListView() {
    return (
        <div className=" ">
            <div className=" flex justify-between bg-gray-700">
                <h2 className="text-white font-bold text-xl pt-3 ml-11" >← E-commerce Wedsite</h2>
                {/* <nav>
                    <a href='/Listview'>List View</a>
                    <a href="/Boardview">Board View</a>
                </nav> */}
                <HeaderComponent
                    Listview="Listview"
                    Boardview="Boardview" />

            </div>
            <InputComponent inputType='text' placeholder='Auth' className="w-[80%] p-2 mt-11" />
            <select className='w-[80%] border-2 rounded-xl mt-9 p-2'>
                <option>All Status</option>
            </select>
            <select className='w-[80%] border-2 rounded-xl mt-9 p-2 '>
                <option>High Priority </option>

            </select>

            <ButtonComponent className="bg-blue-500 hover:bg-blue-400 mt-6 mb-9 " name="+New Task" />


            <div className="flex justify-evenly flex-wrap  shadow-2xm border rounded-xl p-11 w-[90%] ml-20">
                <div className="">
                    <h5 className='text-xl mr-[54%] font-bold'>Setup Aythentication</h5>
                    <span className="text-xm mr-11 ">JWT implementation with login/register • Due: Tomorrow</span>

                    <div className="flex justify-center gap-3 mr-[70%] pt-3">
                        <div className='text-white bg-red-500 w-32 rounded-xl' >High</div>
                        <div className='text-white bg-gray-500 w-44 rounded-xl'>Backend</div>
                    </div>
                </div>
                <div className="flex gap-3 mt-6">
                    <ButtonComponent className="bg-gray-500 hover:bg-gray-400  " name="Edit" />
                    <ButtonComponent className="bg-blue-500 hover:bg-green-400  " name="Complete" />
                    <ButtonComponent className="bg-red-500 hover:bg-red-400  " name="Delete" />

                </div>

            </div>


            <div className="flex justify-evenly flex-wrap mt-9 pb-9 mb-9  shadow-2xm border rounded-xl p-11 w-[90%] ml-20">
                <div className="">
                    <h5 className='text-xl mr-[94%] font-bold'>User Authentication Frontend</h5>
                    <span className="text-xm mr-44 ">Login and register form in React • Due: Next Week</span>

                    <div className="flex justify-center gap-3 mr-[70%] pt-3">
                        <div className='text-white bg-orange-500  rounded-xl' >Medium</div>
                        <div className='text-white bg-gray-500 w-96 rounded-xl'>Backend</div>
                    </div>
                </div>
                <div className="flex gap-3 mt-8">
                    <ButtonComponent className="bg-gray-500 hover:bg-gray-400  " name="Edit" />
                    <ButtonComponent className="bg-blue-500 hover:bg-blue-400  " name="Start" />
                    <ButtonComponent className="bg-red-500 hover:bg-red-400  " name="Delete" />

                </div>

            </div>

        </div>

    )
}