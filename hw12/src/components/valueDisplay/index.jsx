import { useEffect, useRef, useState } from "react";

function ValueDisplay({ text }) {
  const prevRef = useRef("");
  const [prevText, setPrevText] = useState("");

  useEffect(() => {
    setPrevText(prevRef.current);
    prevRef.current = text;
  }, [text]);

  return (
    <div>
      <p>Prev text: {prevText}</p>
      <p>Current text: {text}</p>
    </div>
  );
}

export default ValueDisplay;
