import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    updateProject,
    deleteProject as deleteProjectRedux,
    addProject,
} from "../reduxStore/CreateNewProjectSlice";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import { deleteProjectApi, updateProjectApi } from "../api/project.api";
import { toast } from "react-toastify";

export default function EditTask() {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const newProjects = useSelector((state: any) => state.newProject.addProjects);

    const projectIndex = Number(id);
    const project = newProjects[projectIndex];

    //  If project doesn't exist → Redirect safely

    const [taskTitle, setTaskTitle] = useState(project.projectName);
    const [Description, setDescription] = useState(project.description);
    const [startDate, setStartDate] = useState(project.startDate);
    const [DueDate, setDueDate] = useState(project.targetEndDate);

    useEffect(() => {
        if (!project) {
            navigate("/Dashboard");
        }
    }, [project]);

    //  Prevent ANY rendering before redirect
    if (!project) return null;

    async function editTask() {
        const updatedProjects = {
            projectId: project.projectId, // keep id
            projectName: taskTitle,
            description: Description,
            startDate,
            targetEndDate: DueDate,
        };
        try {
            const update = await updateProjectApi(project.projectId, updatedProjects)//here we can update the project in db
            dispatch(updateProject({ projectId: project.projectId, updatedData: updatedProjects }));
            //updatedData  this from slice 
            toast.success("Project updated successfully!")

            navigate(`/Projects/${projectIndex}`);
        } catch (error) {
            toast.error("you project not updated! ")
        }
    }
    async function deleteProject() {


        //   const deleteProject = await deleteProjectApi(project.projectId)
        //   const deleted = project.filter((p: any) => p.projectId !==  projectId)
        //   dispatch(addProject(project.projectId));

        //   navigate("/Dashboard");


        const deleted = await deleteProjectApi(project.projectId);//here we can delete the project from db

        dispatch(deleteProjectRedux(project.projectId)); // delete by id
        toast.success(" delete Project successfully!")
        navigate("/Dashboard");

        if (!deleted) {
            navigate("/Dashboard");
        }
    }


    function cancelproject() {
        setTaskTitle("");
        setDescription("");
        setStartDate("");
        setDueDate("");
    }

    function closeButton() {
        navigate("/Dashboard");
    }

    return (
        <div className="relative shadow-xl border-2 rounded-xl mx-auto pb-2  w-full md:w-1/2  lg:w-1/3 px-9">
            <h3 className="text-xl font-semibold mt-2 pt-2 mr-56 mb-3">Edit Task</h3>
            <button className="absolute top-[13px] text-xl right-[30px]" onClick={closeButton}>
                &times;
            </button>

            <label className="text-9xm font-semibold mr-64">Task Title</label>
            <InputComponent inputType="text" inputValue={taskTitle} inputOnChange={(e) => setTaskTitle(e.target.value)} className="lg:w-full ml-3" />

            <label className="text-9xm font-semibold mr-64 md:mr-60">Description</label>
            <InputComponent className="border-2 mb-4 lg:w-full ml-3" inputValue={Description} inputOnChange={(e) => setDescription(e.target.value)} />


            <label className="text-9xm font-semibold mr-64">Start Date</label>
            <InputComponent inputType="date" inputValue={startDate} inputOnChange={(e) => setStartDate(e.target.value)} className="lg:w/full ml-2" />

            <label className="text-9xm font-semibold mr-64">Due Date</label>
            <InputComponent inputType="date" inputValue={DueDate} inputOnChange={(e) => setDueDate(e.target.value)} className="lg:w/full ml-2" />


            <div className="flex gap-7 justify-center mt-9">
                <ButtonComponent className="bg-gray-600 hover:bg-gray-700 w-full" name="Cancel" onClick={cancelproject} />
                <ButtonComponent className="bg-red-600 hover:bg-red-700 w-full" name="Delete" onClick={deleteProject} />
                <ButtonComponent className="bg-blue-600 hover:bg-blue-700 w-full" name="Save Changes" onClick={editTask} />
            </div>
        </div>
    );
}
