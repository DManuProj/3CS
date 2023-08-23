import React, { useCallback, useEffect, useState } from "react";
import "./UserList.css";
import UserCard from "../components/UserCard";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://reqres.in/api/users?page=1");

    const { data } = await response.json();
    setUserData(data);
    console.log(userData);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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
          {userData.map((user) => (
            <UserCard
              key={user.id}
              fname={user.first_name}
              email={user.email}
              profileImg={user.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
//   {
//     users.map((user) => (
//       <div className="col-4">
//         <div key={user.id} className="card mt-5" style={{ width: "18rem" }}>
//           <img src={user.imgUrl} className="card-img-top" alt="..."></img>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up
//               the bulk of the card's content.
//             </p>
//             <a href="#" className="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       </div>
//     ));
//   }
