import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function Result() {
  const { questions, submitted } = useSelector((state) => state.question);

  if (!submitted) return null;

  return (
    <div className={styles.result}>
      <h2>Результаты анкеты</h2>
      {questions.map((q) => (
        <p key={q.id}>
          {q.text}: <strong>{q.selected || "Нет ответа"}</strong>
        </p>
      ))}
    </div>
  );
}

export default Result;
