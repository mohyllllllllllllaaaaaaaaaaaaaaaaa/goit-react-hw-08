import { useSelector } from "react-redux";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import styles from './AppBar.module.css';
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <header className={styles.header}>
          
            <div className={styles.navigation}>
        <Navigation/>
        {isLoggedIn && <UserMenu/>}
        {!isLoggedIn && <AuthNav/>}
        </div>
        </header>
        
    );
};
export default AppBar;