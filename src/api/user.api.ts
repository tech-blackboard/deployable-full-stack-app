import axiosInstance from "./axiosInstance";

export function updateuserApi(userId: number, data: any) {
    return axiosInstance.patch(`/users/${userId}`, data)

} 