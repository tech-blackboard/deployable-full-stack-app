import axiosInstance from "./axiosInstance"

export default function createLists( listName:string,projectId:number){
    console.log("creatr list api ", { listName,projectId});
    return axiosInstance.post('/lists', {listName,projectId });
}
export function deleteListApi(listId: number) {
    return axiosInstance.delete(`/project/${listId}`)

}