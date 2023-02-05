import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const checkAdmin = async () => {
            if (user) {
                const url = `https://cars-arena.onrender.com/admin/${user.email}`;
                const { data } = await axios.get(url);
                setAdmin(data.admin);
                setAdminLoading(false);
            }
        }
        checkAdmin();
    }, [user]);
    return [admin, adminLoading];
}

export default useAdmin;