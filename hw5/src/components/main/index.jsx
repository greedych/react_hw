import apple from "../../assets/apple-logo.svg";
import google from "../../assets/google-logo.svg";
import x from "../../assets/x-logo.svg";
import styles from "./styles.module.css";

function Main() {
  return (
    <div className={styles.box}>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <p>Sign in with</p>
      <div className={styles.socialsBox}>
        <div className={styles.imgBox}>
          <img src={apple} alt="apple" className={styles.socialImg} />
        </div>
        <div className={styles.imgBox}>
          <img src={google} alt="apple" className={styles.socialImg} />
        </div>
        <div className={styles.imgBox}>
          <img src={x} alt="apple" className={styles.socialImg} />
        </div>
      </div>
    </div>
  );
}

export default Main;
