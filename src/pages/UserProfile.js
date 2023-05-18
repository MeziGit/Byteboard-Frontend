import { useLocation } from "react-router-dom";
import { AllPostsFromUser } from "../components/AllPostsFromUser";
import { DisplayUser } from "../components/DisplayUser"
import React, { useEffect, useState } from 'react';




const UserProfile = () => {
    const location = useLocation()
  const [user, setUser] = useState({})

const getUser = async() =>
{
  try
  {

    const username = location.pathname.split("/")[2]


    fetch(`http://localhost:1339/users/usernames/${username}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
    }
    catch(error)
    {
        alert(error.message)
    }

}


  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      {user && (
        <ul>
          <DisplayUser user={user} />

          <h1>Description</h1>
          <h1>{user.description}</h1>
          <h1>Reputation: {user.reputation}</h1>


        </ul>
      )}

      {user && <AllPostsFromUser user={user} />}

    </div>
  )
}

export default UserProfile