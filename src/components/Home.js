import { AllUsers } from "./AllUsers";
import { PostForm } from "./PostForm";
import { AllPosts } from "./AllPosts";

function Home() {

    return (

        <div>

            <h1>Home</h1>

            <div className="home">
                <AllUsers />

                <PostForm />

               <AllPosts/>

            </div>
        </div>
    )
}

export { Home }