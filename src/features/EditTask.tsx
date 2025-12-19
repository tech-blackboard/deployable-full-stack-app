import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    updateProject,
    deleteProject as deleteProjectRedux,
} from "../reduxStore/CreateNewProjectSlice";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import { deleteProjectApi, updateProjectApi } from "../api/project.api";
import { toast } from "react-toastify";

export default function EditTask() {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const newProjects = useSelector(
        (state: any) => state.newProject.addProjects
    );

    const projectIndex = Number(id);
    const project = newProjects?.[projectIndex];

    // ----------------- LOCAL STATE -----------------
    const [taskTitle, setTaskTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [DueDate, setDueDate] = useState("");

    // ----------------- SAFE INIT & REDIRECT -----------------
    useEffect(() => {
        if (!project) {
            navigate("/Dashboard");
            return;
        }

        setTaskTitle(project.projectName);
        setDescription(project.description);
        setStartDate(project.startDate);
        setDueDate(project.targetEndDate);
    }, [project, navigate]);

    // Prevent render until project exists
    if (!project) return null;

    // ----------------- UPDATE -----------------
    async function editTask() {
        const updatedProjects = {
            projectId: project.projectId,
            projectName: taskTitle,
            description: Description,
            startDate,
            targetEndDate: DueDate,
        };

        try {
            await updateProjectApi(project.projectId, updatedProjects);
            dispatch(
                updateProject({
                    projectId: project.projectId,
                    updatedData: updatedProjects,
                })
            );
            toast.success("Project updated successfully!");
            navigate(`/Projects/${projectIndex}`);
        } catch (error) {
            toast.error("Your project was not updated!");
        }
    }

    // ----------------- DELETE -----------------
    async function deleteProject() {
        try {
            await deleteProjectApi(project.projectId);
            dispatch(deleteProjectRedux(project.projectId));
            toast.success("Project deleted successfully!");
            navigate("/Dashboard");
        } catch (error) {
            toast.error("Project deletion failed!");
        }
    }

    // ----------------- CANCEL -----------------
    function cancelproject() {
        setTaskTitle("");
        setDescription("");
        setStartDate("");
        setDueDate("");
    }

    function closeButton() {
        navigate("/Dashboard");
    }

    // ----------------- UI -----------------
    return (
        <div className="min-h-screen items-center justify-center bg-slate-900 font-lato p-4">
            <div className="relative shadow-xl rounded-md mx-auto pb-2 w-full md:w-1/2 lg:w-1/3 px-9 bg-white">
                <h3 className="text-base font-semibold mt-3 pt-3 mb-5">
                    Edit Task
                </h3>

                <button
                    className="absolute top-[13px] text-xl right-[30px]"
                    onClick={closeButton}
                >
                    &times;
                </button>

                <label className="text-base font-semibold">Task Title</label>
                <InputComponent
                    inputType="text"
                    inputValue={taskTitle}
                    inputOnChange={(e) => setTaskTitle(e.target.value)}
                    className="lg:w-full ml-3"
                />

                <label className="text-base font-semibold">Description</label>
                <InputComponent
                    className="border mb-4 lg:w-full ml-3"
                    inputValue={Description}
                    inputOnChange={(e) => setDescription(e.target.value)}
                />

                <label className="text-sm font-semibold">Start Date</label>
                <InputComponent
                    inputType="date"
                    inputValue={startDate}
                    inputOnChange={(e) => setStartDate(e.target.value)}
                    className="lg:w/full ml-2"
                />

                <label className="text-sm font-semibold">Due Date</label>
                <InputComponent
                    inputType="date"
                    inputValue={DueDate}
                    inputOnChange={(e) => setDueDate(e.target.value)}
                    className="lg:w/full ml-2"
                />

                <div className="flex gap-7 justify-center mt-7 mb-5">
                    <ButtonComponent
                        className="rounded-md bg-gray-600 hover:bg-gray-700 w-full h-10 border-transparent pt-1"
                        name="Cancel"
                        onClick={cancelproject}
                        buttonType="button"
                    />
                    <ButtonComponent
                        className="bg-red-600 hover:bg-red-700 w-full border-transparent pt-1 h-10"
                        name="Delete"
                        onClick={deleteProject}
                        buttonType="button"
                    />
                    <ButtonComponent
                        className="bg-blue-600 hover:bg-blue-700 w-full border-transparent pt-1 h-10"
                        name="Save Changes"
                        onClick={editTask}
                        buttonType="button"
                    />
                </div>
            </div>
        </div>
    );
}
