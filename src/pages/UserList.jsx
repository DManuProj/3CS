import React from "react";
import "./UserList.css";
import UserCard from "../components/UserCard";

const UserList = () => {
  const users = [
    {
      id: "u1",
      fname: "Dulana",
      Lname: "wanigathunga",
      imgUrl:
        "https://dulanawanigathunga-e05ae.web.app/static/media/profile2.24e1be83a4a26f15825d.png",
      email: "dulana@@gmail.com",
    },
    {
      id: "u2",
      fname: "Dulana",
      Lname: "wanigathunga",
      imgUrl:
        "https://dulanawanigathunga-e05ae.web.app/static/media/profile2.24e1be83a4a26f15825d.png",
      email: "dulana@@gmail.com",
    },
    {
      id: "u3",
      fname: "Dulana",
      Lname: "wanigathunga",
      imgUrl:
        "https://dulanawanigathunga-e05ae.web.app/static/media/profile2.24e1be83a4a26f15825d.png",
      email: "dulana@@gmail.com",
    },
    {
      id: "u4",
      fname: "Dulana",
      Lname: "wanigathunga",
      imgUrl:
        "https://dulanawanigathunga-e05ae.web.app/static/media/profile2.24e1be83a4a26f15825d.png",
      email: "dulana@@gmail.com",
    },
    {
      id: "u5",
      fname: "Dulana",
      Lname: "wanigathunga",
      imgUrl:
        "https://dulanawanigathunga-e05ae.web.app/static/media/profile2.24e1be83a4a26f15825d.png",
      email: "dulana@@gmail.com",
    },
  ];

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
          {users.map((user) => (
            <UserCard
              key={user.id}
              fname={user.fname}
              email={user.email}
              profileImg={user.imgUrl}
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
