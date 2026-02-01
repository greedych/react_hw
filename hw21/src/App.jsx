import { useDispatch, useSelector } from "react-redux";
import { submitQuestion } from "./redux/slices/questionSlice";
import Question from "./components/question";
import Result from "./components/result";

function App() {
  const dispatch = useDispatch();
  const { questions, submitted } = useSelector((state) => state.question);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Анкета</h1>

      {!submitted && questions.map((q) => <Question key={q.id} question={q} />)}

      {!submitted && (
        <button onClick={() => dispatch(submitQuestion())}>Отправить</button>
      )}

      <Result />
    </div>
  );
}

export default App;
