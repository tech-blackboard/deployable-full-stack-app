import HeaderComponent from './HeaderComponent';
// import './ErrorLoadingStates.css';
import Loading from './Loading';
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent';
export default function ErrorLoadingStates() {
    return (
        <div>

            <div className="flex  justify-between  bg-gray-700 w-[150%] md:w-[100%]">
                <h1 className='text-3xl text-white ml-4  pt-3 md:pt-5   font-bold  md:ml-9'>TaskManager</h1>
                <HeaderComponent Dashboard="Dashboard" Projects="Projects" className='  mr-9 w-28 mb-2 md:mr-9 md:w-28 md:mb-3' />
            </div>
            <p className="text-3xl font-bold  pt-9 ml-9 md:mr-[62%]">Various Application States</p>

            <div className="flex flex-wrap pt-11">
                <div className="shadow-xl border  rounded-xl pr-28 pl-20 ml-28   md:mt-9 md:ml-52">
                    <h1 className='text-2xl font-bold mb-10 mt-9 text-black-200 md:mb-2'>Loadingstate</h1>
                    <Loading />
                    <p className='text-xl  font-semibold text-gray-900 mb-4 '>Loading your projects...</p>
                </div>
                <div className="shadow-xl border ml-28 pr-[12%] p-6 mt-9 rounded-xl md:w-[29%] md:ml-[13%]">
                    <h1 className='text-2xl font-bold  text-black-200'>ErrorState</h1>
                    <div className=" flex flex-wrap justify-between w-72 pt-2">
                        <p className=' border rounded-xl text-red-600 bg-red-200 ml-9 p-9 text-xl border-red-300 md:w-[100%]  md:ml-20 md:p-12'>⚠Unable to load projects.Please check <br></br> your  internet connection  <br></br>and try again.</p>
                        <ButtonComponent className="bg-blue-100 hover:bg-blue-700 pb-2 mt-9 ml-[50%]  text-xl md:ml-28 " name=" Retry" />
                    </div>
                </div>

                <div className="border border-gray-300 rounded-xl mt-11 shadow-xl ml-28 pr-[23%] md:pr-0 md:w-[30%] md:ml-52">
                    <p className='text-2xl font-bold mb-3 pt-3 ml-18'>Empty State</p>
                    <figure>
                        <span role="img" aria-label="clipboard" className='text-8xl mt-11 ml-28 md:mr-[20%] '> 📋</span>
                        <figcaption className="text-gray-500 font-bold ml-28 text-xl md:mr-[20%]  ">No projects yet</figcaption>
                    </figure>
                    <p className=" text-xl text-black-200 mt-3 ml-28 md:mr-[20%]  ">Create your first project to get started with task management.</p><br></br>
                    <ButtonComponent className="bg-blue-600 hover:bg-blue-700 pb-3  mb-4  ml-28 text-xl md:mr-[20%] " name=" Create Project" />

                </div>

                <div className=" border rounded-xl shadow-xl ml-[26%] mt-9 p-3 md:w-[30%]  md:ml-44">
                    <h1 className="text-black-500 text-2xl   p-3 font-bold">Success State</h1>
                    <div className="flex gap-2">
                        <div className="  border rounded-xl mb-9 ml-2 p-9 bg-green-100">
                            <p className="text-2xl font-bold mb-3 ">✅ Success!</p>
                            <span className='text-green-800 font-bold  '>Project"E-commerce Website" has been created successfully.</span>
                        </div>
                        <div className="border border-gray-400 rounded-xl border-green-200 p-9 mb-9 shadow-xs  ">
                            <p className="text-2xl font-bold ">  🎉 Welcome to your new project!</p>
                            <span className="text-xl text-green-700  " >Start by adding your first task</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border shadow-xl w-[134%] ml-[8%] rounded-xl border-blue-200 mt-11 p-9 mb-11 md:w-[85%]">
                <h3 className="text-xl font-bold  mb-4" >Form Validation Examples</h3>
                <label className="text-xl mr-44 font-semibold  mr-[48%] md:mr-[68%]">Project Name *</label>
                <InputComponent inputType="text" className="w-[80%] p-2 border-red-500" />
                <span>Project name is required</span><br></br>
                <label className="text-xl font-semibold  mr-[66%] border-red-500 md:mr-[75%]" >Email</label>
                <InputComponent inputType="email" className="w-[80%] p-2 border-red-500 " />
                <span>Please enter a valid email address</span><br></br>
                <label className="text-xl mr-56 font-semibold  mr-[60%] md:mr-[72%]">Due Date</label>
                <InputComponent inputType="date" className="w-[80%] p-2  border-green-500 " />
                <span>✓ Valid date selected</span>
            </div>
        </div>
    )
}