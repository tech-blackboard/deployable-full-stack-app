import { Link } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../context/AuthContext"

export default function Logout(){
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
     const navigate = useNavigate()
    //  const getUser = JSON.parse(localStorage.getItem('user'))
    //  console.log("getUser", user)
//    function logout(){
//        const removeUser = localStorage.removeItem(("user"))
//        console.log("removeUser", removeUser)
      
//        setUser(null)
//        navigate('/HomePage')

    const { logout } = useContext(AuthContext);

    useEffect(()=>{
        logout()
    },[logout])
//    }
    return(
        <div>
          <h1>logging out.....😊</h1>
        </div>
    )
}