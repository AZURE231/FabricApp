import { useEffect, useState } from "react";
import Navbar from "../Navigation/Navbar";

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);
    if (!authenticated) {
    } else {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
};
export default Dashboard;
