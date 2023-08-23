import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const { data } = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    }
    console.log(userData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  return (
    <div className="container">
      <div className="btn btn-primary w-100 mt-5">
        <Link to="/" className="btn btn-primary w-100">
          Back
        </Link>
      </div>

      <div className="container d-flex mt-5 justify-content-evenly">
        <div className="center col-2   profile">
          <img
            src={userData.avatar}
            className="card-img-top profile-img  "
            alt="..."
          />
        </div>
        <div className="card col-4 ">
          <div className="card-body d-flex justify-content-evenly align-items-center">
            <div className="">
              <p className="card-text">First Name </p>
              <p className="card-text">Last Name :</p>
              <p className="card-text">Email :</p>
            </div>
            <div className="">
              <p className="card-text">{userData.first_name}</p>
              <p className="card-text">{userData.last_name}</p>
              <p className="card-text">{userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
