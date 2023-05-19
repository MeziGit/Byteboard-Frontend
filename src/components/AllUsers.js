import { useState } from "react"
import { ListUsers } from "./ListUsers"
import { useEffect } from "react";

/**
 * Gets all the users from a fetch request
 * @returns A list of all the users
 */
function AllUsers() {
    const [users, setUsers] = useState([])

    const callGetAllUsers = async () => {

        const response = await fetch("http://localhost:1339/users",
            { method: "GET" });

        const result = await response.json();

        setUsers(result)
    };

    const [deleteAdmin,setDeleteAdmin] = useState(null)

const getSelf = async()=>
{
    const res = await fetch("http://localhost:1339/session/getSelf",
    { method: "GET", credentials: "include" });

    let result = await res.json()


    if(result.username == "admin")
    {
        setDeleteAdmin(true)
    }
}



useEffect(() => {
    getSelf()
   
  }, [])



    useEffect(() => {
        callGetAllUsers()
      }, [])


    return (
        <>

          
<div className="users">
            <ListUsers users={users} deleteAccount={deleteAdmin} />
            </div>
        </>
    )
}

export { AllUsers }