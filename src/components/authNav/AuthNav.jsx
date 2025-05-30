import { NavLink } from "react-router-dom";
import styles from './AuthNav.module.css';
import clsx from "clsx";

const setActiveClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
const AuthNav = () => {
    return(
        <div className={styles.list}>
            <NavLink to='/register' className={setActiveClass}>Register</NavLink>
            <NavLink to='/login' className={setActiveClass}>Login</NavLink>
        </div>
    );
};
export default AuthNav;