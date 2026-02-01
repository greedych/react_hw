function UserList({ users }) {
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
}

export default UserList;
