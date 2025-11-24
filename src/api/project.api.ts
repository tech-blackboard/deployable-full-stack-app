import axiosInstance from "./axiosInstance";

export default function createProject(projectName: string, description: string, startDate: string, targetEndDate: string, projectCategory: string, teamMembers: string ){
    console.log("project api", { projectName, description, startDate, targetEndDate, projectCategory ,teamMembers})
    return axiosInstance.post('/project', { projectName, description, startDate, targetEndDate, projectCategory, teamMembers: teamMembers.split(",").map(m => m.trim()) })
}
  
export function updateProjectApi(projectId: number, data:any) {
    return axiosInstance.patch(`/project/${projectId}`, data)

}


export function deleteProjectApi(projectId:number){
    return axiosInstance.delete(`/project/${projectId}`)

}

