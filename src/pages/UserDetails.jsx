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
    <div>
      <div className="container">
        <div className="btn btn-primary w-100 mt-5">
          <Link to="/" className="btn btn-primary w-100">
            Back
          </Link>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center ">
            <div className="col-12 col-md-4 col-lg-3 text-center">
              <div className="center profile">
                <img
                  src={userData.avatar}
                  className="card-img-top profile-img"
                  alt={userData.first_name}
                />
              </div>
            </div>
            <div className="mt-sm-5 mt-3 mt-md-0 col-12 col-md-8 col-lg-6 d-flex flex-column justify-content-center align-center ">
              <div className="card d-flex ">
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                    <div>
                      <p className="card-text">First Name:</p>
                      <p className="card-text">Last Name:</p>
                      <p className="card-text">Email:</p>
                    </div>
                    <div className="text-left">
                      <p className="card-text">{userData.first_name}</p>
                      <p className="card-text">{userData.last_name}</p>
                      <p className="card-text">{userData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
