import AdminNavbar from "./AdminNavbar";
import './page-admin.css'
import { getCookie } from "../components/Utils";

const Admin = () => {
    return (  
        <div className="admin">
            <h2>WELCOME, {getCookie('authToken')}</h2>
            <AdminNavbar/>
        </div>
    );
}
 
export default Admin;