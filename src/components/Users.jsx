import React from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <>
      {props.userData.map((user) => (
        <Link
          to={{
            pathname: `/view-user/${user.id}`,
          }}
          key={user.id}
        >
          <UserCard
            fname={user.first_name}
            email={user.email}
            profileImg={user.avatar}
          />
        </Link>
      ))}
    </>
  );
};

export default Users;
