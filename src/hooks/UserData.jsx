import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import axios from "axios";

const useUserData = () => {
  const { user, loading } = UseAuth();
  const [userData, setUserData] = useState(null);
  console.log(userData);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/user/${user?.email}`);

          setUserData(res?.data);

      } catch (error) {
        console.error("Error fetching user data:", error); 
      }};

    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [loading, user]);

  return userData;
}

export default useUserData;
