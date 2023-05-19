import { useState,useEffect } from "react"

/**
 * Displays the newly created comment
 * @param {string} id The id of the user
 * @param {string} comment The comment
 * @returns The user and the comment
 */
function DisplayComment({id,comment})
{

    const [author,setAuthor] = useState([])

    const getAuthor = async()=>
    {
        try

        {

    const res = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/users/ids/${id}`)

      let result = await res.json()


     setAuthor(result.username)
        }
        catch(error)
        {
            alert(error.message)
        }
    }
    
    useEffect(() => {
        getAuthor()
      }, [])

    return(
        
        <p>({author}) - {comment}</p>
    )
}

export {DisplayComment}