import {  useState } from "react"


function UpdateDescriptionForm() {
    const [description,setDescription] = useState(null)



    const handleSubmit = async (event) => {
        event.preventDefault()




        try {


            const res = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/session/getUsername`,
                { method: "GET", credentials: "include" });

            if (res.status !== 200) throw new Error("User not logged in")

            const username = await res.text();



            const requestOptions = {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify({
                    usernameToUpdate: username,
                    description:description
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/users`, requestOptions)

            if (response.status === 200) {
                alert("Description updated")

            }
            else {

                let result = await response.json()
                alert(result.errorMessage)

            }
        }
        catch (error) {
            alert("an error occured try again")
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Update Description: </label>
            <input type="text" name="description" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} />


            {description && <button type="submit">Update</button>}
        </form>
    )
}

export { UpdateDescriptionForm}