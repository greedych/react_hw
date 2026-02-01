import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function CatImage() {
  const URL = "https://api.thecatapi.com/v1/images/search";

  const [cat, setCat] = useState();

  console.log(cat);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(URL);
        if (response.status === 200) {
          setCat(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCats();
  }, []);

  const fetchCats = async () => {
    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setCat(response.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!cat) return <p>Loading...</p>;

  return (
    <div className={styles.catsBox}>
      <h1 className={styles.catTitle}>Funny Cats</h1>
      <img className={styles.catImg} src={cat.url} alt={cat.id} />
      <button className={styles.fetchCatButton} onClick={fetchCats}>
        New Cat
      </button>
    </div>
  );
}

export default CatImage;
