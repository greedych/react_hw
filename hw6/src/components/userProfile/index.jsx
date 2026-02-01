import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

const URL = "https://randomuser.me/api";

function UserProfile() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setUser(response.data.results[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(URL);
        if (response.status === 200) {
          setUser(response.data.results[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  console.log(user);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.userBox}>
      <img className={styles.userImg} src={user.picture.large} alt="" />
      <div>
        <p className={styles.userText}>
          Name:{" "}
          {user.name.title + "." + " " + user.name.first + " " + user.name.last}
        </p>
        <p className={styles.userText}>Email: {user.email}</p>
        <p className={styles.userText}>Gender: {user.gender}</p>
      </div>
      <button className={styles.fetchButton} onClick={fetchUser}>
        Fetch user
      </button>
    </div>
  );
}

export default UserProfile;
