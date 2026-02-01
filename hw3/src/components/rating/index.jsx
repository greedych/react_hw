import { useState } from "react";
import style from "./styles.module.css";

const ratingList = [
  "https://www.clipartmax.com/png/middle/67-676995_5-star-rating-png.png",

  "https://www.clipartmax.com/png/middle/297-2970219_movie-4-star-rating-png.png",

  "https://www.clipartmax.com/png/middle/73-731815_stars-clipart-2-5-star-rating.png",

  "https://www.clipartmax.com/png/middle/297-2970338_rating-2-out-of-5-gold-stars.png",
];

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const setBadly = () => {
    setRatingValue(3);
  };

  const setAcceptable = () => {
    setRatingValue(2);
  };

  const setGood = () => {
    setRatingValue(1);
  };

  const setExcellent = () => {
    setRatingValue(0);
  };

  return (
    <div className={style.box}>
      <img src={ratingList[ratingValue]} alt="" />
      <button onClick={setBadly} className={style.ratingButton}>
        Badly
      </button>
      <button onClick={setAcceptable} className={style.ratingButton}>
        Acceptable
      </button>
      <button onClick={setGood} className={style.ratingButton}>
        Good!
      </button>
      <button onClick={setExcellent} className={style.ratingButton}>
        Excellent!!!
      </button>
    </div>
  );
}

export default Rating;
