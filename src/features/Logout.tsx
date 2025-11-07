import { Link } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
     const navigate = useNavigate()
    //  const getUser = JSON.parse(localStorage.getItem('user'))
    //  console.log("getUser", user)
   function logout(){
       const removeUser = localStorage.removeItem(("user"))
       console.log("removeUser", removeUser)
      
       setUser(null)
       navigate('/HomePage')

   }
    return(
        <div>
           {
                user ?(
                <><h1>logout</h1><button onClick={logout}><Link to="/HomePage" ></Link></button></>
            ):(
                <p>user not found </p>
            )
           }
        </div>
    )
}