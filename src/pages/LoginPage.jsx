import { useSelector } from "react-redux";
import LoginForm from "../components/loginForm/LoginForm";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const Login = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(isLoggedIn){
        return <Navigate to='/' />
    }
    return(
    <div>
        <main>
     <h2>Sing In!</h2>
     <p>Please enter your email and password to access your contacts.</p>
     <LoginForm/> 
     </main> 
     </div>
    );
};
export default Login;