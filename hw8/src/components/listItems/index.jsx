import { useEffect } from "react";
import { useState } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState("");

  const handleClick = () => {
    setItems([...items, itemValue]);
    setItemValue("");
  };

  const handleChange = (e) => {
    setItemValue(e.target.value);
  };

  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []);

  return (
    <div>
      <input type="text" onChange={handleChange} value={itemValue} />
      <button onClick={handleClick}>Add item</button>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListItems;
