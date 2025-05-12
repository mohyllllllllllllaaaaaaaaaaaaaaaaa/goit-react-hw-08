import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import styles from './UserMenu.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    }, [user, navigate]);
    return(<>
        < div className={styles.box}>
            <h3 className={styles.name}> Welcome, {user?.name}</h3>
            <button className={styles.button} onClick={() => dispatch(logoutThunk())}>Logout</button>
            </div>
            </>
       
    );
};
export default UserMenu;