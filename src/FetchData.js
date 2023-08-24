import React, { useCallback, useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://reqres.in/api/users?page=1");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const { data } = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  return "";
};

export default FetchData;
