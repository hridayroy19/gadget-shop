import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import axios from "axios";

const useUserData = () => {
  const { user, loading } = UseAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`http://localhost:5000/user/${user?.email}`);
      setUserData(res.data);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [loading, user]);

  return userData;
};

export default useUserData;
