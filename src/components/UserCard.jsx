import React from "react";

const UserCard = (props) => {
  return (
    <div className=" col-sm-6 col-xs-12 col-md-6 col-lg-4 center ">
      <div
        className="card mt-5 min-width-200 p-2   "
        style={{ width: "18rem", cursor: "pointer" }}
      >
        <div className="center  profile">
          <img
            src={props.profileImg}
            className="card-img-top profile-img  "
            alt="..."
          />
        </div>
        <div className="card-body">
          <p className="card-text fs-md-6 fs-sm-4 ">{props.fname}</p>
          <p className="card-text">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
