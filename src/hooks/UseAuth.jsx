import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";


const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default UseAuth;