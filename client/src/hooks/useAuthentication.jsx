import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

export const useAuthentication = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setLoading(false);
  }, [user]);

  return { loggedIn, loading };
};
