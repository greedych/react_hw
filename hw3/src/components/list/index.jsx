import { useState } from "react";

const peopleArr = [
  { id: 1, name: "Иван", age: 20 },

  { id: 2, name: "Мария", age: 22 },

  { id: 3, name: "Алексей", age: 21 },

  { id: 4, name: "Марина", age: 19 },

  { id: 5, name: "Даша", age: 23 },

  { id: 6, name: "Глеб", age: 24 },

  { id: 7, name: "Дима", age: 18 },

  { id: 8, name: "Гриша", age: 20 },

  { id: 9, name: "Серафим", age: 21 },
];

function List() {
  const [people, setPeople] = useState(peopleArr);

  const deleteHuman = (id) => {
    setPeople((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {people.map((human) => (
        <li>
          {human.name}: {human.age}
          <button onClick={() => deleteHuman(human.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default List;
