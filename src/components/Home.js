import  {LoggedInContext}  from "./App";
import NavButton from "./NavButton";
import Header from "./Header";
import { Navbar } from "react-bootstrap";
import { AllUsers } from "./AllUsers";
import { PostForm } from "./PostForm";

function Home()
{
    return(
        
        <div>

<h1>Home</h1>
       
       <div className="home">
       <AllUsers/>

<PostForm/>
       
</div>
       </div>
    )
}

export {Home}