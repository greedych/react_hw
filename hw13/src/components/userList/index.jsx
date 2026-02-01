import { connect } from "react-redux";
import UserItem from "../userItem";

function UserList({ users, filter }) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ol>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ol>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
