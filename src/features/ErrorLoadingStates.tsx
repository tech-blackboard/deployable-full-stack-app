import HeaderComponent from './HeaderComponent';
// import './ErrorLoadingStates.css';
import Loading from './Loading';
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent';
export default function ErrorLoadingStates() {
    return (
        <div className="  w-full ">
            <div className="flex justify-between bg-gray-700 px-1 py-2 ">
                <h1 className='text-2xl md:text-3xl text-white font-bold p-4'>TaskManager</h1>
                <HeaderComponent Dashboard="Dashboard" Projects="Projects" className='w-full' />
            </div>

            <div className="">
                <p className="text-2xl md:text-3xl font-bold pt-9 mb-8">Various Application States</p>

                <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

                    {/* Loading State */}
                    <div className=" max-w-md shadow-xl border rounded-xl p-10 text-center">
                        <h1 className='text-2xl font-bold mb-10 mt-4'>Loadingstate</h1>
                        <Loading />
                        <p className='text-xl font-semibold text-gray-900 mb-4'>Loading your projects...</p>
                    </div>

                    {/* Error State */}
                    <div className="w-full max-w-md shadow-xl border rounded-xl p-11">
                        <h1 className='text-2xl font-bold mb-4 '>ErrorState</h1>
                        <div className="border rounded-xl bg-red-200 border-red-300 p-9 mb-4">
                            <p className='text-red-600 text-center'>
                                ⚠ Unable to load projects. Please check your internet connection and try again.
                            </p>
                        </div>
                        <ButtonComponent
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                            name="Retry"
                        />
                    </div>

                    {/* Empty State */}
                    <div className="w-full max-w-md border border-gray-300 rounded-xl shadow-xl p-2 text-center">
                        <p className='text-2xl font-bold mb-4'>Empty State</p>
                        <span role="img" aria-label="clipboard" className='text-8xl block mb-4'>📋</span>
                        <p className="text-gray-500 font-bold text-xl mb-3">No projects yet</p>
                        <p className="text-lg text-gray-600 mb-6">
                            Create your first project to get started with task management.
                        </p>
                        <ButtonComponent
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6"
                            name="Create Project"
                        />
                    </div>
                </div>

                {/* Success State */}
                <div className=" border rounded-xl shadow-xl p-6 mt-11 mb-11">
                    <h1 className="text-2xl font-bold mb-4">Success State</h1>
                    <div className=" grid  grid-cols-1 gap-4">
                        <div className=" border rounded-xl p-6 bg-green-100">
                            <p className="text-lg font-bold mb-3">✅ Success!</p>
                            <span className='text-green-800 font-bold'>
                                Project "E-commerce Website" has been created successfully.
                            </span>
                        </div>
                        <div className="flex-xl  border rounded-xl p-6 bg-green-50">
                            <p className="text-xl font-bold mb-3">🎉 Welcome to your new project!</p>
                            <span className=" text-green-700">Start by adding your first task</span>
                        </div>
                    </div>

                </div>

                {/* Form Validation */}
                <div className="  border shadow-xl rounded-xl p-6 mb-3">
                    <h3 className="text-xl font-bold mb-6">Form Validation Examples</h3>

                    <div className="">
                        <div>
                            <label className="block text-lg font-semibold mb-2">Project Name *</label>
                            <InputComponent inputType="text" className="w-full  p-2 border-2 border-red-500" />
                            <span className="text-red-600 text-sm">Project name is required</span>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold mb-2">Email</label>
                            <InputComponent inputType="email" className="w-full p-2 border-2 border-red-500" />
                            <span className="text-red-600 text-sm">Please enter a valid email address</span>
                        </div>

                        <div>
                            <label className="block text-lg font-semibold mb-2">Due Date</label>
                            <InputComponent inputType="date" className="w-full p-2 border-2 border-green-500" />
                            <span className="text-green-600 text-sm">✓ Valid date selected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}