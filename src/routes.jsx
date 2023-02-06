import { Navigate, Outlet } from "react-router-dom";
import {
  HomePage,
  UserPage,
  UsersLayout,
  UsersList,
  EditUserPage,
} from "./App";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "users",
    element: <UsersLayout />,
    children: [
      {
        path: "",
        element: <UsersList />
      },
      {
        path: ":userId",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Navigate to="./profile" />,
          },
          {
            path: "profile",
            element: <UserPage />,
          },
          {
            path: "profile/edit",
            element: <EditUserPage />,
          },
          {
            path: "*",
            element: <Navigate to="./profile" />,
          }
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/"/>,
  },
];

export default routes;
