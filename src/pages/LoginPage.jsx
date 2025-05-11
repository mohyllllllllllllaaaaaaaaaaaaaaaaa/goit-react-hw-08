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
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis rem laborum nihil culpa omnis, cum pariatur ad porro tempora cumque facere modi blanditiis praesentium illo id quos molestiae? Obcaecati.</p>
     <LoginForm/> 
     </main> 
     </div>
    );
};
export default Login;