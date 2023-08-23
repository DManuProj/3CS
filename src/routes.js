import { createBrowserRouter } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/view-user/:userId",
    element: <UserDetails />,
  },
]);
