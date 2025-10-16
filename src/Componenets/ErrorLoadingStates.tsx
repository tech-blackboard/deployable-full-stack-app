import HeaderComponent from './HeaderComponent';
import './ErrorLoadingStates.css';
import Loading from './Loading';
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent';
export default function ErrorLoadingStates() {
    return (
        <div>

            <div className="flex flex-wrap justify-between  bg-gray-700 content-around">
                <h1 className='text-2xl text-white ml-4   p-3  font-bold'>TaskManager</h1>
                <HeaderComponent Dashboard="Dashboard" Projects="Projects" />
            </div>
            <p className="text-2xl font-bold  pt-9 mr-[60%]">Various Application States</p>

            <div className="flex flex-wrap pt-9 ">
                <div className="shadow-xl border ml-[10%] p-22 rounded-xl w-[29%] h-45 ">
                    <h1 className='text-xl font-bold mb-10 mt-9 text-black-200'>Loadingstate</h1>
                    <Loading />
                    <p className='text-xm mt-9 font-semibold text-gray-900'>Loading your projects...</p>
                </div>
                <div className="shadow-xl border ml-[20%] p-9 rounded-xl w-[29%] h-45">
                    <h1 className='text-xl font-bold mb-9 text-black-200'>ErrorState</h1>
                    <div className=" flex flex-wrap justify-between">
                        <p className='w-[80%]  border rounded-xl text-red-600 bg-red-200 ml-11 p-9  border-red-300'>⚠Unable to load projects.Please check <br></br> your  internet connection  <br></br>and try again.</p>
                        <ButtonComponent className="bg-blue-100 hover:bg-blue-700 pb-2 mt-9 ml-28  " name=" Retry" />
                    </div>
                </div>

                <div className="border border-gray-300 rounded-xl mt-11 ml-36 shadow-xl w-[30%]">
                    <p className='text-xl font-bold mb-3 pt-3'>Empty State</p>
                    <figure>
                        <span role="img" aria-label="clipboard" className='text-7xl mt-11 '> 📋</span>
                        <figcaption className="text-gray-500 font-bold ">No projects yet</figcaption>
                    </figure>
                    <p className=" text-xm text-black-200 mt-3">Create your first project to <br></br>get started with task <br></br>management.</p><br></br>
                    <ButtonComponent className="bg-blue-600 hover:bg-blue-700 pb-3  mt-4 mb-1 " name=" Create Project" />

                </div>

                <div className="flex flex-wrap border rounded-xl justify-between w-[30%] ml-72 mt-11 shadow-xl  ">
                    <h1 className="text-black-500  text-xl mt-9  ml-32   pt-0 p-9 font-bold">Success State</h1>
                    <div className="w-[70%] h-[30%] border rounded-xl mb-9 ml-20 p-3 bg-green-100">
                        <p className="text-xl font-bold mb-3 mr-9">✅ Success!</p>
                        <span className='text-green-800 font-bold'>Project "E-commerce Website"<br></br> has been created successfully.</span>
                    </div>
                    <div className="border border-gray-300 rounded-xl border-green-200 p-6 ml-20 mb-9 shadow-xs w-[70%]">
                        <p className="text-xm font-bold ">  🎉 Welcome to your new project!</p>
                        <span className="text-xm text-green-700  " >Start by adding your first task</span>
                    </div>
                </div>
            </div>

            <div className="border shadow-xl w-[94%] ml-[3%] rounded-xl border-blue-200 mt-11 p-9 mb-11">
                <h3 className="text-xl font-bold  mb-4" >Form Validation Examples</h3>
                <label className="text-xl mr-44 font-semibold  mr-[68%]">Project Name *</label>
                <InputComponent inputType="text" className="w-[80%] p-2 border-red-500" />
                <span>Project name is required</span><br></br>
                <label className="text-xl font-semibold  mr-[74%] border-red-500" >Email</label>
                <InputComponent inputType="email" className="w-[80%] p-2 border-red-500 " />
                <span>Please enter a valid email address</span><br></br>
                <label className="text-xl mr-56 font-semibold  mr-[72%]">Due Date</label>
                <InputComponent inputType="date" className="w-[80%] p-2  border-green-500 " />
                <span>✓ Valid date selected</span>
            </div>
        </div>
    )
}