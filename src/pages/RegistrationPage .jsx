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
            <h2>register page</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, consequuntur exercitationem. Perferendis tenetur sunt quis nisi rem aperiam accusantium assumenda ullam molestias non, aliquid saepe mollitia ea totam nemo expedita?
            Natus amet quaerat, deserunt provident sapiente assumenda accusantium esse optio, dolore quam alias necessitatibus aut mollitia illum quia repellat qui rerum autem. Rerum iusto quod et recusandae voluptas, laborum ratione.</p>
            <RegistrationForm/>
            </main>
        </div>
    );
};
export default Register;