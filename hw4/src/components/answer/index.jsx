import { useState } from "react";

function Answer({ updatePoints }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") return;

    updatePoints(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Your answer"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Answer;
