import { AllPostsFromUser } from "../components/AllPostsFromUser";
import { DisplayUser } from "../components/DisplayUser"
import React, { useEffect, useState } from 'react';




const Profile = () => {
    const [user, setUser] = useState({})
  
    const url = window.location.href

    const userName = url.split("?")[1]

    

    const fetchData = () => {
      fetch(`http://localhost:1339/users/${userName}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUser(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <div>
        {user && (
          <ul>
<DisplayUser user={user}/>

<h1>Description</h1>
<h1>{user.description}</h1>
<h1>Reputation: {user.reputation}</h1>


          </ul>
        )}

<AllPostsFromUser user={user}/>
      </div>
    )
  }

export default Profile