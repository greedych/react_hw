import spotify from "../../assets/spotify.svg";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.box}>
      <img src={spotify} alt="spotify" className={styles.spotifyImg} />
    </div>
  );
}

export default Header;
