import { useState } from "react";
import Answer from "../answer";

function MathQuiz() {
  const [points, setPoints] = useState(0);

  const [a, setA] = useState(() => Math.floor(Math.random() * 10));
  const [b, setB] = useState(() => Math.floor(Math.random() * 10));

  const generateNewTask = () => {
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;

    if (Number(userAnswer) === correctAnswer) {
      setPoints((prev) => prev + 1);
    } else {
      setPoints((prev) => prev - 1);
    }

    generateNewTask();
  };

  return (
    <div>
      <h1>Math Quiz</h1>
      <h2>
        {a} + {b} = ?
      </h2>
      <p>Score: {points}</p>

      <Answer updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
