import DeleteAccountButton from "../components/DeleteAccountButton"
import { EmailChangeForm } from "../components/EmailChangeForm"
import { PasswordChangeForm } from "../components/PasswordChangeForm"
import { UsernameChangeForm } from "../components/UsernameChangeForm"


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