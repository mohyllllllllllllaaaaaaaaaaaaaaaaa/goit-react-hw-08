import { useSelector } from "react-redux";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const Register = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(isLoggedIn){
        return <Navigate to='/' />
    }
    return(
        <div>
            <main>
            <h2>Sing Up!</h2>
            <p>By registering in the Contact Manager App, you gain access to your own secure and personalized contact list. Registration allows you to:
Safely store your contacts in the cloud
Access your contacts from any device after logging in
Add, delete, edit, and filter contacts with ease
Ensure your data stays private and protected
Create your account to start managing your contacts efficiently and securely!

</p>
            <RegistrationForm/>
            </main>
        </div>
    );
};
export default Register;