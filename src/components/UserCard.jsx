import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = (props) => {
  const navigate = useNavigate();

  const navigateHandle = () => {
    navigate(`/view-user/${props.userId}`);
  };
  return (
    <div
      onClick={navigateHandle}
      className=" user-card col-sm-6 col-xs-12 col-md-6 col-lg-4 center "
    >
      <div
        className="card mt-5 min-width-200 p-2   "
        style={{ width: "18rem", cursor: "pointer" }}
      >
        <div className="center  profile">
          <img
            src={props.profileImg}
            className="card-img-top profile-img  "
            alt={props.fname}
          />
        </div>
        <div className="card-body">
          <p className="card-text fw-bold fs-4 ">{props.fname}</p>
          <p className="card-text font-size-email ">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
