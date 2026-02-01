import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { answerQuestion } from "../../redux/slices/questionSlice";

function Question({ question }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>

      {question.answers.map((answer) => (
        <button
          key={answer}
          className={
            question.selected === answer ? styles.active : styles.button
          }
          onClick={() =>
            dispatch(
              answerQuestion({
                id: question.id,
                answer,
              }),
            )
          }
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Question;
