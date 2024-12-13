/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Loading from "../pages/Loading";


const PrivetRouter = ({children}) => {
    const {user, loading}=UseAuth()
    const loaction = useLocation()

     if(loading){
        return <Loading/>
     }
     if(user){
        return children
     }
    return <Navigate to="/login" state={{from:loaction}} replace />};

export default PrivetRouter;