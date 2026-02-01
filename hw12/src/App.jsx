import { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/valueDisplay";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Current and Previous text</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ValueDisplay text={text} />
    </div>
  );
}

export default App;
