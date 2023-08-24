import React from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <>
      {props.userData.map((user) => (
        <UserCard
          userId={user.id}
          fname={user.first_name}
          email={user.email}
          profileImg={user.avatar}
        />
      ))}
    </>
  );
};

export default Users;
