import React, { useCallback, useEffect, useState } from "react";
import "./UserList.css";
import UserCard from "../components/UserCard";
import Users from "../components/Users";

const UserList = () => {
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

  return (
    <div className="container">
      <div className="btn btn-primary w-100 mt-5">
        <p>Title</p>
      </div>

      <div className="container ">
        <p className="mt-4">Users</p>
        <div
          className="container row  "
          style={{
            width: "80%",
            background: "green",
            margin: "auto",
          }}
        >
          {!isLoading && userData.length > 0 && <Users userData={userData} />}
          {!isLoading && userData.length === 0 && !error && (
            <p>Found No Users</p>
          )}
          {!isLoading && error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default UserList;
