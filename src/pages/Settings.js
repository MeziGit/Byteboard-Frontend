import DeleteAccountButton from "../components/DeleteAccountButton"
import { EmailChangeForm } from "../components/EmailChangeForm"
import { PasswordChangeForm } from "../components/PasswordChangeForm"
import { UsernameChangeForm } from "../components/UsernameChangeForm"

/**
 * Provides a settings page for the user
 * @returns The settings page
 */
function Settings()
{
    return(
        <div>
       <UsernameChangeForm/>     
<EmailChangeForm/>
<PasswordChangeForm/>
<br/>

<DeleteAccountButton/>
        </div>
    )
}


export default Settings