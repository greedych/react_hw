import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h1>User List</h1>
      <ol>
        {users.map((user) => (
          <li>
            {user.name}({user.email})
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;
