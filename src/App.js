import { NavLink, Outlet, useParams } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const elements = useRoutes(routes);
  return elements;
}
export default App;

export function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <NavLink to="users">Users list</NavLink>
    </>
  );
}

export function UsersLayout() {
  return <Outlet />;
}

export function UsersList() {
  return (
    <>
      <NavLink to="/">Home Page</NavLink>
      <ul>
        {[...new Array(10)].map((el, i) => (
          <li key={`user_id_${i}`}>
            <NavLink to={`/users/${++i}`}>User {i}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export function UserPage() {
  const { userId } = useParams();
  return (
    <>
      <h1>User Profile: {userId}</h1>
      <NavLink to="edit">Edit user</NavLink> <br/>
      <NavLink to="/users">User list</NavLink>
    </>
  );
}

export function EditUserPage() {
  const { userId } = useParams();
  return (
    <>
      <h1>Edit user: {userId}</h1>
      <NavLink to={`/users/${userId}`}>User profile</NavLink> <br/>
      <NavLink to={`/users/${Number(userId)+1}`}>Another user</NavLink> <br/>
      <NavLink to="/users">Users list</NavLink>
    </>
  )
}
