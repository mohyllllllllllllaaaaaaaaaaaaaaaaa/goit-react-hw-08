import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import styles from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return(<>
        < div className={styles.box}>
            <h3 className={styles.name}> Welcome, {user.name}</h3>
            <button className={styles.button} onClick={() => dispatch(logoutThunk())}>Logout</button>
            </div>
            </>
       
    );
};
export default UserMenu;