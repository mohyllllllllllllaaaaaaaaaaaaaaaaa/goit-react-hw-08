import { Outlet } from "react-router-dom"
import AppBar from "../appBar/AppBar";

const Layout = () => {
    return(
        <div>
            <AppBar/>
            <Outlet/>
        </div>
    );
};
export default Layout;