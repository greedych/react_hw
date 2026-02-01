import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions";
import { useState } from "react";
import styles from "./styles.module.css";

function UserForm({ setUserInfo }) {
  const [formValue, setFormValue] = useState({
    name: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(formValue);
    setFormValue({ name: "", status: "" });
  };

  return (
    <form className={styles.userForm} action="submit" onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        name="name"
        type="text"
        value={formValue.name}
        onChange={handleChange}
      />
      <input
        className={styles.formInput}
        type="text"
        name="status"
        value={formValue.status}
        onChange={handleChange}
      />
      <button className={styles.formInput}>Submit</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  userName: state.userName,
  userStatus: state.userStatus,
});

export default connect(mapStateToProps, { setUserInfo })(UserForm);
