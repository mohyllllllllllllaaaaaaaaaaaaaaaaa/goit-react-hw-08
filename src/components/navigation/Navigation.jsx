import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const setActiveClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
            <nav className={styles.navlist}>
<NavLink to='/' className={setActiveClass} >Home</NavLink>
{isLoggedIn && <NavLink to='/contacts' className={setActiveClass}>Contacts</NavLink>}
            </nav>
    );
};
export default Navigation;