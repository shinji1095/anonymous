import { useState, useEffect } from "react";
import User from "../type/user";

const readUser = (): User | undefined => {
  const user = sessionStorage.getItem("user");
  return user != null ? JSON.parse(user) : undefined;
};

export const useUser = () => {
  
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setUser(readUser());
      setLoading(false);
    }, []);
  
    return {
      user,
      loading,
    };
  };