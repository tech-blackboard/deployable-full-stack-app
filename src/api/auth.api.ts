import axiosInstance from "./axiosInstance";

export async function registerUser(username: string, email: string, password: string, phoneNumber:string){
    console.log("registerUser", registerUser)
    return axiosInstance.post("/auth/register", { username, email, password, phoneNumber });
}//Create backend registration API call this is.

export default async function loginUser(email: string, password: string) {
    console.log("loginUser", email, password)

    return axiosInstance.post("/auth/login", { email, password })

}//send credentials to backend. backend return the token and user


