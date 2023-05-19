import { AllUsers } from "./AllUsers";
import { PostForm } from "./PostForm";
import { AllPosts } from "./AllPosts";

/**
 * The home page for the website
 * @returns The home page
 */
function Home() {

    return (

        <div>

            <h1>Home</h1>

            <div className="home">
                <AllUsers />

                <PostForm />

                <AllPosts />

            </div>
        </div>
    )
}

export { Home }