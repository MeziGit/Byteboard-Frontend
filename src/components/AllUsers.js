import { useState } from "react"
import { ListUsers } from "./ListUsers"

function AllUsers() {
    const [users,setUsers] = useState([])

    const callGetAllUsers = async () => {

        const response = await fetch("http://localhost:1339/users",
            { method: "GET" });

        const result = await response.json();

        setUsers(result)
    };

    return (

        <>

            <button onClick={callGetAllUsers}>Get All Users</button>

            <ListUsers users={users} />
        </>
    )
}

export { AllUsers }