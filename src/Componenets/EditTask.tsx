import './EditTask.css';
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'
export default function EditTask() {
    return (
        <div className="relative shadow-xl border-2 rounded-xl w-[30%] ml-[30%] pb-2 mt-9">
            <h3 className="text-xl font-semibold  mt-11 mr-56  mb-3">Edit Task</h3>
            <button className="absolute top-[13px]  text-xl right-[30px]  ">&times;</button>
            <label className=" text-9xm font-semibold mr-56 mb-5">Task Title</label><br></br>
            <InputComponent inputType="text" /><br></br>
            <label className="mr-56 text-9xm font-semibold mb-5">Description</label><br></br>
            <textarea className="border-2 mb-4 w-[70%]" />

            <div className="flex justify-center gap-10 mb-5">
                <div>
                    <label className="text-9xm font-semibold mb-9">Priority</label>
                    <select className="border-2">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>

                </div>
                <div>
                    <label className=" text-9xm font-semibold mb-5">Status</label>
                    <select className="border-2">
                        <option>To-do</option>
                        <option>In Prograss</option>
                        <option>Complete</option>
                    </select>
                </div>
            </div>

            <label className="mr-60 text-9xm font-semibold mb-5">Due Date</label><br></br>
            <InputComponent inputType="date" /><br></br>
            <label className="mr-64 text-9xm font-semibold mb-5">Tags</label><br></br>
            <InputComponent inputType="text" />

            <div className='flex gap-7 justify-center mt-9'>
                <ButtonComponent className="bg-gray-600 hover:bg-gray-700  w-[110%] " name="Cancel" />
                <ButtonComponent className="bg-red-600 hover:bg-red-700  w-[110%]" name="Delete" />
                <ButtonComponent className="bg-blue-600 hover:bg-blue-700   w-[100%] " name="Save Changes" />
            </div>
        </div>
    )
}