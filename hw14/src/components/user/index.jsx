import { connect } from "react-redux";
import styles from "./styles.module.css";

function User({ userName, userStatus }) {
  return (
    <div className={styles.userBox}>
      <h1>User</h1>
      <h3>Name: {userName}</h3>
      <p>status: {userStatus}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: state.userName,
  userStatus: state.userStatus,
});

export default connect(mapStateToProps)(User);
